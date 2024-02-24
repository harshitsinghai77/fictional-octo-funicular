---
title: "Create NFT in Solana without writing a single line of code in Rust."
excerpt: "A web app that lets users connect their wallet, click mint, and receive a random anime NFT from our collection in their wallet. Metaplex is the NFT standard on Solana and has created a set of standardized tools and libraries to create NFTs. Over $1 billion in sales have been done so far on NFTs that use the Metaplex standard."
coverImage: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
date: "2021-12-14T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

A web app that lets users connect their wallet, click mint, and receive a random anime NFT from our collection in their wallet. We will be using Metaplex for this [https://www.metaplex.com/](https://www.metaplex.com/).

## Introduction

Basically, Metaplex is the NFT standard on Solana and has created a set of standardized tools and libraries to create NFTs. Over $1 billion in sales have been done so far on NFTs that use the Metaplex standard.

With Metaplex we don't need to write our own contract. Metaplex has already deployed its own standard NFT contracts that any dev can interact with and build their own NFT collections on.

It's like a smart-contract-as-a-service.

## Parallel Transactions in Solana

Solana allows for parallel transactions. So, your code needs to account for cases like "if 5 people go to mint an NFT at the same time and there are only 2 left, who get's it?".

In Ethereum this is easy. It's all synchronous and atomic so we don't need to think about that. But, part of Solana's sell is that it can do parallel transactions which makes it faster. But, this makes the code more complex. So, tools like Metaplex are extremely useful. They handle the edge cases for us and give us a smart contract we can interact with.

## Demo

[https://web3-anime-drop.netlify.app/](https://web3-anime-drop.netlify.app/)

## Github

[https://github.com/harshitsinghai77/web3-solana-metaplex-anime-drop](https://github.com/harshitsinghai77/web3-solana-metaplex-anime-drop)

## Usage

```bash
$ git clone git@github.com:harshitsinghai77/web3-solana-metaplex-anime-drop.git
```

## Conclusion

With Metaplex minting NFT in Solana is super cool. That’s it for today, see you soon. :)
