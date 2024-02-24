---
title: "Unlocking Efficiency with LinkedLists in Python"
excerpt: "Removing items from a massive list? Deleting elements from large lists using Python's default lists can be surprisingly slow. We'll reveal a smoother path with LinkedLists."
coverImage: "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
date: "2023-04-12T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Imagine this: You're facing a massive list of items, and your mission is to remove certain ones based on specific conditions. Your first instinct might be to reach for Python's lists, iterate through the elements, and remove them as needed. But what if I told you there's a more efficient way?

Let's dive into a scenario to illustrate this. Picture a function that's tasked with cleaning up a list of email addresses by removing any with invalid formats. Whether you use a list or a linked list, both approaches require iterating through each address and performing the validation check. That's the common ground. But the difference emerges when it comes to deletion.

### Lists

Here's the catch with lists: each time you remove an invalid email, the remaining elements need to be shifted to fill the gap. This shifting process, often hidden behind the scenes, can significantly impact performance, especially for large lists.

Imagine a list of 1,000 email addresses with a 10% rate of invalid ones. That means about 100 deletions. While reading all addresses takes 1,000 steps, the deletion process can add up to 100,000 extra steps due to the shifting of elements!

### LinkedLists

This is where LinkedLists step in to save the day. In a LinkedList, each element (or "node") holds a reference to the next one, forming a chain-like structure. The secret sauce? When you delete a node, you simply update the link to point to the appropriate next node, without any shifting involved.

In our email example, using a LinkedList would mean a total of approximately 1,100 steps: 1,000 for reading and only 100 for deletion. That's a significant difference!

### Ready for Action

Let's get hands-on and explore code examples to witness this efficiency in action. We'll put both lists and LinkedLists to the test and measure their performance to see the real-world impact of choosing the right data structure for the job.

### Setting up a list

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

### Testing with Simple Python List

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

### Testing with LinkedList

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

### Validate if all the Adam has been removed in Linkedlist.

```python
for name in linked_list:
    if name.startswith("Adam"):
        print("Adam Exists", name)

```

## Conclusion

Linked lists are an amazing data structure for moving through an entire list while making insertions or deletions, as we never have to worry about shifting other data as we make an insertion or deletion.

The operation with Python List took 24 min, whereas LinkedList took only 0.42 seconds. That's percentage drop of approximately 99.99%.

That’s it for today, see you soon. :)
