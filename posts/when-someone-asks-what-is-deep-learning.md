---
title: "When some one asks what is Deep Learning?"
excerpt: "This post is the defination of deep learning in a nutshell. You may need some prior information or some basic idea of what a neural network is. This is not for complete begineers, but if you're familiar with the lingo, then this will help you to have a clearer defination of what deep learning is or does."
coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
date: "2020-11-22T15:49:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

The majority of deep learning systems are artificial neural networks (ANNs, or just neural networks for short) with multiple stacked hidden layers. For this reason, deep learning has now almost become synonymous with deep neural networks. However, it is important to point out that any system that employs many layers to learn high level representations of the input data is also a form of deep learning (e.g., deep belief networks and deep Boltzmann machines).

A deep neural network consists of a series of stacked layers. Each layer contains units, that are connected to the previous layer’s units through a set of weights. There are many different types of layer, but one of the most common is the dense layer that connects all units in the layer directly to every unit in the previous layer. By stacking layers, the units in each subsequent layer can represent increasingly sophisticated aspects of the original input.

![Deep learning conceptual diagram](https://i.imgur.com/9t1t2ge.png)

For example, in the above image, layer 1 consists of units that activate more strongly when they detect particular basic properties of the input image, such as edges. The output from these units is then passed to the units of layer 2, which are able to use this information to detect slightly more complex features—and so on, through the network. The final output layer is the culmination of this process, where the network outputs a set of numbers that can be converted into probabilities, to represent the chance that the original input belongs to one of n categories.

The magic of deep neural networks lies in finding the set of weights for each layer that results in the most accurate predictions. The process of finding these weights is what we mean by training the network.

During the training process, batches of images are passed through the network and the output is compared to the ground truth. The error in the prediction is then propagated backward through the network, adjusting each set of weights a small amount in the direction that improves the prediction most significantly. This process is appropriately called backpropagation. Gradually, each unit becomes skilled at identifying a particular feature that ultimately helps the network to make better predictions.

Deep neural networks can have any number of middle or hidden layers. For example, ResNet, designed for image recognition, contains 152 layers. We can use deep neural networks to influence high-level features of an image, such as hair color or expression of a face, by manually tweaking the values of these hidden layers. This is only possible because the deeper layers of the network are capturing high-level features that we can work with directly.
