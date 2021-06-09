---
title: "Why Should I Care about Software Architecture?"
excerpt: "Evolution is about the process of having a system that is fit for purpose and can survive the ever-changing environment in which it operates. The same goes for software development as more people are realizing the central role of software systems in our twenty-first-century human world."
coverImage: "https://images.unsplash.com/photo-1618233366729-733c3b0d54af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
date: "2019-08-16T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Evolution is about the process of having a system that is fit for purpose and can survive the ever-changing environment in which it operates. The same goes for software development as more people are realizing the central role of software systems in our twenty-first-century human world.

An essential skill for any software leader is knowing how best to respond to change while keeping on your feet.

Understanding the business or domain requirements for a proposed solution is an important step for a software architect. The craft of software architecture manifests in the ability of architects to analyze business and domain requirements along with other important factors to come up with a solution that balances all concerns optimally.

## Long term Planning when Everything Changes All the Time?

Software development ecosystem consists of different tools, libraries, frameworks, and best practices to form an equilibrium. Software developers thrive to build things within the ecosystem. However, new frameworks and libraries come along constantly, upsetting the balance until a new equilibrium is formed which makes it hard for software architects to deal with the dynamic nature of the equilibrium.

As the software development universe evolves, enterprise architects can no longer rely on a static 5-year plan. One such example could be the rise of containers via tools like Docker leading to an unknowable industry shift.

Predicting the changes in the technical domain landscape, or which changes will persist is almost impossible. We know changes are inevitable, thus software architects should design the system making it sustainable to incorporate the changes. Learning to adapt to the ever-changing technology landscape is a must for any enterprise architects and developers.

In most cases, the primary focus of a software architect in on the technical, architecture. What they fail to realize is that the technical architecture is only one dimension of a software project. To create an evolving architecture they must consider all other parts of the system as well. Building an evolvable software system includes thinking beyond just the technical side. For example, if the project includes a relational database, the structure and relationship between database entities will evolve over time as well. Similarly, architects don’t want to build a system that evolves in a manner that exposes a security vulnerability.

Some common dimensions that affect the evolvability of modern software architectures:

## Technical

The implementation parts of the architecture: the frameworks, dependent libraries, and the implementation languages.

## Data

Database schemas, table layouts, optimization planning, etc. The database administrator generally handles this type of architecture.

## Security

Defines security policies, guidelines, and specifies tools to help uncover deficiencies.

## Operational/System

Concerns how the architecture maps to existing physical and/or virtual infrastructure: servers, machine clusters, switches, cloud resources, and so on.
Architects must assess how each important dimension react to change while thinking in terms of evolvability of different architectures.

## Conway’s Law

In April 1968, Melvin Conway submitted a paper called, “How Do Committees Invent?” to Harvard Business Review. In this paper, He introduced the notion that the social structures, particularly the communication paths between people, inevitably influence final product design.

`Organizations which design systems … are constrained to produce designs which are copies of the communication structures of these organizations.`
` — Melvin Conway`

According to Conway, when we break down a problem into smaller chunks to delegate, we introduce a coordination problem. Many organization follows a rigid hierarchial structure to solve this coordination problem often leading to inflexible solutions. Teams are divided based on their functional skills like Front-end developers, Back-end developers, Database developers.

Conway Law warns software architects to pay attention not only to the architecture design but also to the coordination of the work between teams.

In most of the case, instead of delivering an end-to-end feature value, teams often focus on delivering components that may or may not work well with each other.

These days companies are following what is called Inverse Conway Maneuver. For example, when building software architecture, companies typically include team members who cover every angle of the business and technical aspects of the software. Using the Inverse Conway Maneuver companies are building cross-functional teams consisting of service owner, a few developers, a business analyst, a database administrator (DBA), a quality assurance (QA) person, and an operations person.

That’s it for now. See you soon.
