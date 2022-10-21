---
title: "Side Projects so far..."
excerpt: "All the projects I've built since college."
coverImage: "https://images.unsplash.com/photo-1666115884136-95be94587a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
date: "2022-10-20T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Looking back I found that I've worked on multiple projects throughout and after college. It's difficult to keep track of all the side projects I've built or worked on so far. This post will help me to keep track of all my past, current and ongoing projects.

The better projects will be on top and as you go down you're see my least promising projects.

# Nemo

[https://nemo-landing-page.netlify.app/](https://nemo-landing-page.netlify.app/)

<img src='https://iili.io/tSScHG.png' />

Nemo is your little helper and companion no matter if you need to focus, tune out other noises or if you want to have a moment of calm and relaxation.

With Nemo you can mix and match different sounds in order to create your perfect sound environment. In places where it is either too loud or too quiet, Nemo helps to mask annoying noises and to create a pleasant sound environment in order to stay focused and relax.

Nemo analytics help you keep track of your productivity and focussed session with weekly insights and much more.

<img src='https://iili.io/tSUCq7.png' />

**Get Started** [https://nemo-app.netlify.app/](https://nemo-app.netlify.app/)

**Find out more:**

1. [Be productive with Nemo](https://fictionally-irrelevant.vercel.app/posts/be-productive-with-nemo)
2. [Nemo - Your digital place for focus](https://fictionally-irrelevant.vercel.app/posts/nemo-your-digital-place-to-focus)
3. [About us](https://nemo-landing-page.netlify.app/about-us)

<img src='https://iili.io/tSUSpf.png' />

**Source code:**

1. [Nemo Frontend (React)](https://github.com/harshitsinghai77/nemo-frontend)
2. [Nemo Backend (Python API)](https://github.com/harshitsinghai77/nemo-backend)
3. [Nemo Landing Page (Next JS)](https://github.com/harshitsinghai77/noisli-landing-page-nextjs)
4. [CI/CD (Github Actions)](https://github.com/harshitsinghai77/nemo-backend/blob/master/.github/workflows/main.yml)

# WeBase

[https://webaseai.netlify.app/](https://webaseai.netlify.app/)

<img src='https://miro.medium.com/max/1400/1*qc8gdXkCCnBOtgLeaqYX_Q.png' />

WeBase - Making AI Simple. WeBase aims to make advanced AI accessible for users with it’s simple to use interface.

Easily use most common machine learning models with a simple API call.

<img src='https://iili.io/tS44QR.png' />

1. AI for All - Ready to use deployable models for various industries such as Healthcare, Entertainment, E-Commerce and many more
2. Ease-of-use - Use WeBase’s simple graphical user interface to train, evaluate, improve, and deploy models based on your data. You’re only a few minutes away from your own custom deep learning model.
3. Save time and Effort - AI as a service allows users to save both time and effort, so that they can focus on more important.things.
4. Story so far - WeBase provides a wide array of models like NSFW classification, removing image background, colorize B/W image, gender classification, object detection, face recognition, neural style transfer, summarize text, sentiment analysis, and much more.

<img src='https://iili.io/tS6SFS.png' />

**Get Started** [https://app-webase.netlify.app/](https://app-webase.netlify.app/)

**Check WeBase on Youtube**
[https://www.youtube.com/watch?v=buU5tFiB_qQ&ab_channel=HarshitSinghai](https://www.youtube.com/watch?v=buU5tFiB_qQ&ab_channel=HarshitSinghai)

**For detailed architecture and ML used, check out**
[https://fictionally-irrelevant.vercel.app/posts/introducing-webase](https://fictionally-irrelevant.vercel.app/posts/introducing-webase)

**Source Code**
[https://github.com/harshitsinghai77/webase](https://github.com/harshitsinghai77/webase)

Test Credentials
Email - harshitsinghai77@gmail.com
Password - Pass@12345

Note: Some app features won't work properly because the hosting limit has exceeded. The ML models were initially deployed for free using gcp/aws. But due to free limit exceeded and unable to pay for the cloud bills (need 💰💰💰 for AWS bill), the backend serving the app has autoatically been termnined. Some features might still work as different ML endpoint were hosted in different cloud providers.

# Noiist

[https://noiist.netlify.app/](https://noiist.netlify.app/)

<img src='https://iili.io/tSbFa4.png' />

1. Start your morning with Noiist - Get personalized spotify music recommendation directly to your inbox every day based on what you listened the previous day. Make your morning better with ☕ and Noiist.
2. Recommendation Engine - We built our own in-house recommender system to give you the best recommendations. It will only become better and more robust with time.
3. Recommendations who catch upto you - We only take into account what you listened the previous day and not your historical data. This ensures our recommender system banks on what you're listening at the moment and recommend music based on your latest trend.
4. It will only get better - We plan to give help you get more insights on the type of music you listen, your personality based on what you're listening, your music taste changed over months and much more.

<img src='https://iili.io/tStQm7.png' />

**Get Started** [https://noiist.netlify.app/get-started](https://noiist.netlify.app/get-started)

**Source Code**
[https://github.com/harshitsinghai77/noiist-airflow](https://github.com/harshitsinghai77/noiist-airflow)

Note: The architecture is based on Airflow. The main idea was to learn and create a project using Airflow. Using Airflow was definitely a overkill and the architecture could have been made much better without it. But the purpose was to get hands-on with Airflow.

As I cannot host airflow in cloud (need 💰💰💰 for AWS bill), the project needs manual run at midnight. I use to religiously run the airflow docker container locally on my system at midnight, but I've deserted the project recently (not worth the manual effort just to serve 5 customers).

# Pluto AI

[https://plutoai.netlify.app/](https://plutoai.netlify.app/)

<img src='https://iili.io/tgSg07.png' />

Convert your favorite shot into any famous artistic painting using Pluto AI.

Pluto uses a TensorFlow implementation of Neural Style Transfer wrapped as a REST API. We also have a custom neural style transfer model [https://github.com/harshitsinghai77/pluto/blob/master/backend/model/nst.py](https://github.com/harshitsinghai77/pluto/blob/master/backend/model/nst.py). Using Flask to serve the model. ReactJs to serve frontend. We use Firebase to store user images. Another parameter we record is the user rating of the image. This is for future optimization of our model.

<img src='https://iili.io/tgv7qP.png' />

**Get Started** [https://plutoai.netlify.app/](https://plutoai.netlify.app/)

**Source Code**

1. [https://github.com/harshitsinghai77/pluto](https://github.com/harshitsinghai77/pluto)
2. ML Model: [https://github.com/harshitsinghai77/pluto/blob/master/backend/model/tf_v2.py](https://github.com/harshitsinghai77/pluto/blob/master/backend/model/tf_v2.py)
3. Custom ML Model: [https://github.com/harshitsinghai77/pluto/blob/master/backend/model/nst.py](https://github.com/harshitsinghai77/pluto/blob/master/backend/model/nst.py)

<img src='https://raw.githubusercontent.com/harshitsinghai77/pluto/master/static/images/pluto_2.png' />

Note: Might not work as of now, Heroku Free Dynamo shut down the python backend serving the ML model.

# ToDoBase

[https://todobase.netlify.app/](https://todobase.netlify.app/)

<img src='https://iili.io/trJsWl.png' />

Todobase is your little helper and companion to keep track of your daily and weekly tasks.

Todobase helps you keep track of your tasks and to-do list.

With Nemo you can mix and match different sounds in order to create your perfect sound environment. Todobase helps you stay on top of your work routine, tasks and todolist.

**Source Code** [https://github.com/harshitsinghai77/todobase](https://github.com/harshitsinghai77/todobase)

## Conclusion

We learned how to use GridSearchCV and Pipline to create machine learning Pipelines.

That’s it for today, see you soon. :)
