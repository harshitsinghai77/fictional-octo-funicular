---
title: "Streamlined Data Ingestion With Pandas"
excerpt: "Data Engineer workflow using Pandas."
coverImage: "https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
date: "2023-06-01T01:56:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

As a data engineer, one of the most common tasks is to import and process data from various sources. Efficient data ingestion is crucial for smooth data workflows and analysis. In this blog post, we will explore how pandas, a popular data manipulation library in Python, can streamline the data ingestion process.

## Importing Data from Flat Files

Flat files, such as CSVs and TSVs, are a common format for storing tabular data. Let's see how pandas simplifies the process of importing data from these files.

## Get data from CSVs

```python
# Import pandas as pd
import pandas as pd

# Read the CSV and assign it to the variable data
data = pd.read_csv("vt_tax_data_2016.csv")

# View the first few lines of data
print(data.head())
```

In this code snippet, we import pandas as pd and use the read_csv() function to read a CSV file named "vt_tax_data_2016.csv". The data is loaded into a pandas DataFrame called data. By calling data.head(), we can quickly inspect the first few rows of the DataFrame.

## Get data from other flat files

Pandas provides flexibility in handling various flat file formats. Let's consider loading data from a TSV file.

```python
# Import pandas with the alias pd
import pandas as pd

# Load TSV using the sep keyword argument to set delimiter
data = pd.read_csv("vt_tax_data_2016.tsv", sep="\t")

# Plot the total number of tax returns by income group
counts = data.groupby("agi_stub").N1.sum()
counts.plot.bar()
plt.show()
```

Here, we use the read_csv() function to read a TSV file named "vt_tax_data_2016.tsv". By specifying sep="\t", we set the delimiter as a tab character. Once the data is loaded into the DataFrame data, we perform some data analysis by grouping the data by the "agi_stub" column and summing the "N1" column. Finally, we plot the total number of tax returns by income group using a bar chart.

## Import a subset of columns

Sometimes, we only need a subset of columns from a large dataset. Pandas allows us to specify the columns to import, saving both memory and processing time.

```python
# Create list of columns to use
cols = ["zipcode", "agi_stub", "mars1", "MARS2", "NUMDEP"]

# Create data frame from CSV using only selected columns
data = pd.read_csv("vt_tax_data_2016.csv", usecols=cols)

# View counts of dependents and tax returns by income level
print(data.groupby("agi_stub").sum())
```

In this example, we create a list called cols containing the column names we are interested in. By passing usecols=cols to the read_csv() function, we instruct pandas to import only the specified columns from the CSV file. This approach is particularly useful when dealing with large datasets where loading unnecessary columns can be resource-intensive. We then perform a grouping and summation operation on the selected columns, grouping the data by the "agi_stub" column and calculating the sum of each group.

## Import a file in chunks

In some cases, when dealing with very large datasets, it may not be feasible to load the entire file into memory at once. Pandas provides a convenient way to read data in chunks, allowing us to process the data in smaller portions. Let's take a look at an example:

```python
# Create data frame of next 500 rows with labeled columns
vt_data_next500 = pd.read_csv("vt_tax_data_2016.csv",
                              nrows=500,
                              skiprows=500,
                              header=None,
                              names=list(vt_data_first500))

# View the Vermont data frames to confirm they're different
print(vt_data_first500.head())
print(vt_data_next500.head())
```

In this code snippet, we use the read_csv() function to read only the next 500 rows of the CSV file "vt_tax_data_2016.csv" after skipping the first 500 rows. By specifying the nrows parameter as 500 and skiprows parameter as 500, we read only the desired chunk of data. Additionally, we set the header parameter to None and provide column names from the previously loaded vt_data_first500 DataFrame. This allows us to create a new DataFrame called vt_data_next500 containing the next 500 rows of data. Finally, we can compare the two data frames to confirm that they are different.

## Specify data types

When importing data, it's important to ensure that the data types are correctly inferred or specified. Pandas provides the dtype parameter, allowing us to explicitly define the data types of columns. Let's see how this can be done:

