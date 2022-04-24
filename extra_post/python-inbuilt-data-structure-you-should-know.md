---
title: "Python: Inbuilt Data Structure You Should Know About."
excerpt: "Python List took 24 min, whereas LinkedList took only 0.42 seconds for the same operation, here's why..."
coverImage: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
date: "2022-04-12T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Contents

1. Dictionaries
2. Array
3. Records, Structs
4. Sets and Multisets
5. Stacks
6. Queues
7. Priority Queues
8. Conclusion

## Dictionaries

Dictionaries allow you to quickly find the information associated with a given key.

```python
squares = {x: x*x for x in range(6)}
```

Dictionaries keys should be hashable type. Immutable types like strings and numbers are hashable and work well as dictionary keys. Tuples can also be used as dictionary keys.

Python dictionaries are highly efficient, well-tested and finely tuned hash table implementation. But besides plain dict objects, Python standard library also provides specialized dictionary implementation.

Let's take look at some of them.

### collections.OrderedDict

`collections.OrderedDict` remembers the insertion order of keys added to it.

This needs to be imported from `collection` module in the standard library.

```python
import collections

d = collections.OrderedDict(one=1, two=2, three=3)
# OrderedDict([('one', 1), ('two', 2), ('three', 3)])

d["four"] = 4
# OrderedDict([('one', 1), ('two', 2), ('three', 3), ('four', 4)])

print(d.keys())
# odict_keys(['one', 'two', 'three', 'four'])
```

In Python 3.8, dict and OrderedDict objects aren’t exactly the same. OrderedDict instances have a `.move_to_end()` method that is unavailable on plain dict instance

### collections.defaultdict

Return Default Values for Missing Keys.

The defaultdict class is another dictionary subclass that accepts a callable in its constructor whose return value will be used if a requested key cannot be found.

```python
from collections import defaultdict

dd = defaultdict(list)
# Accessing a missing key creates it and initializes it using the default factory,
# i.e. list() in this example:

dd["chelsea"].append("Kai Havertz")
dd["chelsea"].append("Mason Mount")
dd["chelsea"].append("Mateo Kovacic")

print(dd["chelsea"])
# ['Kai Havertz', 'Mason Mount', 'Mateo Kovacic']
```

### collections.ChainMap

Search Multiple Dictionaries as a Single Mapping

The collections.ChainMap data structure groups multiple dictionaries into a single mapping. Lookups search the underlying mappings one by one until a key is found. Insertions, updates, and deletions only affect the first mapping added to the chain:

```python
from collections import ChainMap

dict_1 = {"Kai": "Havertz", "Mason":"Mount", "Diego": "Jota" }
dict_2 = {"Thiago": "Alcantara", "Kevin":"De Bruyne", "Phill": "Phoden" }
dict_3 = {"Luka": "Modric", "Toni": "Kroos", "Karim": "Benzema"}

chainmap = ChainMap(dict_1, dict_2, dict_3)
print(chainmap)
# ChainMap({'Kai': 'Havertz', 'Mason': 'Mount', 'Diego': 'Jota'}, {'Thiago': 'Alcantara', 'Kevin': 'De Bruyne', 'Phill': 'Phoden'}, {'Luka': 'Modric', 'Toni': 'Kroos', 'Karim': 'Benzema'})

player = chainmap.get("Thiago") # Alcantara
player = chainmap.get("Luka") # Modric
player = chainmap.get("Kai") # Havertz
```

when adding a item in `chainmap` the items gets added to the first mapping, i.e `dict_1`

```python
chainmap['Marco'] = 'Verratti'

print("dict_1", dict_1,)
# dict_1 {'Kai': 'Havertz', 'Mason': 'Mount', 'Diego': 'Jota', 'Marco': 'Verratti'}
```

As you can see, adding a new key to `chainmap` adds the value to `dict_1` as it was the first mapping.

You cannot delete a key from the `chainmap` if it's not in `dict_1`. Doing this will result in KeyError.

```python
del chainmap["Luka"]
# KeyError: "Key not found in the first mapping: 'Luka'"
```

### types.MappingProxyType

A Wrapper for Making Read-Only Dictionaries.

MappingProxyType is a wrapper around a standard dictionary that provides a read-only view into the wrapped dictionary’s data.

