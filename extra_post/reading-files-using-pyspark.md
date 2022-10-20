---
title: "Reading different types of files using PySpark"
excerpt: "Pandas is a powerful tool when it comes to data manipulation with Python. Most often than not, we have data stored in multiple files with some relation in between them."
coverImage: "https://images.unsplash.com/photo-1472850156196-0156e307c552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
date: "2022-07-22T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Pandas is a powerful tool when it comes to data manipulation with Python. Most often than not, we have data stored in multiple files with some relation in between them.

Pandas makes it easy to combine data from multiple files and merge them into a single dataframe.

That's when `joins` and `merge` comes into play. In this blog we're going to take a look at different joins to glue our data together.

## Read a CSV file

We can read a CSV file using the spark.read.csv() function . Here, spark is object of the SparkSession class. This function has many arguments but we are going to discuss the more important ones. We specify the path of the CSV file, which has to be read by the path argument. The PySpark SQL DataFrame has a tabular structure similar to RDBMS tables.The function is smart and can infer the schema if the inferSchema argument has been set to True.

```python
swimmerDf = spark.read.csv('swimmerData.csv', header=True, inferSchema=True)
swimmerDf.show(4)
```

+---+------+-----------+----------------+
| id|Gender| Occupation|swimTimeInSecond|
+---+------+-----------+----------------+
|id1| Male| Programmer| 16.73|
|id2|Female| Manager| 15.56|
|id3| Male| Manager| 15.15|
|id4| Male|RiskAnalyst| 15.27|
+---+------+-----------+----------------+

The DataFrame called swimmerDf has been created. We have used the inferSchema argument set to True. It is better to check if the schema created the DataFrame. So let let’s print it using the printSchema() function.

```python
swimmerDf.printSchema()
```

Here is the output:
root
|-- id: string (nullable = true)
|-- Gender: string (nullable = true)
|-- Occupation: string (nullable = true)
|-- swimTimeInSecond: double (nullable = true)

## use suffixes

```python
# Merge the taxi_owners and taxi_veh tables setting a suffix
taxi_own_veh = taxi_owners.merge(taxi_veh, on='vid', suffixes=("_own", "_veh"))

# Print the column names of taxi_own_veh
print(taxi_own_veh.columns)
```

## Read a JSON File

The spark.read.json() function will read JSON files. Like the csv() function, there are many arguments in the json() function. The first argument is path and it determines the location of the file to be read. The second argument is schema and it determines the schema of the DataFrame to be created.

The contents of our json file look like this:
{"iv1":5.5,"iv2":8.5,"iv3":9.5}
{"iv1":6.13,"iv2":9.13,"iv3":10.13}
{"iv1":5.92,"iv2":8.92,"iv3":9.92}
{"iv1":6.89,"iv2":9.89,"iv3":10.89}
{"iv1":6.12,"iv2":9.12,"iv3":10.12}

```python
corrData = spark.read.json(path='corrData.json')
corrData.show(6)
```

+---+-----+-----+
|iv1| iv2| iv3|
+----+----+-----+
| 5.5| 8.5| 9.5|
|6.13|9.13|10.13|
|5.92|8.92| 9.92|
|6.89|9.89|10.89|
|6.12|9.12|10.12|
|6.32|9.32|10.32|
+----+----+-----+

So, while reading a JSON file, if we do not provide the schema, PySpark SQL will infer it.

## Save a DataFrame as a CSV File

## Conclusion

We saw how to do inner join, left join, right join and outter join using Pandas. Pandas makes it super easy to join data from multiple sources into one dataframe - ready for analysis. :)
