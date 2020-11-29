---
title: "Deploying Go applications with Nohup and Nginx"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

### In this post, we will cover the following topics:

1. What is an Nginx proxy server?
2. Learning Nginx server blocks
3. Load balancing strategies in Nginx
4. Deploying our Go service using Nginx
5. Rate limiting and securing our Nginx proxy server
6. Monitoring our Go service using a tool called Supervisord

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

### Installing and configuring Nginx

Nginx is a high performant web server and load balancer, and is well suited to deploying high traffic websites. Even though this decision is opinionated, Python and Node developers usually use this.

Nginx can also act as an upstream proxy server that allows us to redirect the HTTP requests to multiple application servers running on the same server. The main contender of Nginx is Apache's httpd. Nginx is an excellent static file server that can be used by the web clients. Since we are dealing with APIs, we will look into aspects of dealing with HTTP requests.

On Ubuntu 16.04, use these commands to install Nginx:

```bash
sudo apt-get update
sudo apt-get install nginx
```

On macOS X, you can install it with brew :

```bash
brew install nginx
```

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
