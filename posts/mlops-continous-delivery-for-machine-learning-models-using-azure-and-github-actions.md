---
title: "MLOps - Continous Delivery for Machine Learning Models using Azure and Github Actions"
excerpt: "MLOps is the practice of applying DevOps principles and practices to the development and deployment of machine learning (ML) models. One of the key challenges in MLOps is to create a continuous delivery pipeline for ML models, which can automate the process of building, testing, and deploying ML models."
coverImage: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80"
date: "2021-07-23T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

In this article, we're going to take a look at how to automatically package a machine learning model using Azure and Github Actions.

## Github Code

Before we start, the entire code is uploaded here for your reference.

[https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure](https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure)

## Packaging ML Models

We will be using ONNX model and package it within a container that serves a Flask app that performs the prediction. I will use the [RoBERTa-SequenceClassification](https://github.com/onnx/models/tree/master/text/machine_comprehension/roberta) ONNX model, which is very well documented. After creating a new Git repository, the first step to work with is to figure out the dependencies needed. After creating the Git repository, start by adding the following requirements.txt file:

```python
simpletransformers==0.4.0
tensorboardX==1.9
transformers==2.1.0
flask==1.1.2
torch==1.7.1
onnxruntime==1.8.1
```

Next, create a Dockerfile that installs everything in the container:

```Dockerfile
FROM python:3.8

COPY ./requirements.txt /webapp/requirements.txt

WORKDIR /webapp

RUN pip install -r requirements.txt

COPY webapp/* /webapp/

ENTRYPOINT [ python ]

CMD [app.py]
```

The Dockerfile copies the requirements file, creates a webapp directory and copies the application code, a single app.py file. Create the webapp/app.py file to perform the sentiment analysis.

```python
from flask import Flask, request, jsonify
import torch
import numpy as np
from transformers import RobertaTokenizer
import onnxruntime

app = Flask(__name__)
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
session = onnxruntime.InferenceSession(
    "roberta-sequence-classification-9.onnx")

def to_numpy(tensor):
    return tensor.detach().cpu().numpy() if tensor.requires_grad else tensor.cpu().numpy()


@app.route("/predict", methods=["POST"])
def predict():
    """
    Input sample:
        [ "Containers are good" ]
    Output sample:
        {"postive": True}
    """
    input_ids = torch.tensor(
        tokenizer.encode(request.json[0], add_special_tokens=True)
    ).unsqueeze(0)

    inputs = {session.get_inputs()[0].name: to_numpy(input_ids)}
    out = session.run(None, inputs)

    result = np.argmax(out)

    return jsonify({"positive": bool(result)})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
```

The `predict()` function is a Flask route that enables the `/predict` URL when the application is running. The function only allows POST HTTP methods. There is no description of the sample inputs and outputs yet because one critical part of the application is missing: the ONNX model does not exist yet.

Download the [RoBERTa-SequenceClassification ONNX model from here](https://github.com/onnx/models/tree/master/text/machine_comprehension/roberta/model) locally, and place it at the root of the project.

The ONNX model exists at the root of the project, but the application wants it in the /webapp directory, so move it inside that directory so that the Flask app doesn’t complain

```terminal
$ mv roberta-sequence-classification-9.onnx webapp/
```

Create a new virtual environment, activate it, and install all the dependencies:

```terminal
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```

Now run the application locally by invoking the app.py file with Python:

```terminal
$ cd webapp
$ python app.py
* Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```

Next, the application is ready to consume HTTP requests. So far, I’ve not shown what the expected inputs are. These are going to be JSON formatted requests with JSON responses. Use the curl program to send a sample payload to detect sentiment:

curl -X POST -H "Content-Type: application/JSON" \
 --data '["Containers are more or less interesting"]' \
 http://0.0.0.0:5000/predict

{
"positive": false
}

curl -X POST -H "Content-Type: application/json" \
 --data '["MLOps is critical for robustness"]' \
 http://0.0.0.0:5000/predict

{
"positive": true
}

**Optional**: Create a Makefile at the root of the project to check model inference.
[https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure/blob/master/Makefile](https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure/blob/master/Makefile)

## Build it locally with Docker

Now that you’ve verified that the application runs and that the live prediction is functioning properly, it is time to create the container locally to verify all works there. Create the container, and tag it with something meaningful:

```terminal
docker build -t deploy/roberta .
```

Now run the container locally to interact with it in the same way as when running the application directly with Python. Remember to map the ports of the container to the localhost:

```terminal
$ docker run -it -p 5000:5000 --rm alfredodeza/roberta
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```

Send an HTTP request in the same way as before, you can use the curl program again

```terminal
make check_inference
```

## Continuous Delivery of ML Models

The contents of the project should be pushed in Git repository without the ONNX model.

This is because the ML/DL model are usually very large and shouldn't be uploaded in a version control system. Git is not meant to handle versioning of binary files and has the side-effect of creating huge repositories because of this.

All the heavy lifting to perform the (local) live inferencing is done, so create a new Github repository and add the project contents except for the ONNX model. Remember, there is a size limit for files in Github, so it isn’t possible to add the ONNX model into the Github repo. Create a .gitigore file to ignore the model and prevent adding it by mistake:

Create a `.gitignore` file in the root of the directory

```.gitignore
*onnx
```

Register/upload the ONNX model in Azure Machine Learning Studio.

![Register Azure Model](https://i.ibb.co/k9J5kRG/register-model.png)

Once registered you will get something like this

![Register Azure Model](https://i.ibb.co/VHkXcFz/azure-ml.png)

After pushing the contents of the Git repository without the ONNX model, we are ready to start automating the model creation and delivery.

Next, since the ONNX model doesn’t exist locally, we need to retrieve it from Azure, so we must authenticate using the Azure action. After authentication, the az tool is made available, and we must attach the folder for my workspace and group. Finally, the job can retrieve the model by its ID.

To do this, we will use Github Actions, which allows us to create a continuous delivery workflow in a YAML file, that gets triggered when configurable conditions are met. The idea is that whenever the repository has a change in the main branch, the platform will pull the registered model from Azure, create the container, and lastly, it will push it to a container registry.

Start by creating a .github/workflows/ directory at the root of your project, and then add a main.yml that looks like this:

```yaml
name: Build and package RoBERTa-sequencing to Dockerhub

on:
  # Triggers the workflow on push or pull request events for the main branch
  push:
    branches: [master]
    paths:
      - "**.py"

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Authenticate with Azure
        uses: azure/login@v1
        with:
          creds: ${{secrets.AZURE_CREDENTIALS}}

      - name: set auto-install of extensions
        run: az config set extension.use_dynamic_install=yes_without_prompt

      - name: attach workspace
        run: |
          az extension add --name azure-cli-ml
          az ml folder attach --workspace-name "machine-learning-deployment" --resource-group "cloud-shell-storage-centralindia"
      - name: retrieve the model
        run: az ml model download -t "." --model-id "roberta-sequence:2"

      - name: Authenticate to Docker hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}

      - name: build flask-app container
        uses: docker/build-push-action@v2
        with:
          context: ./
          file: ./Dockerfile
          tags: harshitsinghai77/flask-roberta:latest
          push: true
```

## Steps to package the RoBERTa-Sequence model:

1. Checkout the current branch of the repository
2. Authenticate to Azure Cloud
3. Configure auto-install of Azure CLI extensions
4. Attach the folder to interact with the workspace
5. Download the ONNX model
6. Build the container for the current repo

## Configure GitHub Actions with Azure Machine Learning

Since the ONNX model doesn’t exist locally, we need to retrieve it from Azure, so we must authenticate using the Azure action. After authentication, the az tool is made available, and we must attach the folder for my workspace and group. Finally, the job can retrieve the model by its ID.

Steps to configure Github Actions to pull the registered model from Azure.

Generate deployment credentials:

To get the credentials, go to Azure Cloud Shell

````terminal\
az ad sp create-for-rbac --name "myML" --role contributor --scopes /subscriptions/<subscription-id> resourceGroups/<group-name> --sdk-auth```
````

The output is a JSON object with the role assignment credentials that provide access to your App Service app similar to below. Copy this JSON object.

## Github App Secrets

In GitHub, browse your repository, select Settings > Secrets > Add a new secret. Paste the entire JSON output from the Azure CLI command into the secret's value field. Give the secret the name AZURE_CREDENTIALS.

Commit and push your changes to your repository and then head to the Actions tab. A new run gets immediately scheduled and should start running in a few seconds. After a few minutes, everything should’ve completed.

There is one final item missing here, though, and that is to publish the container after it builds. Different container registries will require different options here, but most do support Github Actions which is refreshing. Docker Hub is straightforward, and all it requires is to create a token and then save it as a Github project secret, along with your Docker Hub username. Once that is in place, adapt the workflow file to include the authentication step before building:

```yaml
- name: Authenticate to Docker hub
  uses: docker/login-action@v1
  with:
    username: ${{ secrets.DOCKER_HUB_USERNAME }}
    password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}
```

Lastly, update the build step to use push: true.

That is

```yaml
- name: build flask-app container
    uses: docker/build-push-action@v2
    with:
        context: ./
        file: ./Dockerfile
        tags: harshitsinghai77/flask-roberta:latest
        push: true
```

## Conclusion

Once everything is configured correctly, upload the code in your Github repository. On every pull request to master branch, Github Actions will authenticate azure, fetch the ML model from Azure Machine Learning Studio, create a container and push the container to DockerHub.

Example:
[https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure/actions](https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure/actions)

[https://hub.docker.com/repository/docker/harshitsinghai77/flask-roberta](https://hub.docker.com/repository/docker/harshitsinghai77/flask-roberta)

## Github Code

[https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure](https://github.com/harshitsinghai77/machine-learning-model-continuous-delivery-using-azure)

That’s it for today, see you soon. :)
