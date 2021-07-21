---
title: "MLOps for Edge Devices"
excerpt: Run machine learning algorithms on edge devices like mobile phones, Raspberry PI, and smart home devices.
coverImage: "https://images.unsplash.com/photo-1499602211854-122b55ef8f5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"
date: "2021-07-21T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

In the last few years, large telecommunication companies have been pushing towards edge computing. Most of these edge deployments want to get faster feedback to users instead of routing expensive compute requests to a remote datacenter.

Analyzing large amounts of data based on complex machine learning algorithms requires significant computational capabilities. Therefore, much processing of data takes place in on-premises data centers or cloud-based infrastructure.

However, with the arrival of powerful, low-energy consumption Internet of Things devices, computations can now be executed on edge devices such as robots themselves. This has given rise to the era of deploying advanced machine learning methods such as convolutional neural networks, or CNNs, at the edges of the network for “edge-based” ML.

# [Coral](https://coral.ai/)

[https://coral.ai/](https://coral.ai/)

The Coral Project is a platform that helps build local (on-device) inferencing that captures the essence of edge deployments: fast, close to the user, and offline.

USB Accelerator - [https://coral.ai/products/accelerator](https://coral.ai/products/accelerator)

A USB accessory that brings machine learning inferencing to existing systems. Works with Linux, Mac, and Windows systems.

Coral USB Accelerator is an edge device that supports all major operating systems and works well with TensorFlow Lite models.

You can compile most TensorFlow Lite models to run on this edge TPU. Some aspects of operationalization of ML means being aware of device support, installation methods, and compatibility. Those three aspects are true about the Coral Edge TPU: it works on most operating systems, with TensorFlow Lite models as long as they can get compiled to run on the TPU.

The Coral AI site has a models section where you can browse some of the specialized pre-trained models they have for doing some image classification.

We will be replacing the audio file for this video

Coral Trained TensorFlow models - [https://coral.ai/models/](https://coral.ai/models/)

# [Azure Percept](https://azure.microsoft.com/en-us/services/azure-percept/)

[https://azure.microsoft.com/en-us/services/azure-percept/
](https://azure.microsoft.com/en-us/services/azure-percept/)

Microsoft announced the release of a platform and hardware called Azure Percept.

Percept products are mostly advertised as pieces of hardware, Azure Percept is a whole platform for doing edge computing, from the devices themselves all the way to deployment, training, and management in Azure. There is also support for the major AI platforms like ONNX and TensorFlow, making it easier to try out with pre-built models.

One downside of the Azure Percept hardware compared to the Coral devices is that it is much more expensive, making it harder to buy one of their bundles to try the new technology.

Azure Percept documentation - [https://docs.microsoft.com/en-us/azure/azure-percept/](https://docs.microsoft.com/en-us/azure/azure-percept/)

# [TFHub](https://tfhub.dev/)

[https://tfhub.dev/](https://tfhub.dev/)

A great resource to find TensorFlow models is the TensorFlow Hub. The hub is a repository of thousands of pre-trained models ready to be used. For the Edge TPU, not all models will work, though. Since the Edge TPU has separate instructions specific to the device, a model needs to be explicitly compiled for TPU.

That’s it, you’re done. Thanks for reading :)