```python
# Create dict specifying data types for agi_stub and zipcode
data_types = {'agi_stub': 'category',
              'zipcode': str}

# Load CSV using dtype to set correct data types
data = pd.read_csv("vt_tax_data_2016.csv", dtype=data_types)

# Print data types of resulting frame
print(data.dtypes.head())
```

In this example, we define a dictionary called data_types that maps column names to their respective desired data types. We specify that the "agi_stub" column should be of category type and the "zipcode" column should be a string. When we load the CSV file "vt_tax_data_2016.csv" using read_csv(), we pass the dtype parameter with the data_types dictionary to enforce the specified data types. Finally, we print the data types of the resulting DataFrame using the dtypes attribute to verify that the data types are correctly assigned.

## Set custom NA values

Missing data or null values are common in datasets and can be represented in various ways. Pandas provides the na_values parameter, which allows us to specify custom values to be treated as missing values during the import process. Let's consider an example:

```python
# Create dict specifying that 0s in zipcode are NA values
null_values = {"zipcode": 0}

# Load CSV using na_values keyword argument
data = pd.read_csv("vt_tax_data_2016.csv",
                   na_values=null_values)

# View rows with NA ZIP codes
print(data[data.zipcode.isna()])
```

In this code snippet, we create a dictionary called null_values that maps column names to the values we consider as missing or NA values. In this case, we specify that 0s in the "zipcode" column should be treated as missing values. When we load the CSV file "vt_tax_data_2016.csv" using read_csv(), we pass the na_values parameter with the null_values dictionary.

## Skip bad data

When working with real-world datasets, it's common to encounter corrupt or poorly formatted records. Pandas provides options to handle such cases. Let's take a look at an example:

```python
try:
  # Set warn_bad_lines to issue warnings about bad records
  data = pd.read_csv("vt_tax_data_2016_corrupt.csv",
                     error_bad_lines=False,
                     warn_bad_lines=True)

  # View first 5 records
  print(data.head())

except pd.io.common.CParserError:
    print("Your data contained rows that could not be parsed.")
```

In this code snippet, we use a try-except block to handle potential errors during the data import process. We attempt to read a CSV file named "vt_tax_data_2016_corrupt.csv" using read_csv(). By setting error_bad_lines to False and warn_bad_lines to True, we can continue reading the file even if there are bad records, while still receiving warnings about those records. If an error of type pd.io.common.CParserError is raised, it indicates that the data contained rows that could not be parsed. In that case, we catch the exception and print a message to inform the user.

## Importing Data From Excel Files

Apart from flat files, pandas also provides capabilities to import data from Excel files. Let's explore how to import data from Excel files using pandas.

```python
# Load pandas as pd
import pandas as pd

# Read spreadsheet and assign it to survey_responses
survey_responses = pd.read_excel("fcc_survey.xlsx")

# View the head of the data frame
print(survey_responses.head())
```

In this code snippet, we import pandas as pd and use the read_excel() function to read an Excel file named "fcc_survey.xlsx". The data is loaded into a pandas DataFrame called survey_responses. By calling survey_responses.head(), we can view the first few rows of the DataFrame to quickly inspect the data.

## Load a portion of a spreadsheet

Sometimes, we may only need to load a specific portion of an Excel spreadsheet that contains a large amount of data. Pandas allows us to select specific columns or ranges of columns using the usecols parameter. Let's see an example:

```python
# Create string of lettered columns to load
col_string = "AD,AW:BA"

# Load data with skiprows and usecols set
survey_responses = pd.read_excel("fcc_survey_headers.xlsx",
                                 skiprows=2,
                                 usecols=col_string)

# View the names of the columns selected
print(survey_responses.columns)
```

In this example, we create a string called col_string that specifies the columns we want to load. We can use individual column letters or specify a range of columns using the colon (e.g., "AW:BA" represents columns from AW to BA). When we load the Excel file "fcc_survey_headers.xlsx" using read_excel(), we pass the skiprows parameter as 2 to skip the first two rows, and the usecols parameter as col_string to load only the specified columns. Finally, we print the names of the selected columns using the columns attribute to confirm the selection.

