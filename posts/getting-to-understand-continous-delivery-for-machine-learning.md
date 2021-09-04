---
title: "Why you should package your Machine Learning Project."
excerpt: "Why you should package your machine learning model inside a container and automate Continous Integration in your next machine learning project?"
coverImage: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
date: "2021-07-28T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

In this article, we're going to discuss some reasons why you should package and automate continous delivery for your machine learning projects.

## What does packaging a container mean?

Packaging a container means deploying it as a Docker container so that it can be easily deployed within the organization's kubernetes cluster.

It also makes it easier for other developer to install and run your project without installing and setting up the project in the local environment.

It's recommend to package your machine learning model into a container for ease of access, portabillity, sharing, distributing, and easy deployment.

## What are characteristics of package machine learning models?

1. Once the ml model is packaged as a container, it is effortless to run a container locally.
2. Deploy the container in the cloud.
3. Other can quickly try it out and interact with the container.

## Critical checks you should add to verify a packaged model in a container is built correctly

1. Automated Checks

2. Pin the version for the python module
3. Add error handling to respond with an error message when invalid inputs get detected.
4. Test out these types of additions and behaviors before allowing a model to ship into production.

None of these checks should be manual. Automation should be high priority here.

Valid JSON request --> JSON response --> Invalid JSON request --> Health endpoint --> Port and Endpoint.

5. Linting
   Use either Flake8, mypy, Black, AutoPep8, isort.
   Regardless of the development environment you are in, I strongly recommend enabling a linter for writing code.

6. Continuous Improvement
   Make sure even a single line change in the codebase is tested and go through the Continous Integreation pipeline before making it to the production. This is very critical, it make sures no breaking changes are introduced in the production.

7. Monitoring, logging, and detailed metrics of production models (aside from model performance) are absolutely critical for a robust model deployment.

## What are the differences between canary vs. blue-green deployments?

### Blue-Green deployment

A blue-green deployment is a strategy that gets a new version into the staging environment identical to production.

Sometimes this staging environment is the same as production, just that traffic is routed differently (or separately).

Routing the traffic to a separate address for the newer (“blue”) version while production traffic is still going into the older (“green”). The reason for this separation is that it allows further testing and assurance that the new model is working as expected.

Once this verification is complete and certain conditions are satisfactory, you modify the configuration to switch traffic from the current model to the new one.

### Canary Deployment

In this case, traffic is routed progressively to the newer model at the same time the previous model is serving predictions. So the two versions are live and processing requests simultaneously, but doing them in different ratios. The reason for this percentage-based rollout is that you can enable metrics and other checks to capture problems in real-time, allowing you to rollback immediately if conditions are unfavorable.

## Why are cloud pipelines useful vs. using Github Actions?

Cloud Pipelines are no different to Github Actions except that it is hosted or managed by a cloud provider.

Pipeline is basically the same as a CI/CD platform with several steps, it should be straightforward to apply machine learning operations to an actionable pipeline.

Few reasons why you should consider cloud pipeline over Github Actions is that cloud pipeline are specialized for machine learning, you are exposed to features that are particularly important for getting models into production.

Those features don’t exist in other common platforms like Github Actions, or if they do, they aren’t as well-thought-out because the primary goal of platforms like Github Actions or Jenkins isn’t to train machine learning models, but rather be as generic as possible to accommodate for most common use cases.

Also, specialized machines for training (for example, GPU intensive tasks) are just not available or hard to configure in a generic pipeline offering like Github Actions.

## Conclusion

I hope you are now convinced why you should package your machine learning model inside a container and automate Continous Integration in your next machine learning project.

That’s it for today, see you soon. :)
