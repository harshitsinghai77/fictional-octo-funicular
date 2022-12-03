---
title: "F.R.I.E.N.D.S — Data Analysis using Python"
excerpt: "F.R.I.E.N.D.S is a popular American television sitcom that aired from 1994 to 2004. In this article, we will explore how to perform data analysis on the F.R.I.E.N.D.S dataset using Python"
coverImage: "https://i.ibb.co/f2G7dRc/63113c9e71da.jpg"
date: "2021-03-05T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Providing an alternative look to the most looked sitcom.

So, I just finished watching Friends recently, again. FRIENDS is one of my favorite sitcoms and I’m sure I’m not alone in having rewatched the entire series more than once. I’ve always wondered if there was anything left to know about this group.

The first time I watched the show in 2016, I didn’t have any clue about data analysis or Python, let alone know how to use it. So, after watching it again during the coronavirus break, I thought, I have the data, I love the show, I love Python.. does that mean, it’s time for another quick data analysis side project?

## Collecting the data

I downloaded the data from here.

First, we need to write a little script in Python, to scrape all the nested links inside this page, go to each individual page, extract all the text from the HTML page, and then save the text as a .txt file inside the directory.

![friends-data-analysis-using-python](https://i.ibb.co/kHyNRr1/41b554dc2e30.png)

![friends-data-analysis-using-python](https://i.ibb.co/WBqvhDX/cdb25abb354f.png)

`get_episode_list()` method will make a get request to the page containing all the episodes dialogues. We will then find all the href tags inside the HTML using BeautifulSoup. We will iterate through all the episode links, get the text data, and then save it to the dataset/ directory.

After running the script you will get something like

![friends-data-analysis-using-python](https://i.ibb.co/28f9Vb1/26e8c6b8c2fa.png)

![friends-data-analysis-using-python](https://i.ibb.co/k1WQcJ5/4bea2dd81ebf.png)

## Creating Dataframe

The code below will iterate through all the files in our `datasets` folder to obtain the `filename`. This filename is then split using the `.` separator and those numbers are stored in variables to be appended to the master list. The `master_list` is created as eventually, we will want to store the results in a DataFrame.

![friends-data-analysis-using-python](https://i.ibb.co/HFvs5jV/3dbc67724e77.png)

Now we know how to move through our FRIENDS files, we need to see how to isolate the lines from each file. To do so I will be using regular expressions, the scripts are quite messy and all formatted differently depending on the transcriber. The pertinent pattern is `character_name: speech` however this can sometimes span multiple lines.

We aim to find this space as we can then split the whole file using these positions, giving us groups of character-speech pairs.

Now we implement the regular expression in python. In the below code we are also able to split the character name and the speech.

![friends-data-analysis-using-python](https://i.ibb.co/nCCS5Jr/cf1ffbdcf7cf.png)

Full code to iterate through all the .txt file and convert it to the Dataframe

![friends-data-analysis-using-python](https://i.ibb.co/dfD34kg/344dd72be2d6.png)

![friends-data-analysis-using-python](https://i.ibb.co/gWy9yms/50a87107d016.png)

## Just the 6 friends

Now we need to address the issues caused by our regular expression, as it caught the authors and transcribers. The format of these lines all ends in by. Therefore the regular expression takes the last word before the colon as the character name. This means we can drop all of these rows by removing the character by.

![friends-data-analysis-using-python](https://i.ibb.co/Bz7d0QM/3df28ebaae45.png)

Our first issue is that there are multiple names for each character, this can be seen by executing sorted(df['char'].unique()), this will return a list of all unique values in the column.

![friends-data-analysis-using-python](https://i.ibb.co/gyGMKcC/e5d613f11ce8.png)

To rectify this takes some manual work which involves looking at the multiple spellings of a certain name, case sensitive! To change the names we use the pandas `replace` method:

We will only by concentrating on the 6 main characters. We will remove all the rows where the line is being said by the character other than the main 6.

![friends-data-analysis-using-python](https://i.ibb.co/hgzWVdG/7f853331d42b.png)

## Understanding Sentiment

Sentiment analysis is on the table when dealing with strings. We will be using the TextBlob library to get the sentiments of the line.

![friends-data-analysis-using-python](https://i.ibb.co/xHYTXx5/e5e0fed42ac6.png)

We will be creating a new column called sentiment consisting of an integer between -1 to 1 where -1 means a negative sentiment, 0 means neutral and 1 means positive sentiment. The column can be created by looping through all the lines, and passing the line as an argument to the TextBlob library and then calling the sentiment method.

## Dumping Dataframe to SQLite

We can easily use Pandas to manipulate the Dataframe and analyze data, but sometimes altering the Dataframe might get messy, and too much code is written to perform a simple operation. SQL language may provide a more readable way to access this data.

You can skip this and use Dataframe too, but I will be using SQLite. We will be making a SQL database and dump the Dataframe into it.

Again it’s totally up to you. You can skip this step and do the operations using Pandas.

![friends-data-analysis-using-python](https://i.ibb.co/sKDvLLX/b822a606888e.png)

Before we start, you will have to import sqlite3 before running the above command.

We will be making a simple connection by calling sqlite3.connect(db_name) function. It will create file name `friends_script.db` inside your directory folder if it doesn’t exist it will automatically create it.

Then we will be calling the cursor method of the connection. The cursor method is nothing but a class instance using which you can invoke methods that execute SQLite statements, fetch data from the result sets of the queries.

```python
cur.execute('CREATE TABLE IF NOT EXISTS Friends(season number, episode number, char text, line text, sentiment integer)')
```

This will create a table called Friends inside the database having columns season, episode, char, line, and sentiment.

`Note: Your database name is friends_script.db and table name is Friends`

After executing the statement, we will be committing it using conn.commit()

```python
df.to_sql(‘Friends’, conn, if_exists=’replace’, index=False)
```

This will dump the df data to SQL inside the table ‘Friends’.

Now we have the scripts formatted in this way, we can utilize SQL to gain further insights into the show.

## The Most Popular Friend

This section looks at each character’s role in the show. The previous post walked through the process of putting the data into a SQL database. This was in order to make a query like “who had the most number of lines during the whole series” fairly simple

![friends-data-analysis-using-python](https://i.ibb.co/rcTMfYV/2d31166cdddc.png)

The Bar Chart is as follows

![friends-data-analysis-using-python](https://i.ibb.co/bssT6yH/8e4acc87d44a.png)

```sql
cur.execute(“SELECT char, COUNT(line) AS ‘spoken_lines’ FROM Friends GROUP BY char ORDER BY spoken_lines DESC”)
```

cur.fetchall() method fetches all (or all remaining) rows of a query result set and returns a list of tuples.

Rachel just edges the top spot with 9322 lines over the entire series Ross coming in a very close second (9114). This isn’t entirely a shock, as they were both the main plot throughout 10 seasons. Almost inseparable are Monica and Chandler, 8452, and 8384 respectively. Joey had 8224 lines whereas Phoebe had the least lines in the show with only 7429 lines.

## Number of lines per season

![friends-data-analysis-using-python](https://i.ibb.co/JxwpLc7/80e15f0b680c.png)

![friends-data-analysis-using-python](https://i.ibb.co/XtspF3Z/1742b3e82680.png)

![friends-data-analysis-using-python](https://i.ibb.co/hVq7jj1/fdaccd7abfb1.png)

A look at the number of lines breakdown throughout the series confirms this pattern, we can see Ross and Rachel dominating the lines until around Season 4. Phoebe never got more lines, staying rooted at around 800 lines per season.

## Most Spoken About

Being the one doing the most talking does not necessarily mean you’re the most popular, so now we will take a look at who’s talked about the most. This is a pretty difficult task to accurately capture all mentions of each character. A possible solution is a list of nicknames for each character (let me know if I have missed any out!). It’s pertinent to note, this is the method we will use to find any reference to each character throughout this post, using the nicknames detailed below.

![friends-data-analysis-using-python](https://i.ibb.co/GHqPpCy/30679be1ebd4.png)

In order to get the count, we first iterate through the characters, keeping a count of the mentions. Using a nested for-loop to get the nickname of each character, we use the pandas count() method to keep a tally of the number of mentions.

![friends-data-analysis-using-python](https://i.ibb.co/SQTRbGZ/7014116ba784.png)

![friends-data-analysis-using-python](https://i.ibb.co/VtZHVDc/1202082f078f.png)

It turns out that Joey is the most talked-about character in the show. Chandler, Rachel, and Monica are almost the same as Ross down with only 3000 mentions and Phoebe with the least.

## Largest Vocabulary

![friends-data-analysis-using-python](https://i.ibb.co/8sFcK0v/2235363d0760.png)

```python
monica_vocab = set()
chandler_vocab = set()
ross_vocab = set()
phoebe_vocab = set()
rachel_vocab = set()
joey_vocab = set()
for l in lines_per_season:
    char = l[0]
    l = alphanumonly(l[1]).strip()
    split_words = l.split(' ')
    for word in split_words:
        if char == 'Monica':
            monica_vocab.add(word)

        if char == 'Joey':
            joey_vocab.add(word)

        if char == 'Ross':
            ross_vocab.add(word)

        if char == 'Phoebe':
            phoebe_vocab.add(word)

        if char == 'Chandler':
            chandler_vocab.add(word)

        if char == 'Rachel':
            rachel_vocab.add(word)
char_vocal_length = ['Ross', 'Joey', 'Chandler', 'Rachel', 'Phoebe', 'Monica']
vocab_lengths = [len(ross_vocab), len(joey_vocab), len(chandler_vocab), len(rachel_vocab), len(phoebe_vocab), len(monica_vocab)]
plt.rcParams['figure.figsize'] = (10, 6)
fig, ax = plt.subplots()
plt.bar(
    x=char_vocal_length,
    height=vocab_lengths,
    color=COLORS
)
plt.title('Largest Vocabulary')
plt.ylabel('Number of unique words')
fig.tight_layout()
```

![friends-data-analysis-using-python](https://i.ibb.co/DLRSsLM/abf1e7dd9efd.png)

## Ross Sentiment throughout the 10 seasons

We will create a dictionary to get the total sentiment for each episode. This can be achieved by iterating through the sentiment for each line. If the season_episode exists in the dictionary then add or subtract the sentiment to get the total sentiment of the episode.

Total sentiment score per episode is calculated, as the scores range in-between -1 to 1 the total will give an indication of the majority of sentiment throughout a particular episode.

![friends-data-analysis-using-python](https://i.ibb.co/sV464f0/145947638fac.png)

Get all the sentiments by season by filtering the dictionary items and then plotting them.

![friends-data-analysis-using-python](https://i.ibb.co/fvmCyHQ/a05cc6cfb760.png)

![friends-data-analysis-using-python](https://i.ibb.co/V3x1F8H/9a47ab4381f1.png)

![friends-data-analysis-using-python](https://i.ibb.co/2v2gd5t/a12d2a796c95.png)

![friends-data-analysis-using-python](https://i.ibb.co/DGP3Md0/d8156a79f06d.png)

I hope you enjoyed this analysis of arguable the world’s most popular sitcom. Whilst I understand F.R.I.E.N.D.S may not be everyone’s cup of tea I do think this kind of analysis can be applied to almost any long-running series. Maybe you could try out something similar to your favorite show.

Thanks for reading 🙂

## Github

[https://github.com/harshitsinghai77/friends-sitcom-data-analysis](https://github.com/harshitsinghai77/friends-sitcom-data-analysis)