```python
from types import MappingProxyType

dict_1 = {"Kai": "Havertz", "Mason":"Mount", "Diego": "Jota" }
read_only = MappingProxyType(dict_1)
print('read_only: ', read_only)
# read_only:  {'Kai': 'Havertz', 'Mason': 'Mount', 'Diego': 'Jota'}

print(read_only["Kai"]) #Havertz

read_only["Kai"] = "Modric"
# TypeError: 'mappingproxy' object does not support item assignment

dict_1["Kai"] = "Modric"
print('read_only: ', read_only)
# read_only:  {'Kai': 'Modric', 'Mason': 'Mount', 'Diego': 'Jota'}
```

Updates to the original are reflected in the proxy:

### Dictionaries Summary

Built-in dict data type is the most versatile and optimized hash table implementation. I would recommend that you use one of the other data types only if you have special requirements that go beyond what’s provided by dict.

## What happens inside Python List?

With list, each time we delete an email address, we need another O(N) steps to shift the remaining data to the left to close the gap. All this shifting will happen before we can even inspect the next email address.

Let's say that 1 in 10 email address are invalid. If we had a list of 1,000 email addresses, we’d have about 100 invalid ones. Our algorithm, then, would take 1,000 steps to read all 1,000 email addresses. On top of that, though, it might take up to an additional 100,000 steps for deletion, as for each of the 100 deleted addresses, we might shift up to 1,000 other elements.

## LinkedList to the rescue.

With a linked list, however, as we iterate through the list, each deletion takes just one step, as we can simply change a node’s link to point to the appropriate node and move on. For our 1000 emails, then, our algorithm would take just 1,100 steps, as there are 1,000 reading steps, and 100 deletion steps.

## Hands-on

Let's see some code and do a quick testing to see if what we discussed hold true. And if yes, then by what difference?

## Setting up a huge list

Instead of email validator, we're going to generate random names. We will iterate through the generated names list and remove the name which starts with "Adam".

Create `first_last_name.json` file and the contents.

```json
[
  { "first_name": "Sibel", "last_name": "McGrory" },
  { "first_name": "Reeba", "last_name": "Consterdine" },
  { "first_name": "Ford", "last_name": "Rushmer" },
  { "first_name": "Hildy", "last_name": "Pilsworth" },
  { "first_name": "Julissa", "last_name": "Jorn" },
  { "first_name": "Jason", "last_name": "Paish" },
  { "first_name": "Rorie", "last_name": "Tarbox" },
  { "first_name": "Goldie", "last_name": "Whitters" },
  { "first_name": "Sandy", "last_name": "Kennion" },
  { "first_name": "Sallyanne", "last_name": "Full" },
  { "first_name": "Haskell", "last_name": "Negro" },
  { "first_name": "Sharona", "last_name": "Eberst" },
  { "first_name": "Hayley", "last_name": "Caron" },
  { "first_name": "Gladi", "last_name": "Bullimore" },
  { "first_name": "Ernestus", "last_name": "Dallison" },
  { "first_name": "Nolana", "last_name": "Diplock" },
  { "first_name": "Heida", "last_name": "Suggey" },
  { "first_name": "Darin", "last_name": "Ouchterlony" },
  { "first_name": "Jania", "last_name": "Knappitt" },
  { "first_name": "Tomlin", "last_name": "Bispham" },
  { "first_name": "Chrissy", "last_name": "Everil" },
  { "first_name": "Ozzy", "last_name": "Carolan" },
  { "first_name": "Grantham", "last_name": "Hawyes" },
  { "first_name": "Filippo", "last_name": "Robertis" },
  { "first_name": "Hewe", "last_name": "Butson" },
  { "first_name": "Alden", "last_name": "Gager" },
  { "first_name": "Farlee", "last_name": "Siemianowicz" },
  { "first_name": "Gigi", "last_name": "McGeachy" },
  { "first_name": "Lynn", "last_name": "Crone" },
  { "first_name": "Tobey", "last_name": "Alflatt" },
  { "first_name": "Jerry", "last_name": "Sprankling" },
  { "first_name": "Major", "last_name": "Skeath" },
  { "first_name": "Clint", "last_name": "Hender" },
  { "first_name": "Fleurette", "last_name": "Halpeine" },
  { "first_name": "Rayshell", "last_name": "Pieter" },
  { "first_name": "Gaylord", "last_name": "Clendennen" },
  { "first_name": "Ronalda", "last_name": "Peoples" },
  { "first_name": "Ollie", "last_name": "Trainer" },
  { "first_name": "Opalina", "last_name": "Bootes" },
  { "first_name": "Evelyn", "last_name": "Cowlard" },
  { "first_name": "Nada", "last_name": "Wimpeney" },
  { "first_name": "Maisey", "last_name": "Brik" },
  { "first_name": "Gavra", "last_name": "Pennuzzi" },
  { "first_name": "Risa", "last_name": "Petrescu" },
  { "first_name": "Norton", "last_name": "Ortiga" },
  { "first_name": "Maryann", "last_name": "Hanscom" },
  { "first_name": "Kirsteni", "last_name": "Andreou" },
  { "first_name": "Hannie", "last_name": "Hurren" },
  { "first_name": "Tilda", "last_name": "Lumbers" },
  { "first_name": "Carlyn", "last_name": "Wilbud" }
]
```

