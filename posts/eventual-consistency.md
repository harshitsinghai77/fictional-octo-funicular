---
title: "Data Engineering: Eventual Consistency"
excerpt: Breaking down Eventual Consistency, how it is different from Strongly Consistency, when to use Eventual Consistency, and conflict resolution.
coverImage: "https://images.unsplash.com/photo-1646578264746-480cc7c7bf6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
date: "2022-03-18T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Strongly Consistency.

Strong consistency is when all access to database is processed sequentially and reads are from the same state in your database.

Let's break it down. Strong Consistency simply means the data must be strongly consistent at all times. All the server nodes across the world should contain the same value as an entity at any point in time. We can achieve this by locking down the nodes when being updated.

Let's say your new trending app has many clients. You decide to have one master database. All of your client connect to the master database for reads and writes.

This is strong consistency. Your databse will always be consistent, i.e, reads after write will show the data that was initially written.

This works great, untill your master database is down. Now all your clients are waiting...

## Eventual Consistency.

`Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.`

One example of this could be, suppose your have one master and multiple followers. Follower database can write incoming db operations on a local logs file. A nightly task can be executed, where you update the operations performed by all the followers in your main master database. This system will allow your transactions to be eventually consistent.

Does this help mitigating the problem previously discussed, relying on a single master database to serve clients in the trending app? No.

Mitigating the risk of master node failure is not related to Eventual Consistency. There are other ways to deal with fault tolerance.

Eventual consistency helps for systems that have to trade high-volume processing.

## Better Example

Let's take a better example to help understand eventually consistency.

You recently released your brand new food app and bought into the idea of microservices architecture.

1. Order Services
2. Statistics

When the Order Services recieves an order from the customer, it calls the Statistics service, which updates the customer statistics. This is strongly consistent because everytime Order Service recieves a request it immediately calls the Statistics service which do some complex calculations. The user has to wait until it recieves acknowledgement from both the Order Service and the Statistic service.

Here is a rough keyboard diagram (I'm too lazy to create an actual diagram).

Client --> Order Service --> Statistic Service

Success <-- ack (ack from order service) <-- ack (from stats service)

In this architecture, data will never be inconsistent. This is strong consistency.

Let's say our Statistic Service has a lot of intensive complex processing to do. This will keep our customers waiting even when the order is created, this is because our Statistic Service is taking too long doing complex analysis, which in-turn is keeping the Order Service waiting which in-turn is keeping the customer waiting.

To mitigate this, we can ask Order Service not to wait for the Statistic Service, instead send "SUCCESS" response to the customer. This will fix the performance bottleneck issue.

Then we implement some kind of background job, cron job or use a Queue. Statistics Service will periodically ask Orders Service if there is any unproccessed order. The unprocessed orders from the Order Service will be processed by Stats Service asynchronously.

For queue based solution, you can either use Python Celery which is a asynchronous distributed messaging queue. You can also use something like a producer consumer architecture like Kakfa, or use AWS SQS (Simple Queue Service) with Lambda. The implementation details are beyond the scope of this post.

With this approach we will have inconsistent data for some time, but as soon as the background job or background proccesing is done, our data will eventually be consistent. This is what Eventual Consistency is about.

Now our customers will not have to wait for Order Creation, but have to deal with some temporary inconsistent data in Statistic Service.

## Conflict Resolution in Eventual consistency

1. Read repair: The correction is done when a read finds an inconsistency. This slows down the read operation.

2. Write repair: The correction takes place during a write operation, if an inconsistency has been found, slowing down the write operation.

3. Asynchronous repair: The correction is not part of a read or write operation.

# Conlusion

We take a look at Eventual Consistency and how it is different from Strongly consistency, a use case where Eventual Consistency might make sense and conflict resolution.

That’s it. Thanks for reading :)
