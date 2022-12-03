---
title: "Python: Functional Programming with Map, Compose and Pipe."
excerpt: "Python is a versatile programming language that is well-suited to a variety of programming paradigms. One of these paradigms is functional programming, which focuses on the use of functions to transform and manipulate data. In this article, we will explore some of the key concepts of functional programming in Python, including map, compose, and pipe."
coverImage: "https://images.unsplash.com/photo-1453906971074-ce568cccbc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
date: "2022-04-24T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Map can be used in parallel programming. Python map can be very powerful if used corectly.
Let's take a look at how to use map more effectively.

## Using nothing but map()

Let's say we have multiple functions responsible for a atomic task.

```python
def replace_7t(s):
    return s.replace('7','t')

def replace_3e(s):
    return s.replace('3','e')

def replace_6g(s):
    return s.replace('6','g')

def replace_4a(s):
    return s.replace('4'.,'a')
```

If we want to pass input to all these functions and calculate the result, we can use something like

```python
map(replace_4a,
    map(replace_6g,
        map(replace_3e,
            map(replace_7t, sample_messages))))
```

## Install Package

Before we start, you first need to install a package

```terminal
pip install toolz
```

## Constructing a pipeline with compose

First, let’s look at compose. The compose function takes our helper functions in the reverse order that we would like them applied and returns a function that applies them in the desired order. For example, compose(kai, mason, kovacic) would apply kovacic, then mason, then kai.

Using compose, we can re-write our previous function.

```python
from toolz.functoolz import compose

my_pipeline = compose(replace_4a, replace_6g, replace_3e, replace_7t)

map(my_pipeline, sample_messages)
```

## Pipelines with pipe

Next, let’s look at pipe. The pipe function will pass a value through a pipeline. It expects the value to pass and the functions to apply to it. Unlike compose, pipe expects the functions to be in the order we want to apply them. So pipe(x, kai, mason, kovacic) applies kai to x, then mason to that value, and finally kovacic to that value.

```python
from toolz.functoolz import pipe

def transform_player(s):
        return pipe(s, replace_7t, replace_3e, replace_6g, replace_4a)

map(transform_player, sample_messages)
```

In this case, we’re starting with replace_7t, then applying replace_3e, replace_6g, and replace_4a, in that order.

## Why so much effort?

Creating pipelines of helper functions provides two major advantages. The code becomes

1. Very readable and clear
2. Modular and easy to edit

## Example

Let's say we are given a list of strings and for each string we need to make them uppercase, remove vowels and revserse them. We can leverage compose and write better and simple, readable code.

```python
my_pipeline = compose(reverse, remove_vowels, make_uppercase)
```

## Planning for the future

More often than not, we find ourseleves in dynamic situations, requirements constantly change. Using these tools, it much simpler to add new functions or remove functions into our pipeline, making it very easy to customize without changing lot of code.

## Conclusion

Designing programs with small helper functions makes hard problems easy to solve by breaking them up into bite-sized pieces.

That’s it for today, see you soon. :)
