---
title: "Introducing WeBase — Making deep learning simple"
excerpt: "WeBase is a new deep learning platform that aims to make the process of building and training deep learning models simpler and more accessible. In this article, we will introduce WeBase and explore some of its key features and benefits.WeBase is a cloud-based platform that provides a user-friendly interface for building and training deep learning models. It allows users to quickly and easily create and configure their models using a drag-and-drop interface, without the need for complex coding or technical expertise."
coverImage: "https://miro.medium.com/max/1400/1*qc8gdXkCCnBOtgLeaqYX_Q.png"
date: "2020-12-18T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Content

1. Problem Statement
2. Introducing WeBase
3. Deep Learning as a Service
4. Is WeBase really needed?
5. The story so far…
6. Core user scenarios
7. Tech Stack
8. Screenshots of Web UI
9. Why have we chosen this project?
10. What went wrong?
11. What’s next?
12. Video
13. Conclusion

## Platform

Before we move on, here’s a demo link

[Landing Page](https://webaseai.netlify.com/)

[Demo](https://app-webase.netlify.com/)

## Problem Statement

Every day we constantly hear about AI and machine learning on the news and how it’s changing the world we live in.

Artificial intelligence will be the most disruptive class of technologies over the next decade, with a huge amount of data generated, and unprecedented advances in deep learning.

> “AI promises to be the most disruptive class of technologies during the next 10 years due to advances in computational power, volume, velocity and variety of data, as well as advances in deep neural networks (DNNs)” -John-David Lovelock, research vice president at Gartner.

However, most of us don’t see this impact directly. People with little or no machine learning experience often find it difficult to leverage this technology for their own personal purpose.
Non-tech and tech startups invest a lot of time and effort in learning about machine learning to solve simple problems like object detection or image classification. Typically, they invest months trying to solve a problem that could be easily solved in a week by an experienced machine learning engineer.

By making the machine learning algorithm accessible via a simple API call or a web application, we can significantly reduce the time and effort. Thus enabling better use of manpower and work hours.

To simply put, WeBase provides common machine learning models as a service to make advance AI accessible for developers. Our simple to use user-interface allows users to use our pre-trained machine learning models with ease.

## Introducing WeBase

![Webase](https://miro.medium.com/max/875/1*aeqWDh4x4oyN0p3vr0A64Q.png)

WeBase makes it super easy for developers to access machine learning algorithms.

Developers can either use an existing model via a simple API or create their own custom model from scratch.

To create a custom model, the user will require to upload his/her data, WeBase automatically trains the model. No parameter tuning required. No domain knowledge. No need to find the right infrastructure to host your models. Just upload your data, sit back, relax, and grab a beer. The trained model can either be used through our web application or via an API.

# Deep Learning as a Service

> Introducing deep Learning as a Service with WeBase.

WeBase enables organizations to overcome the common barriers to deep learning deployment: skills and complexity. The innovation will be developing a full end-to-end deep learning model and deploying it as a service.

![Webase](https://miro.medium.com/max/875/1*MXlMW5ToF_QPDtTj3KhHlw.png)

# Is WeBase really needed?

![Webase](https://miro.medium.com/max/875/1*2fhB6D_aB7ERwwnvQki6UA.png)

Data Science is a very dynamic field. Not a lot of time has gone since deep learning became the defacto for the best solution for a lot of problems like self-driving cars, object detection, face recognition, violence detection, etc. However, it’s hard to keep up with the advancement. According to the statistics, there is a huge demand and supply gap when it comes to machine learning engineer. In such a scenario it becomes more important to come up with solutions that can help startups and organizations looking to adopt machine learning.

Similarity other leading cloud services such as Google Cloud, AWS Machine learning, IBM Watson are heavily investing in Artificial Intelligence to win the market. Going through their case studies we found lots of leading companies like Adobe, HP, and Dell depend on such services for their prediction and analysis.

Our approach is to make such services available for free or with minimum cost so that everyone from shopkeepers, a small-business owner, or a student can leverage the algorithms freely or cheaply.

Going through the reports we strongly believe that this idea will be successful from the evidence that all the big 5 companies in the world such as Google, Microsoft, IBM, Amazon are investing heavily to automate the machine learning pipeline.

## The story so far…

### Ready to use model:

Currently, WeBase provides a solution for common machine learning problems such as NSFW (not safe for work) or SFW (safe for work) classification, removing image background, colorize B/W image, gender classification, object detection, face recognition, neural style transfer, summarize text, sentiment analysis, and much more.

## Core user scenarios

Non-tech and tech startups invest a lot of time and effort in learning about machine learning algorithms and developing models from scratch. Our platforms make it easier for them, thus saving both time and effort.

![Webase](https://miro.medium.com/max/875/1*L7Etn0OgFapY-1pIXD_14w.png)

Most of the machine learning projects in industries and startups focus on common problems such as regression, classification, clustering, facial recognition, object detection, and semantic segmentation. With our platform, they can easily use most common machine learning models with a simple API call.

With our application companies will be able to cut downtime on research. Instead, they can better utilize the time by tweaking custom model developed by our platform according to their requirements. Companies can cut down both cost, effort, time, and instead focus on other departments like sales, operations, expansion, HR, customer relationships, etc.

Our potential clients/customers/users are non-tech and tech startups, developers, machine learning engineers, students, freelancers, designers, and anyone who wishes to use a part of machine learning in their application without getting into the roots of the literature. Users can use our application for personal use like removing the background of the image, neural style transfer, or coloring black and white images.

## Tech Stack

### React

![Webase](https://miro.medium.com/max/875/1*pHsEux2h8wc3-yNCQNwz0A.jpeg)
The frontend of the application is based on React. React is a JavaScript library for building user interfaces. It is maintained by Facebook. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. Our platform will have a dashboard-interface, and thus React can be used as it suits well to component-based UI.

### React Native

![Webase](https://miro.medium.com/max/875/1*xDi2csEAWxu95IEkaNdFUQ.png)
For mobile applications, we rely on React-Native. Being a dashboard-based platform, we recommend our platform to be accessed via the web for better performance and accessibility. React Native makes it easy to build apps for both iOS and Android. All with one code base, standard React development patterns, Redux, and using the standard react-dom library and huge ecosystem around the web platform.

### Node.js

![Webase](https://miro.medium.com/max/875/1*sw5W_phq-TZR24Qq5I-HGA.jpeg)
For our backend, we have used Node. It’s a JavaScript runtime built on Chrome’s V8 JS engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js is much faster and scalable than other backend frameworks like Rails. Node’s ability to process requests with low response times make it a great fit for our web applications as it carries out lots of processing on the client’s side. We will be processing high volumes of IO-bound requests, thus Node.js fits perfectly in our case.

## MongoDB

![Webase](https://miro.medium.com/max/875/1*vXswwprNaBObxWm8NrFl0w.png)
MongoDB is a document database with scalability and flexibility. We will be using MongoDB as it stores data in flexible, JSON-like documents. Distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built-in and easy to use. We will be using MongoDB mainly because of its features like performance, scalability and Easy Integration with BigData Hadoop.

## Firebase Storage

![Webase](https://miro.medium.com/max/875/1*8K5X58Q2C2CbaRpa9hadBg.png)
Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale. It will be used in our application for storing images uploaded by the user.

## Flask

![Webase](https://miro.medium.com/max/548/1*X5KB7x0sGJjoYS8JVgnRXg.png)
Flask is a micro web framework written in Python. Flask will be used to make endpoint for our deep learning model. The main reason why we have decided to have a separate backend for our deep learning model is to avoid I/O and CPU intensive request congestion resulting in a faster and more scalable application.

Node.js is known for I/O operations but fails when it comes to CPU Intensive task as it runs on the event loop, which runs on a single thread. Using two separate backends we can optimize our resources much better. Node.js will be used for I/O operation and flask for CPU Intensive work, thus reducing latency and focusing on high performance and scalability.

## Tensorflow 2.0

![Webase](https://miro.medium.com/max/875/1*p5Qr5j6E7b4SKW15SaDUyw.png)
As Deep learning is the core of our platform, we decided to use Keras as it allows easy, scalable and fast prototyping. Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow. Architectures such as Convolution neural network, transfer learning, generative adversarial networks, Recurrent neural network, LSTM were developed and prototyped using Keras.

## Redis

![Webase](https://miro.medium.com/max/875/1*i1d88Q8NNrRv6kjf7Ssw4g.png)
Redis, an open-source, in-memory, data structure server is frequently used as a distributed shared cache. Redis is used mainly for caching purposes in our application.

## Netlify

![Webase](https://mms.businesswire.com/media/20190409005598/en/714980/23/full-logo-light.jpg)
Modern web apps shipped faster. An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps.

## Heroku

![Webase](https://cdn.buttercms.com/T27FzLr5TIySqJ0mCObR)

Heroku to deploy, manage, and scale apps.

## Screenshots of Web UI

### Register/Login workflow

![Webase](https://miro.medium.com/max/875/1*iK8KZP4kpGHu-Yq_GF2QWg.jpeg)

![Webase](https://miro.medium.com/max/875/1*dYyi4iwKbUk4SkSa-pyESA.jpeg)

![Webase](https://miro.medium.com/max/875/1*4kcU_k9QkFAndj-yaXsXIw.jpeg)

![Webase](https://miro.medium.com/max/875/1*Nb8QVumwGsPCcfj94FwYSA.jpeg)

### Dashboard

![Webase](https://miro.medium.com/max/875/1*QLua_3fBAOvzoNmWESRbEg.png)

![Webase](https://miro.medium.com/max/875/1*0x-q6YBntCAT1SPQIEptwQ.jpeg)

![Webase](https://miro.medium.com/max/875/1*9-50pqBnVvTxsqLvSOSXqw.jpeg)

![Webase](https://miro.medium.com/max/875/1*Gft8u-SRCPArShGEEGemig.jpeg)

## Model Workflow

![Webase](https://miro.medium.com/max/875/1*wdqVSowGwYP0W1xXkySxQA.jpeg)

![Webase](https://miro.medium.com/max/875/1*f4PmCm9_Gqx25erztrEJqQ.jpeg)

## Image Colorization

![Webase](https://miro.medium.com/max/875/1*rtUaAVnf5AcvjTc0c8CSuw.jpeg)

## Face Aging

![Webase](https://miro.medium.com/max/875/1*Xa2psSt1pV8eZHpyFeTcwg.jpeg)

![Webase](https://miro.medium.com/max/875/1*iTKjnlynWyfuXk_1P3Da5A.jpeg)

## Gender Classification

![Webase](https://miro.medium.com/max/875/1*JpDV8jesoEjzpmgqMMkAMQ.jpeg)

## NSFW

![Webase](https://miro.medium.com/max/875/1*sar8Z8N7P9ewRhgM36PF-A.jpeg)

## Real Estate Classification

![Webase](https://miro.medium.com/max/875/1*pI84A8awNPVJs_w2wAqhPg.jpeg)

![Webase](https://miro.medium.com/max/875/1*cBLspBPoSg91a0z3RhmtTA.jpeg)

![Webase](https://miro.medium.com/max/875/1*3HZEWaY4tAV4Fh6MWHoNNA.jpeg)

![Webase](https://miro.medium.com/max/875/1*gEbIRgWGuuNyBH5KuGXOyg.jpeg)

## Sentiment Analysis

![Webase](https://miro.medium.com/max/875/1*FLG8HDnejhF--p6F3lAuHA.jpeg)

## User Profile

![Webase](https://miro.medium.com/max/875/1*rmdUnyZ64XVicXjBUwBobQ.jpeg)

![Webase]https://miro.medium.com/max/875/1*JN2XiBdJ71sQCC8v1Be8bw.jpeg)

![Webase](https://miro.medium.com/max/875/1*NK77x0u9hIJ3iA61zJycBA.jpeg)

## Why have we chosen this project?

![Webase](https://miro.medium.com/max/875/1*-XLjtlfEBzxkXUPbPllQtA.png)

Being deep learning and machine learning enthusiast, we wanted to create an application where all the common models can be found, thus WeBase was born. The vision is to make machine learning models accessible to every developer around the world.

With this project, we have used our machine learning and software development skills to develop an application that can help the developer community by bringing AI closer to developers.

We believe our platform has a huge potential as we’re not restricting ourselves to a particular domain rather serving and deploying scalable solutions across various domains like Healthcare, Education, Entertainment, E-commerce, Journalism, etc.

## What went wrong?

![Webase](https://miro.medium.com/max/875/1*d99mZ7m9dih0bBvCHrEEKg.jpeg)

1. Some models took more time than expected.
2. Deployment issues — There were a lot of deployment issues while connecting different pieces of the puzzle together.
3. Understanding and implementing the research paper.
4. Sometimes there was little or no reference material available.
5. Training time.
6. Data not available — Wrote scripts to scrape the data from the internet and filtered it manually. In a few cases, we manually collected data.
7. Implementation Errors.

## What’s next?

![Webase](https://miro.medium.com/max/705/1*2OC5CrU_fF8oEFoxFkd2-A.jpeg)

Going forward, we will be providing solutions to more complex and real-life problems. Other than that, we plan to host the application and deploy it in the cloud.

We will also be working on the payment gateway to enable monetization. In the future, we will be limiting the free API class. On reaching the free API limit, the user will need to pay a certain amount depending on the usage.

## Video

[https://youtu.be/buU5tFiB_qQ](https://youtu.be/buU5tFiB_qQ)

## Conclusion

![Webase](https://miro.medium.com/max/875/1*uFQgkHJzrbuBmWIJAfAPLw.png)

> “If everything seems under control, you’re not going fast enough.”

Find more details here at [https://webaseai.netlify.app/](https://webaseai.netlify.app/)

Platform: [https://app-webase.netlify.com/](https://app-webase.netlify.com/)

That’s it for today. See you soon.
