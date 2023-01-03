---
title: "Convert your favorite shot into any famous artistic painting using Pluto."
excerpt: "Use AI to convert your favorite shot into any artistic painting. Ever since Deep Neural Style Transfer was introduced in 2016 Neural Style Transfer by Leon Gatys et al, the world has been fascinated by the creative power of Deep Learning Algorithms. Following the footseps of many people who were curious to build their own implementation, I designed Pluto, to make it super easy for people to try my Neural Style Transfer."
coverImage: "https://iili.io/HTFghBf.png"
date: "2020-11-28T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Convert your favorite shot into any famous artistic painting using Pluto's AI.

## Introduction

Ever since Deep Neural Style Transfer was introduced in 2016 Neural Style Transfer by Leon Gatys et al, the world has been fascinated by the creative power of Deep Learning Algorithms. Following the footseps of many people who were curious to build their own implementation, I designed Pluto, to make it super easy for people to try my Neural Style Transfer. Alongside inquisitiveness and diving into the structure of Neural Style Transfer, our application lets users leverage the power of to create beautiful art using any painting from the internet.

## Neural Style Transfer

Neural style transfer is an optimization technique used to take two images—a content image and a style reference image (such as an artwork by a famous painter)—and blend them together so the output image looks like the content image, but “painted” in the style of the style reference image.

![alt text](https://plutoai.netlify.app/static/media/nst_example.d436278c.png)

This is implemented by optimizing the output image to match the content statistics of the content image and the style statistics of the style reference image. These statistics are extracted from the images using a convolutional neural network.

## Features

In most Neural Style Transfer websites (PyTorch implementations) pre-trained packaged weights are used, these will perform optimially with respect to a given style of art (e.g a model focused on starry nights). Although these models do produce beautiful results our goal is to use a generic model using the layers of a previously trained model VGG19 (19 layered Visual Geometry Group) and the weights of ImageNet.

Pluto uses a TensorFlow implementation of Neural Style Transfer wrapped as a REST API. For our backend we used Flask to serve our model. Next we used ReactJs and served it as our frontend.The frontend is set up in such a way that it is able to send photos to the Flask backend for processing and recieve the result communicates with the backend. We use Firebase to store user images. Another parameter we record is the user rating of the image. This is for future optimization of our model.

## How it works

With Pluto, you can get your artistic image with just 3 simple steps.

1. Pick a image: Upload your image or directly copy and paste image url. All images will be stores in Firebase.
2. Pick a style: Chose any images to transfer the style from. This could be any image. No need to select from predefined images. Chose your favourite style image and Pluto will take care of the rest.
3. You're an artist: That's it. You're done.

## Usage

```bash
$ git clone https://github.com/harshitsinghai77/pluto.git
```

### Backend

```bash
$ source env/bin/activate
$ pip install -r requirements.txt
$ python start_flask.py
```

### Frontend

```bash
$ cd frontend
$ npm install
$ npm start
```

### How It Works

![alt text](https://iili.io/HTFgVXs.png)
![alt text](https://iili.io/HTFgImF.png)
![alt text](https://iili.io/HTFgRLJ.png)
![alt text](https://iili.io/HTFgx5P.png)
![alt text](https://iili.io/HTFg7qv.png)
![alt text](https://iili.io/HTFgze1.png)
![alt text](https://iili.io/HTFg1et.png)
![alt text](https://iili.io/HTFgEmX.png)

## Github

[https://github.com/harshitsinghai77/pluto](https://github.com/harshitsinghai77/pluto)

## Demo

[https://plutoai.netlify.app/](https://plutoai.netlify.app/)

## Video Demo

[https://www.youtube.com/watch?v=dFUJv7JqiEE&t=3s&ab_channel=HarshitSinghai](https://www.youtube.com/watch?v=dFUJv7JqiEE&t=3s&ab_channel=HarshitSinghai)

## Pluto Showcase

![alt text](https://iili.io/HTFg07I.png)

## Conclusion

Neural style transfer is really a cool usecase of AI. That’s it for today, see you soon. :)
