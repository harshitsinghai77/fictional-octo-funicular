---
title: "Introduction to Agile for Software Engineers."
excerpt: "Have you ever wondered how the agile team organizes their software development process? Having been working in a young startup as a software engineer intern I learned a thing or two about agile."
coverImage: "https://miro.medium.com/max/973/1*MjyqGl4vnururnqcyldpYQ.jpeg"
date: "2019-08-17T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Have you ever wondered how the agile team organizes their software development process? Having been working in a young startup as a software engineer intern I learned a thing or two about agile. This article gives a generalized overview of what exactly agile is how to introduce agile in your next project or startup.

Basically, the gist of agile is that the stakeholder requirements are broken down into small chunks, ranked, worked on in priority order over short iterations typically from one to four weeks, reviewed for approval and deployed in production. This process continues until the priority list is finished. The finished prioritized list is called a release.

In agile, teams are expected to re-prioritize, add, and subtract their prioritized list throughout the process so as to deliver the most valuable and the best solution possible.

## Agile Planning

Agile planning involves scheduling the work to be done during an iteration. Assigning individual work team members. Automated planning tools are available on the internet to facilitate the planning process. A team leader can also opt for old-fashioned ways like whiteboards, index cards, or sticky notes to plan the iteration.

Agile planning often has 3 levels:

### Release planning

Contains a release schedule for a specific set of features. The release plan is created by the product owner at the start of each release.

### Iteration planning

Team members gather at the beginning of the iteration to discuss the work to be done during that iteration.

### Daily planning

Developers begin each day with 5 to 15 minutes long standup meetings to plan the day.

During the daily standup meeting, the development team generally follow a template consisting of three statements:

1. ✓ Yesterday, I completed [state items completed].
2. ✓ Today, I’m going to take on [state task].
3. ✓ My impediments are [state impediments, if any].

### User Stories

Agile replaces more traditional approach of product managers and business analysts writing lengthy requirements or specifications with the lightweight approach of writing down brief descriptions of the pieces and parts that are needed. This brief description is captured in the form of a user story.
A user story is a simple description of a product requirement in terms of what that requirement must accomplish for whom. The basic template for a user story is

1. ✓ Title: <a name of the user story>
2. ✓ As a <user>
3. ✓ I want to <take this action>
4. ✓ So that <I get this benifit>

A user story can be created by anyone on the development or the project team.

Epics are user stories that are too large to be completed in a single iteration or sprint. They are basically a higher-level story that’s fulfilled by a group of related user stories.

A user story is often managed by the product owner. User stories are more widely used in agile because of their ability to include a lot of useful information in a simple, compact format. They are very effective at conveying exactly what a requirement needs to do.

## Work Estimation

In agile, developers estimate the work in something called points. Points are always assigned a whole number and represent relatives sizes and complexity. A small task is assigned 1 point, a more intermediate difficult task is assigned 2 points, a complex task is assigned 3 points and so on.

It is important not to confuse points with hours. Efforts and hours are kept separate from points.

## Tracking Velocity

The total number of completed story points is the team’s velocity, or work output, for that iteration. After the completion of an iteration, the agile team looks at the requirements it has finished and adds up the number of story points associated with those requirements.

## Burndown Reports

Burndown reports are used to track the number of points completed for monitoring single iterations, releases, and the entire project backlog.

## Test-Driven Development

When it comes to testing, the agile teams most commonly use two common practices

1. Test-Driven Development
2. Automated unit tests

Test-Driven Development means that before the developer writes a piece of code, she first writes a small test that validates the code she’s about to write. She runs the test to make sure it fails and then writes the code that makes the test pass. This might feel odd, but it is found that this approach is much more efficient than writing a lot of code, running it, and going back later to figure out everywhere it’s broken. Putting the developer in a testing mindset while writing code leads to a much more high-quality code.

Agile teams write a lot of unit tests, automate them, and run them frequently against the code they write as individuals and against their combined code that makes up the entire application.

## Continuous Integration and Deployment

Continuous integration (CI) is the practice of regularly integrating and testing your solution to incorporate changes made to its definition.

Continuous deployment (CD) enhances CI by automatically deploying successful builds.

## Iteration Review

The iteration review, or sprint review in Scrum, is a meeting to review and demonstrate the user stories that the development team completed during the iteration. During the iteration review, stakeholders get a chance to see progress on the product and provide feedback.

## Feedback in the Iteration Review

The product owner or team lead can take notes on behalf of the development team, as team members often are engaged in the presentation and resulting conversation. New user stories may come out of the iteration review. The new user stories can be new features altogether or change to the existing code.

## Improving at the Iteration Retrospective

The iteration retrospective is a meeting where the team lead, the product owner, and the development team discuss how the iteration went and what they can do to improve the next iteration.

That’s it for today. See you soon.
