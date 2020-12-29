---
title: "Let's talk about Technical Debt in Machine Learning"
excerpt: "Discover the benefits of using protocol buffers instead of JSON, and where to use both."
coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
date: "2020-12-22T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

We will try to write a few web services with protocol buffers that can talk to either Go, or other applications such as Python, NodeJS, and so on. Then, we will explain GRPC, an advanced simplified form of RPC. We will learn how GRPC and protocol buffers can help us build services that can be consumed by any client.

In short, we will cover the following topics:

1. Protocol buffers introduction
2. Format of the protocol buffers
3. Compilation process of a protobuf
4. GRPC, a modern RPC library
5. Bidirectional streaming with GRPC

### Introduction to protocol buffers

Protocol buffers have many advantages over JSON/XML for serializing structured data, such as:

1. They are simpler
2. They are 3 to 10 times smaller
3. They are 20 to 100 times faster
4. They are less ambiguous
5. They generate data access classes that are easier to use programmatically

Before we start I higly recommend to watch this video first. The video uses Nodejs example but that's not the point is it? Watch this video first, as you might not understand the rest of the article without watching the video first.
https://www.youtube.com/watch?v=46O73On0gyI&ab_channel=HusseinNasser
