---
title: "Data Engineering: Storage Layer"
excerpt: Breaking down Eventual Consistency, how it is different from Strongly Consistency, when to use Eventual Consistency, and conflict resolution.
coverImage: "https://images.unsplash.com/photo-1638847868668-a05a2f69622f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
date: "2022-04-06T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Many programmers know how to write SQL queries and how to fetch data from the tables using programming clients and cli. But only a few understand the internal architecture and how databses interacts with storage engines.

Having some understanding of the underlying storage engine used in different databases can be important for data engineer.

While writing SQL, we mostly focus on defining constraints like joins, filters. The database optimizer will figure out the most efficient way to produce the results.

## Expectations from Storage Layer

A good storage layer should

1. Avoid loading anything in memory that will be discarded as part of query processing. Doing this saves I/O cost as well as CPU cost. It also avoids unnecessary deserialization.

2. Reduce data footprint, so the data costs less to store and is faster to retrieve.

3. Encodings and compression helps in decreasing I/O costs and increasing CPU cost. However

4. Cheap decoding techniques.

## Pushdown

The implementation details behind the Storage Layer are usually hidden behind what is commonly known as pushdowns.

## Projection Pushdown

A projection pushdown consists of reading only the columns requested.

## Predicate Pushdown

This consists of avoiding deserializing rows that are going to be discarded by a filter.

## Performance of Pushdown

Various storage characteristics will impact the performance of pushdowns. Columnar layouts (for example, Apache Parquet) enable projection pushdowns and better encodings and compression.

# Conclusion

We talked about the Data Storage Layer in the database. We listed some properties of what consitutes a good data storage layer and briefly discussed projection pushdown and predicate pushdown.

That’s it. Thanks for reading :)
