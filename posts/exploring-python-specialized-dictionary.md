---
title: "Exploring Python's Specialized Dictionary"
excerpt: "Python's built-in dict is a master of storing data, but did you know it has specialized siblings? Explore OrderedDict, defaultdict, ChainMap, and MappingProxyType."
coverImage: "https://images.unsplash.com/photo-1500408698778-2afa347782f3?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
date: "2022-04-12T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Python's dictionaries are like trusty sidekicks, always ready to quickly find information when you need it. But what if you need more control over key order? Or a dictionary that gracefully handles missing keys? Python has specialized dictionaries, each to tackle specific challenge.

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

### Conclusion

Built-in dict data type is the most versatile and optimized hash table implementation. I would recommend that you use one of the other data types only if you have special requirements that go beyond what’s provided by dict.

That’s it for today, see you soon. :)
