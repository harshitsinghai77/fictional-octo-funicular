---
title: "Merge Data from different sources with Pandas"
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

## Your first inner join

```python
# Merge the taxi_owners and taxi_veh tables
taxi_own_veh = taxi_owners.merge(taxi_veh, on='vid')

# Print the column names of the taxi_own_veh
print(taxi_own_veh.columns)
```

## use suffixes

```python
# Merge the taxi_owners and taxi_veh tables setting a suffix
taxi_own_veh = taxi_owners.merge(taxi_veh, on='vid', suffixes=("_own", "_veh"))

# Print the column names of taxi_own_veh
print(taxi_own_veh.columns)
```

## Inner joins

All of the merges you have studied to this point are called inner joins. It is necessary to understand that inner joins only return the rows with matching values in both tables.

`Remember that .merge() only returns rows where the values match in both tables.`

## One-to-many merge

One-to-many relationship, a row in the left table may be repeated if it is related to multiple rows in the right table.

```python
# Merge the licenses and biz_owners table on account
licenses_owners = licenses.merge(biz_owners, on='account')

# Group the results by title then count the number of accounts
counted_df = licenses_owners.groupby('title').agg({'account':'count'})

# Sort the counted_df in desending order
sorted_df = counted_df.sort_values('account', ascending=False)

# Use .head() method to print the first few rows of sorted_df
print(sorted_df.head())
```

## Merging multiple DataFrames

Awesome work! You merged three DataFrames together, including merging two tables on multiple columns. Once the tables were merged, you filtered and selected just like any other DataFrame. Finally, you found out that the Wilson station had 140,005 riders during weekdays in July.

```python
# Merge the ridership, cal, and stations tables
# Merge the ridership, cal, and stations tables
ridership_cal_stations = ridership.merge(cal, on=['year','month','day']) \
							.merge(stations, on='station_id')

# Create a filter to filter ridership_cal_stations
filter_criteria = ((ridership_cal_stations['month'] == 7)
                   & (ridership_cal_stations['day_type'] == 'Weekday')
                   & (ridership_cal_stations['station_name'] == 'Wilson'))

# Use .loc and the filter to select for rides
print(ridership_cal_stations.loc[filter_criteria, 'rides'].sum())
```

More multiple table merging examples

```python
# Merge land_use and census and merge result with licenses including suffixes
land_cen_lic = land_use.merge(census, on='ward') \
                    .merge(licenses, on='ward', suffixes=('_cen','_lic'))

# Group by ward, pop_2010, and vacant, then count the # of accounts
pop_vac_lic = land_cen_lic.groupby(['ward','pop_2010','vacant'],
                                   as_index=False).agg({'account':'count'})

# Sort pop_vac_lic and print the results
sorted_pop_vac_lic = pop_vac_lic.sort_values(['vacant', 'account', 'pop_2010'],
                                             ascending=(False, True, True))

# Print the top few rows of sorted_pop_vac_lic
print(sorted_pop_vac_lic.head())
```

You merged multiple tables with varying relationships and added suffixes to make your column names clearer.

## Left Join

Setting how='left' with the .merge()method is a useful technique for enriching or enhancing a dataset with additional information from a different table.

You used a left join to find out which rows in the financials table were missing data. When performing a left join, the .merge() method returns a row full of null values for columns in the right table if the key column does not have a matching value in both tables.

If your goal is to enhance or enrich a dataset, then you do not want to lose any of your original data. A left join will do that by returning all of the rows of your left table, while using an inner join may result in lost data if it does not exist in both tables.

```python
# Merge the movies table with the financials table with a left join
movies_financials = movies.merge(financials, on='id', how='left')

# Count the number of rows in the budget column that are missing
number_of_missing_fin = movies_financials['budget'].isna().sum()

# Print the number of movies missing financials
print(number_of_missing_fin)
```

## Right Join

```python
# Merge action_movies to the scifi_movies with right join
action_scifi = action_movies.merge(scifi_movies, on='movie_id', how='right',
                                   suffixes=('_act','_sci'))

# From action_scifi, select only the rows where the genre_act column is null
scifi_only = action_scifi[action_scifi['genre_act'].isnull()]

# Merge the movies and scifi_only tables with an inner join
movies_and_scifi_only = movies.merge(scifi_only, left_on='id', right_on='movie_id')

# Print the first few rows and shape of movies_and_scifi_only
print(movies_and_scifi_only.head())
print(movies_and_scifi_only.shape)
```

```python
# Use right join to merge the movie_to_genres and pop_movies tables
genres_movies = movie_to_genres.merge(pop_movies, how='right',
                                      right_on='id',
                                      left_on='movie_id')

# Count the number of genres
genre_count = genres_movies.groupby('genre').agg({'id':'count'})

# Plot a bar chart of the genre_count
genre_count.plot(kind='bar')
plt.show()
```

## Outer Join

```python
# Merge iron_1_actors to iron_2_actors on id with outer join using suffixes
iron_1_and_2 = iron_1_actors.merge(iron_2_actors,
                                     how='outer',
                                     on='id',
                                     suffixes=('_1','_2'))

# Create an index that returns true if name_1 or name_2 are null
m = ((iron_1_and_2['name_1'].isna()) |
     (iron_1_and_2['name_2'].isna()))

# Print the first few rows of iron_1_and_2
print(iron_1_and_2[m].head())
```

## Conclusion

We saw how to do inner join, left join, right join and outter join using Pandas. Pandas makes it super easy to join data from multiple sources into one dataframe - ready for analysis. :)
