---
title: "Kindle to Notion"
description: "A way to seamlessly transfer your Kindle highlights to Notion Database!"
dateString: Dec 2021
draft: false
tags: ["TypeScript", "NodeJS", "Docker", "GitHub Actions"]
showToc: false
weight: 202
cover:
    image: "projects/kindle-to-notion/cover.jpg"
--- 
### 🔗 [GitHub](https://github.com/arkalim/kindle-to-notion)

## Description
I like reading personal improvement and mindset change type books on **Kindle** e-reader. Some of these books are downloaded straight from the internet and not from the Kindle store. I take highlights during my reading which I wanted to sync to my Notion workspace. There was no existing app that could do this job, so I developed my own. 

Kindle exports the highlights as a file named `MyClippings.txt`. The **NodeJS** application reads the `MyClipping.txt` file exported by Kindle, parses it using Regex, extracts all the highlights, book names, highlight time etc and creates a JSON. It then uses **Notion API** to sync these highlights to a database in my Notion workspace. The app maintains a cache (JSON) containing the number of highlights synced for each book. This allows the highlights to be synced incrementally, preventing re-syncing of old highlights. 

After the app was received well by the open-source community and other developers contributed to improve the app, I dockerized it to make shipping the app easier. Now, the users don’t have to install any dependency. They can just use the `docker run` command with the path to their clippings file along with their Notion API key and database ID. This would sync their highlights to their Notion database.

As a part of automation, I implemented auto build and deployment of containers on push to the master branch using **GitHub Actions**. If a developer raises a pull request and I merge it to the master branch, the GitHub workflow automatically builds the app and deploys it to GitHub packages repository.