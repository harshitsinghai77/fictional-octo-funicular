---
title: "The Advent of MLOps."
excerpt: "Model deployment in machine learning has emerged as an intriguing field of research in recent years. You might have heard about MLOps. DevOps, GitOps, CI/CD, Kubernetes, Docker and Kubeflow before, let's take a look how these can be used with MLOps and how MLOps is different from tradational DevOps."
coverImage: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
date: "2022-03-15T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

In today's rapidly evolving technological landscape, artificial intelligence (AI) is revolutionizing industries with its remarkable capabilities. However, deploying AI solutions in real-world scenarios can present significant challenges for teams. Without effective collaboration between business stakeholders and technologists, investments in AI may fail to address the core business needs.

Data science-driven teams often focus more on developing and deploying highly accurate AI/ML models, rather than working closely with business and product teams to tackle the underlying challenges. This disparity in focus can hinder the ability to generate value from AI initiatives. To address this, organizations are redefining the concept of MLOps, enabling them to better align with business requirements and drive impactful outcomes.

## What is MLOps

Simply put, MLOps is DevOps for machine learning.

Model deployment in machine learning has emerged as an intriguing field of research in recent years. You might have heard about MLOps, DevOps, GitOps, CI/CD, Kubernetes, Docker and Kubeflow before. Let's take a look how these tools can be used for MLOps and how it is different from tradational DevOps.

## The needs of MLOps in Artificial Intelligence

For real-world AI application, the data is so vast available to train machine learning system, this coupled with libraries, model degradation and dependencies can complicate model development and deployment.

It is valuable to incorporate the concepts of tradition software development such as CI/CD pipelines for automated deployments of AI models.

## The problem with ML Apps

Once the model has been deployed to production, unlike software web apps, the performance of the model degrades due to frequent changes to the data that has been used to train the model.

This introduces the need of model monitoring. Adequately monitoring model can help to trigger, retrain and ensure models are working as expected.

## Development and Operations

Two concepts in DevOps:

1. CI - Continuous Integration enables to have short and frequent release cycles. It can be used to check code quality using linters and formatters, perform unit tests and track test code coverage.

2. CD - Continuous Deployment helps automatically deploy software in production.

## A little about Docker and use of Kubernetes.

According to documentation, the docker platform provides the ability to package and run applications in a small isolated environment.

However, for large scale applications, thousands of containers need to be deployed which can be challenging to manage. Orchestration solves the problem of docker adoption by allowing developers to leverage the concepts of container automation, deployment, and networking. This is where Kubernetes come into the picture. There are other alternatives like Docker Swarm and Nomand but it's safe to say Kubernetes is the widely and the most popular choice for container orchestration.

## End-to-End MLOPs automation.

Fully automated MLOps pipleine in production needs a robust automated system.
Although the process can differ based on the use case and circumstance, the steps roughly involved are:

1. Source code is pushed into the source repository (like Github, Bitbucket or Gitlab).
2. CI: Source code is built, run unit tests or other test (eg. using Pytest), code linting and formatting (pylint, black). The source code results artifacts that needs to be deployed.
3. CD: The artifacts created in CI phases are deployed to the target environment, resulting in the implementation of updated AI models through the generated pipeline. This pipeline can schedule a external trigger to update metadata, or divert traffic to the new model using blue green deployement or any other deployment strategy.
4. The generate model/artifact are then uploaded to the model registry.
5. Some form service to monitor statistics on model performance based on real-time data.

## How is MLOps different from DevOps.

1. In traditional software, to fix an error, the code needs to be editted, write unit test and deploy it again. With ML model training, there are a whole set of problems that needs to be addressed. Such as alternative data parameters, trying different algorithms, feature engineering and hyperparameter tuning to name few.

2. No direct unit tests are appliciable for MLOps. You can add unit tests to some extent to validate your code, but it's not as holistic as traditional software development.

3. Model degradation is inevitable in MLOps. The predicitions and preformance degrade overtime as the inference data is changed. This requires periodic retraining of the model and in some case the model needs to be trained in real time.

4. Monitoring the performance of MLOps is little tricky than the tradition software which tracks mainly few key components like latency and response time. This

## MLOps Platforms.

MLOps is relatively new field of software development, but the the ecosystem developed around MLOps is intriguing.

Kubeflow introduces the concept of the namespaces that enables multi-user support to simplify collaboration and access management. In addition, it includes a built-in Jupiter notebook environment in the clusters which makes it simple to perform jobs with dynamically scaled resources. Katib, which can be utilized for automated hyperparameter adjustment, is another crucial component in kubeflow, responsible for determining and visualizing the best configuration for the model before it goes into production.

Amazon SageMaker streamlines MLOps with its powerful suite of tools and features. With automated model building and deployment pipelines, it accelerates the development process. Its seamless integration with AWS services ensures scalable and reliable operations. Plus, SageMaker's monitoring and debugging capabilities enhance model performance and simplify maintenance, making it an invaluable asset for MLOps workflows.

In MLflow, the MLflow tracking helps to recover and query experimental data and results. Tools like ML projects and MLflow models allow implementing ML models in the environment. A model registration feature helps to store and manage models in a central repository.

In addition, it has builtin integration with TensorFlow, PyTorch, Keras, python, Kubernetes, docker, etc. Many organizations such as Databricks, Toyota, Accenture, Facebook, and Microsoft are employing and contributing to MLflow, which easily provides community support for resolving bugs.

## GitOps

GitOps is to leverage the Git repository which contains the details of the infrastructure required in a production environment.

Tools such as ArgoCd, Flux and Fleet are developed to maintain the GitOps workflow.

## Challenges in MLOps

MLOps has still in its infancy and the "best practice" is still work in progess. The literature around MLOps is still envolving.

1. There are some doubts over the best way to monitoring the effectiveness of the AI models once it's deployed. While there is some information related to the AI model monitoring but most of it are appliciable in ideal case situations.

2. Some small and mid-sized organization/startups are inclined towards manually testing and deploying AI model in production. They are skeptical of the fully automatic AI pipleines. Again, this depends on the situation and MLOps doesn't always help. Sometimes it's better to do things manually rather than relying on complicated MLOps infrastructure.

3. In most of the cases, the development and production teams are out of sync and communicate only at the end of solution design.

## Conclusion

In this post we mainly discussed the industry standard tools and techniques used to deliver enterprise level AI software solutions.

Even though we have come a long way in the development of MLOps ecosystem. Though the ecosystem is increasing and getting better and better, there's still a lot to improve and standardized. The maturity is still infant but the progress is remarkable.

That's it for today, see you soon.
