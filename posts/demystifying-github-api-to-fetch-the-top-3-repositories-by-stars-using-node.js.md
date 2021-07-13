---
title: "Demystifying GitHub API to Fetch the Top 3 Repositories by stars using Node.js"
excerpt: "Recently, I decided to write a simple API, to fetch data from Github and returns the top 3 repositories of an organization by stars."
coverImage: "https://images.unsplash.com/photo-1535063406830-27dfae54262a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
date: "2020-07-22T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Recently, I decided to write a simple API, to fetch data from Github and returns the top 3 repositories of an organization by stars.

## See it in action

[https://top-10-github-repositories.netlify.app/](https://top-10-github-repositories.netlify.app/)

## Problem statement

Write a simple API server, which fetches data from Github, serializes in a certain format.
Steps:

1. You need to make a REST API call to Github’s API service and fetch the data
2. Measure the response time for your endpoint

## API Details

We will send a POST request to your API at /repos with JSON payload containing Github organization name

```javascript
// For Microsoft, this will look like:
{
    "org": "microsoft"
}
```

and the API should return a response in the JSON format.

```javascript
{
  "results": [
      {"name":"vscode", "stars": 88976},
      {"name":"TypeScript", "stars": 56648},
      {"name":"terminal", "stars": 55706},
   ]
}
```

## to-do

1. Think through the edge cases, especially for organizations with large number of repositories
2. Write good, useful docstrings and comments
3. Write good, useful docstrings and comments
4. Write functional and unit tests
5. Add logging
6. In addition to response time, measure requests/second that your endpoint can handle

## Github

You can find all the code here at
[https://github.com/harshitsinghai77/top-github-organization-repositories-using-node](https://github.com/harshitsinghai77/top-github-organization-repositories-using-node)

## Let’s get started

In this project, we’ll be using Node.js for the backend. We will also be making a simple frontend for the application using React JS.

Enough talking, it’s time to put the plan into action.

## Backend (Node.js)

We will be using Nodejs for the backend.

First things first, let’s install our dependencies

```javascript
"dependencies": {
     "axios": "^0.19.0",
     "body-parser": "^1.19.0",
     "cors": "^2.8.5",
     "dotenv": "^8.2.0",
     "express": "^4.17.1",
     "express-pino-logger": "^4.0.0",
     "pino": "^5.14.0"
}
```

1. Axios — To be used for making an API call to Github API and fetching all the repository by an organization name.

2. body-parser — Used to extract the entire body portion of an incoming request stream and exposes it on req.body

3. cors — So that any server or 3rd party application or server can access our backend without being explicitly allowed.

4. dotenv — Access .env file where all the secret are kept hidden

5. express — A web application framework for Node.js.

6. express-pino-logger- Log every detail about who accesses the endpoint.

7. pino — super fast, all-natural JSON logger

Install all these dependencies

```terminal
npm install axios body-parser cors dotenv express express-pino-logger pino --save
```

This command will make a folder name node_modules and all the dependencies will be installed in this folder. You can simply use them by importing them in your app.js file.

First, we will import all the necessary libraries in our app.js

## app.js

```javascript
// Basic Routes libraries
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
```

## Using middleware

```javascript
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressPino);
```

A simple endpoint to check if the app is working

```javascript
app.get(‘/’, (req, res) => {
   res.send(‘Hello World’);
});
```

Now finally to run the app

```javascript
//Dynamic port, else localhost 3000
const PORT = process.env.PORT || 3000;
module.exports = app.listen(PORT, () => {
        console.log(‘Server running on port %d’, PORT);
})
```

Now go to terminal, navigate to the working directory and run the command

```terminal
node app.js
```

You will see `Server running on port 3000` print in your command line.

You can verify by either making a get request from Postman or simply going to http://localhost:3000/ in your browser.

We have successfully set up our basic app. Now it’s time to dive deeper into the problem

## Defining repos route

First, we will try to extract the organization name from the req.body

```javascript
const organization = req.body.org
//Empty request without organization name
if (!organization){
return res.json({“results”: “Oganization name not found”})
}
```

If the organization name is not found in the post request i.e if the user tries to send an empty post request then the route will give a response saying “Organization name not found. Please enter valid GitHub organization name”

Now, we’re going to make a get request to GitHub API

```javascript
axios.get(
  `https://api.github.com/orgs/${organization}/repos?per_page=100&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
);
```

We will be using GitHub client ID and GitHub client secret to make more calls to GitHub API so that we can exceed the free API limit. This allows us to make more calls per day as compared to limited calls without authorization.

We will also be listing 100 repositories per page as you can see it from the above code snippet.
To get more details [click here](https://docs.github.com/en/rest/reference/repos#list-organization-repositories). Similarly, you can also list [all user repositories](https://docs.github.com/en/rest/reference/repos#list-user-repositories) and all [your own repositories](https://docs.github.com/en/rest/reference/repos#list-your-repositories).

To get the [full documentation visit here](https://docs.github.com/en/rest/reference/repos)

## Our Approach

Let’s discuss the blueprint for a better understanding. First, we’ll check if the organization contains more than one page. If the organization contains more than one page then we’ll use a different approach as discussed below, else we’ll be using a different approach.

## Handling organization repositories with more than one page through pagination

By default GitHub API only list repositories available on the first page of the organization. In order to get the top 3 repositories of GitHub organization by the star, we need to get the list of all the repositories across various pages.

To encounter this issue, we will be looking at something called link which we can extract from the headers of the GitHub API response.

GitHub API sends back a property called Link in their header which can be further used to extract the total number of pages in the organization.

Here, we are using Postman to make a GET request to Github API with the alibaba. You can see in the Headers tab we are getting some information about the link.

![demystifying-github-api-to-fetch-the-top-3-repositories-by-stars-using-node.js](https://miro.medium.com/max/908/1*3U9s8aqiIcsEv2T6UwRKfg.png)

```javascript
<https://api.github.com/organizations/1961952/repos?per_page=100&page=2>; rel=”next”, <https://api.github.com/organizations/1961952/repos?per_page=100&page=3>; rel="last"
```

This is the link. It says the next page is page=2 and the last page is page=3. The rel=”” gives information about the page first last and the prev page. The last page is page=3 because we’re listing 100 repositories on a single page. This makes it a total of 3 pages. If we get 20 pages in one request then the header link will look something like this

![demystifying-github-api-to-fetch-the-top-3-repositories-by-stars-using-node.js](https://miro.medium.com/max/908/1*WYTvP7PfOtfPuNmb9EkRAg.png)

```javascript
<https://api.github.com/organizations/1961952/repos?per_page=20&page=2>; rel="next", <https://api.github.com/organizations/1961952/repos?per_page=20&page=15>; rel="last"
```

It means the next page is page=2 and the last page will be page=15. This is because we’re only getting 20 repositories on a single page. So to list all the repositories we will have to make an API request 15 times getting 20 repositories per page.

Note: The maximum repositories we can get per_page is 100.

Moving on,

```javascript
const link = resp.headers.link; // Getting next pages (if exist)
if (link) {
  // Organization with more than 1 page
  //Extracting total number of pages in the organization
  const totalPages = parseInt(
    link.split(",")[1].split(">")[0].split("&page=")[1]
  );
  const allRepo = []; // Endpoints for all the pages of the organization
  for (let i = 1; i < totalPages + 1; i++) {
    allRepo.push(
      `https://api.github.com/orgs/${organization}/repos?   per_page=100&page=${i}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
  }
}
```

We will be using the Link present in the header using resp.headers.link. If the link exists then using string manipulation we will try to extract the total number of pages by

```javascript
const totalPages = parseInt(
  link.split(",")[1].split(">")[0].split("&page=")[1]
);
```

This will get us the total number of pages available in the repository. Now, we will have to make an API request for every page.

We will push the repository link in an array and will call a function to loop through the array and make an API request for all the links present in the array. This will be handled using something called Promises. If you’re unaware of promised I suggest you check out some other articles online.

![demystifying-github-api-to-fetch-the-top-3-repositories-by-stars-using-node.js](https://miro.medium.com/max/908/1*GMr_5WOiy_O6JMzbF1eitw.png)

The function loops through the list containing all the repository link, for every page URL it makes a GET request to GitHub API. The response is then sorted based on stargazers_count. stargazers_count contain information about the number of stars in the repository.

The response array (i.e the repository data in the corresponding page) is sorted on the basis of stargazers_count and then sliced to get the top 3 repositories.

## Handling all the asynchronous promises

![demystifying-github-api-to-fetch-the-top-3-repositories-by-stars-using-node.js](https://miro.medium.com/max/908/1*riPQyvdA6ULdcO4sSgD8FQ.png)

This basically lists all the repositories found in all the pages of the organization. We handle all the asynchronous promises and then flatten the 2D array to 1D.

After this, we sort the array again based on stargazers_count and slice the top 3 repositories.

We’re only interested in the name and the stars. The data is again looped to return only the name and the stars out of all the other information that was sent by the GitHub API.

After accumulating all the repositories spread across various pages and sorting them based on stars we finally send the data back to the user.

```javascript
// Collecting and sorting all the repos based on stars
const data = await getAllRepos(allRepo);
return res.json({ results: data });
```

## Handling organization repositories having only one page

If we have only one page in the organization then we sort the data based on stars and then return only the name and the stars.

![demystifying-github-api-to-fetch-the-top-3-repositories-by-stars-using-node.js](https://miro.medium.com/max/908/1*clOzxbTPUgC_wSke_xUpVQ.png)

## Code

To get the [https://github.com/harshitsinghai77/top-github-organization-repositories-using-node](https://github.com/harshitsinghai77/top-github-organization-repositories-using-node)

## Demo

[https://top-10-github-repositories.netlify.app/](https://top-10-github-repositories.netlify.app/)

That’s it for today. See you soon.
