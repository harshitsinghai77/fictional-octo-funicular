---
title: "Python: Implement Autocomplete feature using bare Data Structure."
excerpt: "We will be implementing our own Autocomplete feature from scratch using just Python and some recursion magic."
coverImage: "https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
date: "2022-04-18T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Have you ever wondered how the text Autocomplete feature is written?. Let's take a look at how we can find all the string with just a prefix using a data structure know as `trie` without using any third library.

We will be implementing our own Autocomplete feature from scratch using just Python and some magic.

## Why Trie?

Let’s imagine, for a moment, that all the words in the English language are stored within an array. If the array were unsorted, we’d have to search every word in the array to find all words that start with “catn.” This is O(N), and a very slow operation considering that N is a pretty large number in this case, as it’s the number all of the words in the dictionary.

Things improve greatly if we store the words inside an ordered array. That is, if the array contained all the words in alphabetical order, we could use binary search to find a word in O(logN) time. And while O(log N) isn’t bad, we can do even better.

Tries can be used when dealing with text, as tries allow for important features such as autocomplete and autocorrect.

## Introduction to Tries

Whereas a binary tree doesn’t allow any node to have more than two child nodes, a trie node can have any number of child nodes.

Each trie node contains a hash table, where the keys are English characters and the values are other nodes of the trie. This will look something like this

```python
{"a" : {}, "b": {}, "c": {}}
```

Here, the root node contains a hash table with the keys "a", "b", and "c". The values are other trie nodes, which are the children of this node. These children also contain hash tables, which will in turn point to their children.

### Trie Node

```python
class TrieNode:
    def __init__(self):
        self.children = {}
```

As you can see, the TrieNode just contains a hash table. Again, in this hash table, the keys are individual character strings, and the values are instances of other TrieNodes.

### Trie Class

```python
class Trie:
    def __init__(self):
        self.root = TrieNode()
```

`self.root` variable points to the root node.

## How does it look like?

![How Trie Data Structure looks like](https://tessil.github.io/images/hat-trie/trie.png)

## The Need for the Asterisk

In the diagram above, can you see the splitted block at the end of each word? We will be using "\*" to denote the end of the string in the tree. While a string can have words like `bad` and `bake` on it.

## Trie Search

Like any other, search in Trie is used to determine whether a string is found in the trie or not.

```python
def search(self, search_value):
    current_node = self.root
    for char in search_value:
        if not current_node.children.get(char):
            return
        current_node = current_node.children[char]
    return current_node

```

The algorithm for Trie prefix search.

1. We declare a variable called currentNode. At the beginning of our algorithm, this points to the root node.
2. We iterate over each character of our search string.
3. As we point to each character of our search string, we look to see if the currentNode has a child with that character as a key.
4. If it does not, we return None, as it means our search string does not exist in the trie.
5. If the currentNode does have a child with the current character as the key, we update the currentNode to become that child. We then go back to Step 2, continuing to iterate over each character in our search string.

If we get to the end of our search string, it means we’ve found our search string.

## Trie Insertion

Here’s the algorithm :

1. We declare a variable called currentNode pointing to the root node.
2. We iterate over each character of our search string.
3. As we point to each character of our search string, we look to see if the currentNode has a child with that character as a key.
4. If it does, we update the currentNode to become that child node and we go back to Step 2, moving on to the next character of our search string.
5. If the currentNode does not have a child node that matches the current character, we create such a child node and update the currentNode to be this new node. We then go back to Step 2, moving on to the next character of our search string.
6. After we insert the final character of our new word, we add a "\*" child to the last node to indicate the word is complete.

At the end of each word we put "\*" denoting that we hit the end of a complete word.

```python
def insert(self, new_value):
    current_node = self.root
    for char in new_value:
        # If the current node has child key with current character:
        if current_node.children.get(char):
            # Follow the child node:
            current_node = current_node.children[char]
        else:
             ​# If the current character isn't found among​
    ​ 	      ​# the current node's children, we add​
​ 	          ​# the character as a new child node:
            new_node = TrieNode()
            current_node.children[char] = new_node

            ​# Follow this new node:
            current_node = new_node

     ​# After inserting the entire word into the trie,​ we add a * key at the end:
    current_node.children["*"] = None
```

## Collecting All the Words

The next method we’re going to add to our Trie class is a method that returns list of all the words in the trie. This method to accept any node of the trie as an argument so that it can list all the words that start from that node.

When we reach a "\*", the word is considered complete and we add it to the words array.

```python
def collect_all_words(self, node=None, word="", all_words=[]):
    ​ # This method accepts three arguments. The first is the​
​ 	  ​# node whose descendants we're collecting words from.​
​ 	  ​# The second argument, word, begins as an empty string,​
​ 	  ​# and we add characters to it as we move through the trie.​
​ 	  ​# The third argument, words, begins as an empty array,​
​ 	  ​# and by the end of the function will contain all the words​
​ 	  ​# from the trie.

    # The current node is the node passed in as the first parameter,​
​ 	 ​# or the root node if none is provided:
    current_node = node or self.root

    ​# We iterate through all the current node's children
    for key, child_node in current_node.children.items():
        ​# If the current key is *, it means we hit the end of a​
    ​ 	 ​# complete word, so we can add it to our words array:​
        if key == "*":
            all_words.append(word)
        else:
            ​# We recursively call this function on the child node.
            self.collect_all_words(child_node, word+key, all_words)
    return all_words
```

## AutoComplete

```python
def autocomplete(self, prefix):
    current_node = self.search(prefix)
    if not current_node:
        return
    return self.collect_all_words(current_node)
```

Yes, that’s it. By using our search method and collectAllWords method together, we can autocomplete any prefix.

## Conclusion

We talked about Trie data structure, how it is better than orderd arry and can be used to implement efficient autocomplete feature.

We discussed some code snippet to write `Trie Node` and `Trie Class`. Some basic operations like Search, Insertion, collecting all the words and finally we take a look at the Autocomplete feature.

That’s it for today, see you soon. :)