## Select a single sheet

To start, let's focus on selecting a single sheet from an Excel file. We can accomplish this by referencing the sheet either by its position or name.

```python
##
# Create df from second worksheet by referencing its position
responses_2017 = pd.read_excel("fcc_survey.xlsx",
                               sheet_name=1)

# Graph where people would like to get a developer job
job_prefs = responses_2017.groupby("JobPref").JobPref.count()
job_prefs.plot.barh()
plt.show()

##
# Create df from second worksheet by referencing its name
responses_2017 = pd.read_excel("fcc_survey.xlsx",
                               sheet_name='2017')

# Graph where people would like to get a developer job
job_prefs = responses_2017.groupby("JobPref").JobPref.count()
job_prefs.plot.barh()
plt.show()
```

## Select multiple sheets

Next, let's explore how to select multiple sheets from an Excel file. We can achieve this by specifying a list of sheet names or positions.

```python
##
# Load both the 2016 and 2017 sheets by name
all_survey_data = pd.read_excel("fcc_survey.xlsx",
                                sheet_name=['2016', '2017'])

# View the data type of all_survey_data
print(type(all_survey_data))

##
# Load all sheets in the Excel file
all_survey_data = pd.read_excel("fcc_survey.xlsx",
                                sheet_name=[0, '2017'])

# View the sheet names in all_survey_data
print(all_survey_data.keys())

##
# Load all sheets in the Excel file
all_survey_data = pd.read_excel("fcc_survey.xlsx",
                                sheet_name=None)

# View the sheet names in all_survey_data
print(all_survey_data.keys())
```

## Work with multiple spreadsheets

Lastly, let's delve into working with multiple spreadsheets, where each spreadsheet represents a separate Excel file. We can merge the data from all spreadsheets into a single DataFrame for comprehensive analysis.

```python
# Create an empty data frame
all_responses = pd.DataFrame()

# Set up for loop to iterate through values in responses
for df in responses.values():
  # Print the number of rows being added
  print("Adding {} rows".format(df.shape[0]))
  # Append df to all_responses, assign result
  all_responses = all_responses.append(df)

# Graph employment statuses in sample
counts = all_responses.groupby("EmploymentStatus").EmploymentStatus.count()
counts.plot.barh()
plt.show()
```

## Set Boolean columns

When working with Boolean data in Excel, pandas provides an easy way to load and handle these columns.

```python
##
# Load the data
survey_data = pd.read_excel("fcc_survey_subset.xlsx")

# Count NA values in each column
print(survey_data.isna().sum())

##
# Set dtype to load appropriate column(s) as Boolean data
survey_data = pd.read_excel("fcc_survey_subset.xlsx",
                            dtype={"HasDebt": bool})

# View financial burdens by Boolean group
print(survey_data.groupby('HasDebt').sum())
```

## Set custom true/false values

Sometimes, the default true/false values in an Excel file may not match your desired representation. You can customize the true/false values during loading using pandas.

```python
# Load file with Yes as a True value and No as a False value
survey_subset = pd.read_excel("fcc_survey_yn_data.xlsx",
                              dtype={"HasDebt": bool,
                              "AttendedBootCampYesNo": bool},
                              true_values=["Yes"],
                              false_values=["No"])

# View the data
print(survey_subset.head())
```

## Parse simple dates

If you have date columns in your Excel file, you can parse them as datetime data types in pandas.

```python
# Load file, with Part1StartTime parsed as datetime data
survey_data = pd.read_excel("fcc_survey.xlsx",
                            parse_dates=["Part1StartTime"])

# Print first few values of Part1StartTime
print(survey_data.Part1StartTime.head())
```

## Get datetimes from multiple columns

In some cases, you may need to combine multiple columns to obtain a complete datetime representation. Pandas allows you to achieve this easily.