### Generate Random Names

```python
from time import perf_counter
import random
import json

def get_dummy_data():
    with open("first_last_name.json", "r") as f:
        return json.load(f)


def generate_last_name():
    return random.choice(last_names)

data = get_dummy_data()
first_names = [x['first_name'] for x in data]
last_names = [x['last_name'] for x in data]


def generate_name():
    return "".join(random.choice(first_names)+" "+random.choice(last_names))
```

Once every 10 iteration we will explicitly insert a name starting with `Adam`

```python
k = 5
generated_name = []
total_generated_name = 1000000
for i in range(total_generated_name):
    if i+1 == k:
        generated_name.append("Adam " + generate_last_name())
        k += 10
    generated_name.append(generate_name())

print('generated_name: ', len(generated_name))
```

Total number of items in the list.

```shell
generated_name:  1100000
```

### Implementing LinkedList

Node class

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

LinkedList

```python
class LinkedList:
    def __init__(self, nodes=None):
        self.head = None
        if nodes:
            node = Node(nodes[0])
            self.head = node
            for elem in nodes[1:]:
                new_node = Node(elem)
                node.next = new_node
                node = new_node

    def delete_node_starting_with_adam(self):
        curr = self.head
        prev = None
        while curr:
            if curr.data.startswith("Adam"):
                prev.next = curr.next
            else:
                prev = curr
            curr = curr.next

    def __iter__(self):
        current = self.head
        while current:
            yield current.data
            current = current.next
```

## Testing with Simple Python List

```python
start_time = perf_counter()
for name in generated_name:
    if name.startswith("Adam"):
        generated_name.remove(name)
stop_time = perf_counter()
print("Elapsed time  during the whole program in seconds:", stop_time-start_time)
```

### Total time taken by Python List

```shell
Elapsed time  during the whole program in seconds: 1414.1675999180006
```

That is close to 24 min.

## Testing with LinkedList

```python
linked_list = LinkedList(generated_name)
t1_start = perf_counter()
linked_list.delete_node_starting_with_adam()
t1_stop = perf_counter()
print("Elapsed time during the whole program in seconds:", t1_stop-t1_start)
```

### Time take by LinkedList

```shell
Elapsed time during the whole program in seconds: 0.1479311709990725
```

This is significantly less than 24 min took by the List.

## Validate if all the Adam has been removed in Linkedlist.

```python
total = 0
for name in linked_list:
    if name.startswith("Adam"):
        print("Adam Exists", name)
    total += 1

print("Total iterations ", total)
print("total_generated_name", total_generated_name)
print(total_generated_name == total)
```

Running the code resulted

```terminal
generated_name:  1100000
Elapsed time during the whole program in seconds: 0.42018345699761994
Total items  1000000
total_generated_name 1000000
True
```

Also you can also print all the names in the linkedlist and check if
all names starting with `Adam` has been removed

```python
for name in linked_list:
    print("Wrong logic", name)
```

## Conclusion

Linked lists are an amazing data structure for moving through an entire list while making insertions or deletions, as we never have to worry about shifting other data as we make an insertion or deletion.

Doing the operation with Python List took 24 min, whereas LinkedList took only 0.42 seconds.

That’s it for today, see you soon. :)
