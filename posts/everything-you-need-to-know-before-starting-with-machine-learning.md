---
title: "Everything you need to know before starting with Machine Learning"
excerpt: "Machine learning is a rapidly growing field that is transforming many industries and applications. If you are thinking about getting started with machine learning, there are a few key things that you should know before you begin. In this article, we will explore some of the key concepts and considerations that you should be aware of before starting with machine learning."
coverImage: "https://images.unsplash.com/photo-1484312152213-d713e8b7c053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
date: "2021-01-11T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## When to use machine learning?

I would recommend to go online and read about where machine learning is being currently used and how tech companies are leveraging it before coming back to the article.

In broader terms, use machine learning for the following situations:

1. You cannot code the rules: Many human tasks (such as recognizing whether an email is spam or not spam) cannot be adequately solved using a simple (deterministic), rule-based solution. A large number of factors could influence the answer. When rules depend on too many factors and many of these rules overlap or need to be tuned very finely, it soon becomes difficult for a human to accurately code the rules. You can use ML to effectively solve this problem.

2. You cannot scale: You might be able to manually recognize a few hundred emails and decide whether they are spam or not. However, this task becomes tedious for millions of emails. ML solutions are effective at handling large-scale problems.

## Examples of Machine Learning Application

1. Analyzing images of products on a production line to automatically classify them
2. Detecting tumors in brain scans
3. Automatically classifying news articles
4. Automatically flagging offensive comments on discussion forums
5. Summarizing long documents automatically
6. Creating a chatbot or a personal assistant
7. Recommending a product that a client may be interested in, based on past purchases

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

Also, training on the full set of data requires a lot of computing resources (CPU, memory space, disk space, disk I/O, network I/O, etc.). If the amount of data is huge, it may end up costing you a lot of money and might even be impossivle to use a batch learning algorithm.

### Online Learning

In online learning, you train the system incrementally by feeding it data instances sequentially, either individually or in small groups called mini-batches. Each learning step is fast and cheap, so the system can learn about new data on the fly, as it arrives.

One parameter of online learning systems in how fast should they adapt to the changing rate. If you set a high learning rate,then your system will rapidly adapt to new data, but it will also tend to quickly forget the old data (you don’t want a spam filter to flag only the latest kinds of spam it was shown). Conversely, if you set a low learning rate, the system will have more inertia; that is, it will learn more slowly, but it will also be less sensitive to noise in the new data or to sequences of nonrepresentative data points. Also, you have to make sure bad data is not fed to the system else the system's performance will gradually decline.

## Instance-Based Versus Model-Based Learning

There are two main approaches to generalization: instance-based learning and model-based learning.

### Instance-Based Learning

In instance based leaening, the system learns the examples by heart, then then generalizes to new cases by using a similarity measure to compare them to the learned examples. For example, the new instance would be classified as a triangle because the majority of the most similar instances belong to that class.

This requires a measure of similarity between two emails. A (very basic) similarity measure between two emails could be to count the number of words they have in common. The system would flag an email as spam if it has many words in common with a known spam email.

### Model-Based Learning

In model based learning, we generalize from a set of examples by building a model using these examples.

In this learning, we need to specify a performance measure, think of it like a utlity function, that measures how good a model, or define a cost function that measures how bad it is.

For example, we can train a Linear Regression algorithm by feeding it our training examples, it finds the parameters that make the linear model fit best to our data. This is called training the model. Training the model is nothing but finding the optimal parameter values for the mathematical equation.

Training a model means running an algorithm to find the model parameters that will make it best fit the training data (and hopefully make good predictions on new data).

## A very basic typical Machine Learning project workflow

Although in reality a machine learning workflow could be really complex and may invlove lot of complex steps. But the following steps must be present in all of the machine learning projects:

1. You studied the data.
2. You selected a model.
3. You trained it on the training data (i.e., the learning algorithm searched for the model parameter values that minimize a cost function).
4. Finally, you applied the model to make predictions on new cases (this is called inference), hoping that this model will generalize well.

## Challenges of Machine Learning

### Insufficient Quantity of Training Data

It takes a lot of data for most Machine Learning algorithms to work properly. Even for very simple problems you typically need thousands of examples, and for complex problems such as image or speech recognition you may need millions of examples (unless you can reuse parts of an existing model).

### Nonrepresentative Training Data

Your training data must be able to generalize well, if the sample is too small, you will have a sampling noise, but even very large sample can be nonrepresentative if the sampling method is flawed. This is called sampling bias.

### Poor-Quality Data

Obviously, if your training data is full of errors, outliers, and noise (e.g., due to poor-quality measurements), it will make it harder for the system to detect the underlying patterns, so your system is less likely to perform well. It is often well worth the effort to spend time cleaning up your training data. The truth is, most data scientists spend a significant part of their time doing just that.

### Irrelevant Features

As the saying goes: garbage in, garbage out. Your system will only be capable of learning if the training data contains enough relevant features and not too many irrelevant ones. A critical part of the success of a Machine Learning project is coming up with a good set of features to train on. This process, called feature engineering, involves the following steps:

1. Feature selection (selecting the most useful features to train on among existing features)
2. Feature extraction (combining existing features to produce a more useful one⁠—as we saw earlier, dimensionality reduction algorithms can help)
3. Creating new features by gathering new data

### Overfitting the Training Data

Overfitting means that the model performs well on the training data, but it does not generalize well. Complex models such as deep neural networks can detect subtle patterns in the data, but if the training set is noisy, or if it is too small (which introduces sampling noise), then the model is likely to detect patterns in the noise itself. Obviously these patterns will not generalize to new instances.

Overfitting happens when the model is too complex relative to the amount and noisiness of the training data. Here are possible solutions:

1. Simplify the model by selecting one with fewer parameters (e.g., a linear model rather than a high-degree polynomial model), by reducing the number of attributes in the training data, or by constraining the model.
2. Gather more training data.
3. Reduce the noise in the training data (e.g., fix data errors and remove outliers).

### Underfitting the Training Data

As you might guess, underfitting is the opposite of overfitting: it occurs when your model is too simple to learn the underlying structure of the data.

Here are the main options for fixing this problem:

1. Select a more powerful model, with more parameters.
2. Feed better features to the learning algorithm (feature engineering).
3. Reduce the constraints on the model (e.g., reduce the regularization hyperparameter).

### Data Mismatch

In some cases, it’s easy to get a large amount of data for training, but this data probably won’t be perfectly representative of the data that will be used in production.

## Summary

1. Machine Learning is about making machines get better at some task by learning from data, instead of having to explicitly code rules.
2. There are many different types of ML systems: supervised or not, batch or online, instance-based or model-based.
3. In an ML project you gather data in a training set, and you feed the training set to a learning algorithm.
4. The system will not perform well if your training set is too small, or if the data is not representative, is noisy, or is polluted with irrelevant features (garbage in, garbage out). Lastly, your model needs to be neither too simple (in which case it will underfit) nor too complex (in which case it will overfit).