```python
# Create dict of columns to combine into new datetime column
datetime_cols = {"Part2Start": ["Part2StartDate", "Part2StartTime"]}


# Load file, supplying the dict to parse_dates
survey_data = pd.read_excel("fcc_survey_dts.xlsx",
                            parse_dates=datetime_cols)

# View summary statistics about Part2Start
print(survey_data.Part2Start.describe())
```

## Parse non-standard date formats

When dealing with non-standard date formats, you can specify the format explicitly to ensure proper parsing.

```python
# Parse datetimes and assign result back to Part2EndTime
survey_data["Part2EndTime"] = pd.to_datetime(survey_data["Part2EndTime"],
                                             format="%m%d%Y %H:%M:%S")

# Print first few values of Part2EndTime
print(survey_data["Part2EndTime"].head())
```

# 3. Importing Data from Databases

When working with databases in Python, the pandas library, along with SQLAlchemy, provides powerful tools for querying and manipulating data.Let's explore various techniques for working with databases, including connecting to a database, loading tables, refining imports with SQL queries, selecting rows, filtering on multiple conditions, getting distinct values, counting in groups, working with aggregate functions, joining tables, and more.

## Connect to a database

To connect to a database using SQLAlchemy, you can use the create_engine() function and specify the appropriate database URL. Here's an example:

```python
# Import sqlalchemy's create_engine() function
from sqlalchemy import create_engine

# Create the database engine
engine = create_engine("sqlite:///data.db")

# View the tables in the database
print(engine.table_names())
```

## Load entire tables

To load entire tables from a database into pandas DataFrames, you can use the read_sql() function. Here are a few examples:

```python
##
# Load libraries
import pandas as pd
from sqlalchemy import create_engine

# Create the database engine
engine = create_engine('sqlite:///data.db')

# Load hpd311calls without any SQL
hpd_calls = pd.read_sql('hpd311calls', engine)

# View the first few rows of data
print(hpd_calls.head())

##
# Create the database engine
engine = create_engine("sqlite:///data.db")

# Create a SQL query to load the entire weather table
query = """
SELECT *
  FROM weather;
"""

# Load weather with the SQL query
weather = pd.read_sql(query, engine)

# View the first few rows of data
print(weather.head())
```

## Refining imports with SQL queries

You can refine your imports from the database by specifying SQL queries to retrieve specific columns. Here's an example:

```python
# Create database engine for data.db
engine = create_engine('sqlite:///data.db')

# Write query to get date, tmax, and tmin from weather
query = """
SELECT date,
       tmax,
       tmin
  FROM weather;
"""

# Make a data frame by passing query and engine to read_sql()
temperatures = pd.read_sql(query, engine)

# View the resulting data frame
print(temperatures)
```

## Selecting rows

You can use SQL queries to select specific rows from a table. Here's an example:

```python
# Create query to get hpd311calls records about safety
query = """
SELECT *
FROM hpd311calls
WHERE complaint_type = 'SAFETY';
"""

# Query the database and assign result to safety_calls
safety_calls = pd.read_sql(query, engine)

# Graph the number of safety calls by borough
call_counts = safety_calls.groupby('borough').unique_key.count()
call_counts.plot.barh()
plt.show()
```

## Filtering on multiple conditions

When you need to filter records based on multiple conditions, you can use SQL queries with logical operators. Here's an example:

```python
# Create query for records with max temps <= 32 or snow >= 1
query = """
SELECT *
  FROM weather
 WHERE tmax <= 32
    OR snow >= 1;
"""

# Query database and assign result to wintry_days
wintry_days = pd.read_sql(query, engine)

# View summary stats about the temperatures
print(wintry_days.describe())
```

## Getting distinct values

To retrieve unique combinations of values from multiple columns, you can use the DISTINCT keyword in SQL queries. Here's an example:

```python
# Create query for unique combinations of borough and complaint_type
query = """
SELECT DISTINCT borough,
       complaint_type
  FROM hpd311calls;
"""

# Load results of query to a data frame
issues_and_boros = pd.read_sql(query, engine)

# Check assumption about issues and boroughs
print(issues_and_boros)
```

