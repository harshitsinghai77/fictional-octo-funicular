---
title: "Loop - Content Creators 3.0"
excerpt: "A platform that helps you support your favourite creators without draining your pockets. Loop is a new platform for content creators that aims to revolutionize the way that creators produce, distribute, and monetize their content. In this article, we will explore some of the key features and benefits of Loop, and how it is transforming the world of content creation."
coverImage: "https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
date: "2021-11-25T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Loop is a new platform for content creators that aims to revolutionize the way that creators produce, distribute, and monetize their content. In this article, we will explore some of the key features and benefits of Loop, and how it is transforming the world of content creation.

One of the key features of Loop is its decentralized and blockchain-based architecture, which allows creators to have full control and ownership over their content. Loop uses blockchain technology and smart contracts to enable creators to publish, distribute, and monetize their content in a transparent and secure manner. This allows creators to retain the rights and ownership of their content, and to receive fair and transparent compensation for their work.

Another advantage of Loop is its focus on building a community of creators and supporters.

We're all familiar with how we support creators in the Web2 world. We have been picking our brains to figure out how we would make this a better experience on Web3. Loop is a content-creator-first platform built to address the needs of Creator 3.0.

Imagine if you could support your favorite creators without actually spending anything!

Behind the scenes, we're using the Aave protocol to stake user funds and generate interest. The users can get their funds back anytime and the creators can withdraw the interest generated on the pool.

With Loop, creators can also do LIVE stream and much more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rM7JOhKNZjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How does it work?

Our aim is to build a content-creator-first platform. Using Loop, Creators can not only own their content but also earn what they deserve without taking a cut or paying a middleman.

First, the content creators are required to register, by filling out a form asking for basic details like social media account handles, profile pictures, and other personal information.

Once they fill the form, they will be asked to connect their wallet, all the creator information is stored in IPFS including their profile picture. The cryptographic hash returned from IPFS will be stored in the smart contract; this hash is later used to retrieve creator information from IPFS.

## Features

1. Don't spend a dime - You get your entire deposited amount back anytime, creators get to keep interests
2. Fast and easy - Pay with your favourite wallet, quick and simple
3. Secure - Inherits the security of your favourite blockchain

## Smart Contract

The project mainly uses two smart contracts, Registration, and Creator. The role of the Registration contract is to onboard creators and save the creator IPFS hash. It also provides getter functions to read creator data stored on-chain, including the IPFS hash, creator's address, and creator contract address. A new creator contract is created whenever a creator is onboarded.

Besides that, it also handles deposits and withdrawals for both fans and creators. Other getter functions include the amount staked, the number of supporters, and the amount staked by each fan.

## Aave

We're using AAVE protocol's lending pool to stake, generate interests and retrieve the funds. The aTokens minted are handled by the creator contract.

## Stream Exclusive Content

Using Livepeer's open video infrastructure, content creators can also stream exclusive content for fundraising for social causes or to engage with their communities.

## Tech

Loop Dapp is built on top of React.js for single page application, tailwind CSS for stylig, Web3 modal to connect with different wallets like MetaMask, Torus, WalletConnect and Fortmatic, and ether.js to interact with the smart contract, video.js and HLS (HTTP Live Streaming) for live streams. Our Smart Contract is written in Solidity, and the app is deployed on Vercel.

We're using Livepeer for streaming infrastructure, IPFS for information storage and retrieval.

## Demo

[https://loop-web3.netlify.app/](https://loop-web3.netlify.app/)

## Showcase

[https://showcase.ethglobal.com/web3jam/loop](https://showcase.ethglobal.com/web3jam/loop)

## Github

[https://github.com/harshitsinghai77/web3-loop](https://github.com/harshitsinghai77/web3-loop)

## Conclusion

That’s it for today, see you soon. :)
