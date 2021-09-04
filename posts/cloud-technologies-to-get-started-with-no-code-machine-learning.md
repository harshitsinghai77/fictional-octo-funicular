---
title: "Automate your ML workflow with no code Machine Learning."
excerpt: "If you had only had 4 hours to train a model and put it into production to save the world, would you be writing code? Let's take a look at some cloud and open source tools available to automate your Machine Learning workflow."
coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
date: "2021-08-05T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

If you had only had 4 hours to train a model and put it into production to save the world, would you be writing code?

Obviously No, I would make the most of off-the-shelf automation tools like Azure AutoML, Apple CreateML, Google AutoML, H20 or Ludwig.

We will take a breif look on each of these options.

## Apple’s Ecosystem

Apple may not be the first candidate that enters your mind when you think about Machine Learning tools space. Apple has rich UI to create basic machine learning model with click of a button.

[CoreML](https://coremltools.readme.io/docs) - Core ML is an Apple framework to integrate machine learning models into your app.

There is also a Python package to convert models from third-party training libraries like TensorFlow and Keras.

### Apple’s AutoML: CreateML

One of the core innovations with Apple’s ML Platform is how they expose power AutoML technology enclosed in an intuitive GUI. Apple Create ML lets you do the following things.

1. Create Core ML Models
2. Preview the model performance
3. Train models on the Mac (taking advantage of their M1 chip stack)
4. Use Training Control: i.e., pause, save and resume training
5. Use eGPU (external GPUs

[Read more about Apple's CreateML here](https://developer.apple.com/machine-learning/create-ml/)

![Apple CreateML](https://i.ibb.co/hHtP1Zf/pmlo-0515.png)

![Apple CreateML](https://i.ibb.co/5jvvC0V/pmlo-0518.png)

## Google’s AutoML

There are several critical approaches to Computer Vision on the GCP platform (similar to other cloud platforms, the service names are different). These options appear in order of difficulty.

1. Write machine learning code that trains a model
2. Use Google AutoML Vision
3. Download a pre-trained model from [TensorFlow Hub](https://tfhub.dev/) or another location.
4. Use the [Vision AI API](https://cloud.google.com/vision)

![Google AutoML](https://i.ibb.co/YLDcX8L/pmlo-0523.png)

![Google AutoML](https://i.ibb.co/mCH7Tgh/pmlo-0524.png)

![Google AutoML](https://i.ibb.co/xm4yqgr/pmlo-0525.png)

## Azure’s AutoML

There are two primary ways to access Azure AutoML. One is the console, and the other is programmatic access to AutoML [Python SDK](https://docs.microsoft.com/en-us/azure/machine-learning/tutorial-auto-train-models?view=azure-ml-py).

To get started doing AutoML on Azure, you need to launch an instance of Azure ML Studio and select the Automated ML option.

![Azure AutoML](https://i.ibb.co/3CpjS8p/pmlo-0527.png)

Next, create a dataset either by uploading it or using an open dataset.

![Azure AutoML](https://i.ibb.co/GJpG8fx/pmlo-0528.png)

Next, I spin up a classification job to predict the target feature in your dataset. Many different types of machine learning predictions are available, including numerical regression and time-series forecasting. You will need to set up storage and a cluster if you have not already done so.

![Azure AutoML](https://i.ibb.co/tMjW2xg/pmlo-0529.png)

Once jobs complete, you can also ask Azure ML Studio to “explain” how it got to its predictions. A machine learning system explains how a model comes up with forecasts via “explainability,” which is a critical upcoming capability of AutoML systems.

![Azure AutoML](https://i.ibb.co/1LQggDr/pmlo-0530.png)

## AWS AutoML

AWS also has many AutoML solutions. One of the earliest solutions includes a tool with a bad name, “Machine Learning,” that is no longer widely available but was an AutoML solution. Now the recommended solution is Sagemaker AutoPilot. You can view many examples of Sagemaker AutoPilot in actions from the [official documentation](https://sagemaker-examples.readthedocs.io/en/latest/index.html).

# Open Source AutoML Solutions

## Ludwig

One of the more promising approaches to open-source AutoML is [Ludwig AutoML](https://github.com/ludwig-ai/ludwig). The advantage to open source is that a corporation does not control it!

You can find many additional excellent examples of [Ludwig in their official documentation](https://ludwig-ai.github.io/ludwig-docs/examples/).

One of the more exciting aspects of Ludwig is that it is under active development. As part of the Linux Foundation, they recently released version 4. It adds many additional features like working with remote file systems and distributed out of memory tools like Dask and Ray. Finally, there is deep integration and growing for mlflow.

![Ludwig](https://i.ibb.co/yf2mTD3/pmlo-0539.png)

## Honourable Mention

There is no shortage of open-source AutoML frameworks. Here are some additional frameworks to look at for both AutoML.

H2O AutoML: [https://docs.h2o.ai/h2o/latest-stable/h2o-docs/automl.html](https://docs.h2o.ai/h2o/latest-stable/h2o-docs/automl.html)

Auto-sklearn: [https://github.com/automl/auto-sklearn](https://github.com/automl/auto-sklearn)

PyCaret: [https://pycaret.org](https://pycaret.org)

AutoKeras: [https://autokeras.com](https://autokeras.com)

What is exciting about these open-source frameworks is their ability to make complicated things possible and easy things automated.

## Conclusion

A final takeaway is that there are many free or nearly free AutoML solutions. Just as developers worldwide use free or roughly free high-level tools like build servers and code editors to improve software, ML practitioners should use automation tools of all types to enhance their productivity.

That’s it for today, see you soon. :)