## Counting in groups

To retrieve unique combinations of values from multiple columns, you can use the DISTINCT keyword in SQL queries. Here's an example:

```python
# Create query to get call counts by complaint_type
query = """
SELECT DISTINCT complaint_type,
     count(*)
  FROM hpd311calls
  GROUP BY complaint_type;
"""

# Create data frame of call counts by issue
calls_by_issue = pd.read_sql(query, engine)

# Graph the number of calls for each housing issue
calls_by_issue.plot.barh(x="complaint_type")
plt.show()
```

## Working with aggregate functions

Aggregate functions in SQL, such as MAX, MIN, and SUM, can be used to calculate statistics on groups of data. Here's an example:

```python
# Create query to get temperature and precipitation by month
query = """
SELECT month,
        MAX(tmax),
        MIN(tmin),
        SUM(prcp)
  FROM weather
 GROUP BY month;
"""

# Get data frame of monthly weather stats
weather_by_month = pd.read_sql(query, engine)

# View weather stats by month
print(weather_by_month)
```

## Joining tables

You can combine data from multiple tables by joining them based on common columns. Here's an example:

```python
# Query to join weather to call records by date columns
query = """
SELECT *
  FROM hpd311calls
  JOIN weather
  ON hpd311calls.created_date = weather.date;
"""

# Create data frame of joined tables
calls_with_weather = pd.read_sql(query, engine)

# View the data frame to make sure all columns were joined
print(calls_with_weather.head())
```

## Joining and filtering

By combining joins with filtering conditions, you can retrieve specific records from joined tables. Here's an example:

```python
##
# Query to get hpd311calls and precipitation values
query = """
SELECT hpd311calls.*, weather.prcp
  FROM hpd311calls
  JOIN weather
  ON hpd311calls.created_date = weather.date;"""

# Load query results into the leak_calls data frame
leak_calls = pd.read_sql(query, engine)

# View the data frame
print(leak_calls.head())

##
# Query to get water leak calls and daily precipitation
query = """
SELECT hpd311calls.*, weather.prcp
  FROM hpd311calls
  JOIN weather
    ON hpd311calls.created_date = weather.date
  WHERE hpd311calls.complaint_type = 'WATER LEAK';"""

# Load query results into the leak_calls data frame
leak_calls = pd.read_sql(query, engine)

# View the data frame
print(leak_calls.head())
```

## Joining, filtering, and aggregating

You can combine joins, filters, and aggregations to perform complex analyses. Here's an example:

```python
# Modify query to join tmax and tmin from weather by date
query = """
SELECT hpd311calls.created_date,
	   COUNT(*),
       weather.tmax,
       weather.tmin
  FROM hpd311calls
       JOIN weather
       ON hpd311calls.created_date = weather.date
 WHERE hpd311calls.complaint_type = 'HEAT/HOT WATER'
 GROUP BY hpd311calls.created_date;
 """

# Query database and save results as df
df = pd.read_sql(query, engine)

# View first 5 records
print(df.head())
```

# 4. Importing JSON Data and Working with APIs

Here are the advanced techniques for working with JSON data and APIs in Python:

## Load JSON data

To load JSON data into a pandas DataFrame, you can use the read_json() function. Here's an example:

```python
# Load pandas as pd
import pandas as pd

# Load the daily report to a data frame
pop_in_shelters = pd.read_json('dhs_daily_report.json')

# View summary stats about pop_in_shelters
print(pop_in_shelters.describe())
```

## Work with JSON orientations

When working with JSON data, you may need to specify the orientation of the JSON. Here's an example:

```python
try:
    # Load the JSON with orient specified
    df = pd.read_json("dhs_report_reformatted.json",
                      orient="split")

    # Plot total population in shelters over time
    df["date_of_census"] = pd.to_datetime(df["date_of_census"])
    df.plot(x="date_of_census",
            y="total_individuals_in_shelter")
    plt.show()

except ValueError:
    print("pandas could not parse the JSON.")
```

