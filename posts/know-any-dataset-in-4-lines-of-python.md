---
title: "Know any Dataset in 4 Lines of Python"
excerpt: "Data has always been used to empower smarter decision-making process. When solving any machine learning problem the first thing a data scientist does is Exploratory Data Analysis (EDA). This is the first step towards solving any machine learning regression or classification problem."
coverImage: "https://images.unsplash.com/photo-1568358278654-343b0190a764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
date: "2019-11-22T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Data has always been used to empower smarter decision-making process. When solving any machine learning problem the first thing a data scientist does is Exploratory Data Analysis (EDA). This is the first step towards solving any machine learning regression or classification problem.

EDA for me is the most monotonous yet crucial task in the machine learning pipeline. It's important to get the gist of the dataset at hand, visualize features, and pick the best machine learning model for the job in hand.

> At a high level, EDA is the practice of describing the data by means of statistical and visualization techniques to bring important aspects of that data into focus for further analysis.This involves looking at your data set from many angles, describing it, and summarizing it without making any assumptions about its contents.

## Pandas-profiling
[https://pypi.org/project/pandas-profiling/](https://pypi.org/project/pandas-profiling/)


`pip install pandas-profiling`

For the dataset, I’ve used [The Complete Pokemon Dataset](https://www.kaggle.com/rounakbanik/pokemon) from Kaggle. Download the zip file and extract the pokemon.csv file.

Import the libraries. 

```python
import pandas as pd
import pandas_profiling

df = pd.read_csv('pokemon.csv')
pandas_profiling.ProfileReport(df).to_file("pokemon_summary.html")
```

The following code will generate pokemon_summary.html file in the same location. The generated file will contain a complete overview of the EDA of the dataset.

That’s it for today. See you soon.
