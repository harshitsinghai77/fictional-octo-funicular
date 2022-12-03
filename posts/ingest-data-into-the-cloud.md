---
title: "Ingest data into AWS."
excerpt: "Ingesting data into AWS is a common task for data engineers and analysts. In this article, we will explore some of the key methods for ingesting data into AWS, including batch and streaming options."
coverImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
date: "2022-03-27T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

In this post we will talk about different services offered by AWS to ingest data into the cloud. We will start with the most common and widely used service called AWS S3. We will talk about the advantages of using S3 as a data lake, and how to continually capture data.

One common method for ingesting data into AWS is to use batch processing. This involves transferring data from external sources, such as databases or files, into AWS storage systems, such as Amazon S3 or Amazon EBS. This can be accomplished using tools such as the AWS Data Pipeline.

Another option for ingesting data into AWS is to use streaming processing. This involves continuously transferring data from external sources into AWS storage systems, in real-time or near-real-time. This can be useful for handling high-volume, fast-moving data, such as log files or sensor data. AWS offers a range of tools and services for streaming data, including Amazon Kinesis, Amazon DynamoDB Streams, and Amazon Kinesis Firehose.

We will also take a look at warehouse service like Amazon Redshift, and talk about Amazon Redshift Spectrum.

## S3

We cannot talk about ingesting data into AWS without mentioning S3. Amazon Simple Storage Service (Amazon S3) is fully managed object storage that offers extreme durability, high availability, and infinite data scalability at a very low cost.

Hence, it is the perfect foundation for data lakes, training datasets, and ML models.

## Data Lakes

Biggest advantages of data lakes is that we don’t need to predefine any schemas. We can store our raw data at scale and then decide later in which ways we need to process and analyze it. Data lakes may contain structured, semistructured, and unstructured data.

S3 has become a popular choice for data lakes, as it offers many ways to ingest our data while enabling cost optimization with intelligent tiering of data, including cold storage and archiving capabilities.

## Query S3 Data Lake with Athena

Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. With Athena, we can query raw data—including encrypted data—directly from our S3-based data lake.

Athena queries run in parallel inside a dynamically scaled, serverless query engine. Athena will automatically scale the cluster depending on the query and dataset involved. This makes Athena extremely fast on large datasets.

Athena supports the Parquet columnar file format with tens of millions of partitions to improve the performance of our queries.

Athena is based on Presto, an open source, distributed SQL query engine designe for fast, ad hoc data analytics on large datasets. Similar to Apache Spark, Presto uses high-RAM clusters to perform its queries. However, Presto does not require a large
amount of disk as it is designed for ad hoc queries (versus automated, repeatable queries) and therefore does not perform the checkpointing required for fault
tolerance.

If our data is stored in any other relation database service like Amazon RDS and Aurora, nonrelational databases such as DynamoDB, object storage such as Amazon S3, or any custom data sources, we can use `Athena Federated Query` to run SQL queries accross them without actually moving the data.

## Parquet over TSV/CSV

The Parquet columnar file format is definitely preferred when running analytics queries since many analytics queries perform summary statistics (AVG, SUM, STDDEV, etc.) on columns of data.

## Why Parquet?

I would suggest you to learn more about Parquet from the internet but here's a quick introduction that might be useful

By storing our data in columnar format, Parquet performs sequential reads for columnar summary statistics. This results in much more efficient data access and “mechanical sympathy” versus having the disk controller jump from row to row and having to reseek to retrieve the column data. If we are doing any type of large-scale data analytics, we should be using a columnar file format like Parquet.

The query on the Parquet files generally finishes in a fraction of the time compared to the query on the TSV files.

## Ingest New Data with AWS Glue Crawler

AWS Glue provides sophisticated data-cleansing and machine-learning transformations. One way to register the new data from S3 into our AWS Glue Data Catalog is with a Glue Crawler, as shown

![alt text](https://serving.photos.photobox.com/61816296addf0a052978a4c1dd861f2bc205251e75cafd997488b8abfd4b8924239ca50b.jpg)

We can trigger the crawler either periodically on a schedule or via S3 trigger.

## Amazon Redshift

Amazon Redshift is a fully managed data warehouse that allows us to run complex
analytic queries against petabytes of structured data, semistructured, and JSON data.

Amazon Redshift implements columnar data storage like Parquet, which is optimized for analytical applications.

While S3 is a data lake, Amazon Redshift is a data warehouse.

## Amazon Redshift Spectrum

Amazon Redshift Spectrum, allows to directly execute SQL queries from Amazon Redshift against exabytes of unstructured data in our Amazon S3 data lake without the need to physically move the data.

## Amazon Athena and Amazon Redshift

### Why Amazon Athena?

1. Preferred choice when running ad hoc SQL queries on data that is stored in Amazon S3.
2. No setup or infrastructure management required.
3. No need to move any data.
4. Supports structured, unstructured, and semistructured data.
5. "schema on read"

### Why Amazon Redshift?

1. Modern data analytics on petabytes of structured data.
2. "Schema on write"
3. Requires to create clusters. ingest the data, and build tables before querying the data.
4. Right choice when complex joins are involved, and subsecond latency requirement.

### Athena and Redshift vs RDS and Aurora

Athena and Amazon Redshift are optimized for read-heavy analytics workloads, they are not replacements for write-heavy, relational databases such as Amazon Relational Database Service (RDS) and Aurora.

At a high level, use Athena for exploratory analytics and operational debugging, use Amazon Redshift for business-critical reports and dashboards.

## Conclusion

We discussed various services offered by AWS to ingest data into the cloud. We talked about Data Lakes, Data Warehouses, Amazon Redshift Spectrum, performance improvment with Parquet and difference between Athena and Redshift.

That’s it for today, see you soon. :)