## Get data from an API

To retrieve data from an API, you can use the requests library to make HTTP requests. Here's an example:

```python
api_url = "https://api.yelp.com/v3/businesses/search"

# Get data about NYC cafes from the Yelp API
response = requests.get(api_url,
                headers=headers,
                params=params)

# Extract JSON data from the response
data = response.json()

# Load data to a data frame
cafes = pd.DataFrame(data["businesses"])

# View the data's dtypes
print(cafes.dtypes)
```

## Set API parameters

When working with APIs, you can set parameters to specify the desired data. Here's an example:

```python
# Create dictionary to query API for cafes in NYC
parameters = {"term": "cafe",
          	  "location": "NYC"}

# Query the Yelp API with headers and params set
response = requests.get(api_url,
                        headers=headers,
                        params=parameters)

# Extract JSON data from response
data = response.json()

# Load "businesses" values to a data frame and print head
cafes = pd.DataFrame(data["businesses"])
print(cafes.head())
```

## Set request headers

APIs often require authorization and API keys. Here's an example of setting request headers:

```python
# Create dictionary that passes Authorization and key string
headers = {"Authorization": "Bearer {}".format(api_key)}

# Query the Yelp API with headers and params set
response = requests.get(
    api_url,
    headers=headers,
    params=params)

# Extract JSON data from response
data = response.json()

# Load "businesses" values to a data frame and print names
cafes = pd.DataFrame(data["businesses"])
print(cafes.name)
```

## Flatten nested JSONs

When working with nested JSON data, you can use json_normalize() to flatten it into a DataFrame. Here's an example:

```python
# Load json_normalize()
from pandas.io.json import json_normalize

# Isolate the JSON data from the API response
data = response.json()

# Flatten business data into a data frame, replace separator
cafes = json_normalize(data["businesses"],
             sep="_")

# View data
print(cafes.head())
```

## Handle deeply nested data

If your JSON data has deeply nested fields, you can specify the nested paths using record_path and meta parameters in json_normalize(). Here's an example:

```python
# Load other business attributes and set meta prefix
flat_cafes = json_normalize(data["businesses"],
                            sep="_",
                    		record_path="categories",
                    		meta=["name",
                                  "alias",
                                  "rating",
                          		  ["coordinates", "latitude"],
                          		  ["coordinates", "longitude"]],
                    		meta_prefix="biz_")

# View the data
print(flat_cafes.head())
```

## Append data frames

To append data frames vertically, you can use the append() function. Here's an example:

```python
# Add an offset parameter to get cafes 51-100
params = {"term": "cafe",
          "location": "NYC",
          "sort_by": "rating",
          "limit": 50,
          "offset": 50}

result = requests.get(api_url, headers=headers, params=params)
next_50_cafes = json_normalize(result.json()["businesses"])

# Append the results, setting ignore_index to renumber rows
cafes = top_50_cafes.append(next_50_cafes, ignore_index=True)

# Print shape of cafes
print(cafes.shape)
```

## Merge data frames

To merge data frames based on common columns, you can use the merge() function. Here's an example:

```python
# Merge crosswalk into cafes on their zip code fields
cafes_with_pumas = cafes.merge(crosswalk,
                   			   left_on="location_zip_code",
                               right_on="zipcode")

# Merge pop_data into cafes_with_pumas on puma field
cafes_with_pop = cafes_with_pumas.merge(pop_data, on="puma")

# View the data
print(cafes_with_pop.head())
```

These techniques will help you load and manipulate JSON data and interact with APIs effectively in Python.

## Conclusion

To wrap it up, pandas is a true ally for data engineers seeking streamlined data ingestion. Whether you're dealing with flat files or Excel spreadsheets, pandas provides a range of powerful tools to import data effortlessly. From handling different file formats to managing data types and handling bad data, pandas has got you covered. So why struggle with data ingestion when you can embrace pandas and enjoy a seamless and efficient data engineering journey? Get ready to level up your data game with pandas!

That’s it for today, see you soon. :)
