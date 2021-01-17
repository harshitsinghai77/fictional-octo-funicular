---
title: "Everything you need to know before starting with Machine Learning"
excerpt: "This is all the fundamental concepts you need to know before you began your machine learning journey. So grab a coffee and let's get started"
coverImage: "https://images.unsplash.com/photo-1552641267-7f060a89a292?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
date: "2021-01-11T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## When to use machine learning?

If you don't know this and then it's going to be really difficult. First get a good understanding of where machine learning is being currently used and what does the future holds and then come back to the article. I'll be waiting...

## Different types of machine learning systems

1. Machine learning can either be supervised, unsupervised, semisupervised, and Reinforcement learning
2. Online learning versus batch learning
3. Instance based vs model-based learning

## Supervised learning

In supervised learning, the training set you feed to the algorithm includes the desired solutions, called labels.

A typical supervised learning task is classification. The image classifier is a good example of this: it is trained with many example images of cat and dog along with their class (cat or dag), and it must learn how to classify new images.

#### Most important supervised learning algorithms

1. k-Nearest Neighbors
2. Linear Regression
3. Logistic Regression
4. Support Vector Machines (SVMs)
5. Decision Trees and Random Forests
6. Neural networks

## Unsupervised learning

In unsupervised learning, the training data is unlabeled. The system tries to learn without a teacher.

#### Most important unsupervised learning algorithms

1. Clustering
2. K-Means
3. DBSCAN
4. Hierarchical Cluster Analysis (HCA)
5. Anomaly detection and novelty detection
6. One-class SVM
7. Isolation Forest
8. Visualization and dimensionality reduction
9. Principal Component Analysis (PCA)
10. Kernel PCA
11. Locally Linear Embedding (LLE)
12. t-Distributed Stochastic Neighbor Embedding (t-SNE)
13. Association rule learning
14. Apriori
15. Eclat

For example, say you have a lot of data about your blog’s visitors. You may want to run a clustering algorithm to try to detect groups of similar visitors. At no point do you tell the algorithm which group a visitor belongs to: it finds those connections without your help. For example, it might notice that 40% of your visitors are males who love comic books and generally read your blog in the evening, while 20% are young sci-fi lovers who visit during the weekends. If you use a hierarchical clustering algorithm, it may also subdivide each group into smaller groups. This may help you target your posts for each group.

Another common unsupervised task is association rule learning, in which the goal is to dig into large amounts of data and discover interesting relations between attributes. For example, suppose you own a supermarket. Running an association rule on your sales logs may reveal that people who purchase barbecue sauce and potato chips also tend to buy steak. Thus, you may want to place these items close to one another.

## Semi-supervised learning

Since labeling data is usually time-consuming and costly, you will often have plenty of unlabeled instances, and few labeled instances. Some algorithms can deal with data that’s partially labeled. This is called semisupervised learning

#### Most important supervised learning algorithms

1. Deep belief networks (DBNs)

For example, some photo-hosting services, such as Google Photos, are good examples of this. Once you upload all your family photos to the service, it automatically recognizes that the same person A shows up in photos 1, 5, and 11, while another person B shows up in photos 2, 5, and 7. This is the unsupervised part of the algorithm (clustering). Now all the system needs is for you to tell it who these people are. Just add one label per person and it is able to name everyone in every photo, which is useful for searching photos.

## Reinforcement Learning

The learning system, called an agent in this context, can observe the environment, select and perform actions, and get rewards in return (or penalties in the form of negative rewards. It must then learn by itself what is the best strategy, called a policy, to get the most reward over time. A policy defines what action the agent should choose when it is in a given situation.

## Batch and Online Learning

Do you want the system to learn incrementally from a stream of incoming data or learning in batches?

### Batch Learning

Batch learning is when you first train your model, launch it into production and then run it without learning anymore. It just applies what it has learning. This is also called offline learning. The problem with batch learning is that the model gets stale after some time as it is not updated, and the output may or may not be relevant.

Batch learning generally takes a lot of time and computing resources, so it is typically done offline. Usually, when the system wants to know about the new data (such as a new type of cat), you need to train a new version of the system from scratch on the full dataset (not just the new data, but also the old data), then stop the old system and replace it with the new one.

This is can be automated fairly easily using Tensorflow Extended (TFX) or Kubeflow which will be discussed in more details in the future blog posts.

In some cases such as generative adversial neural network, training using the full set of data can take many hours, so you would typically train a new system only every 24 hours or even just weekly. If your system needs to adapt to rapidly changing data (e.g., to predict stock prices), then you need a more better solution.

Also, training on the full set of data requires a lot of computing resources (CPU, memory space, disk space, disk I/O, network I/O, etc.). If the amount of data is huge, it may even be impossible to use a batch learning algorithm.
