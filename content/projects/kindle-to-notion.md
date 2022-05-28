---
title: "Kindle to Notion"
description: "A way to seamlessly transfer your Kindle highlights to Notion Database!"
dateString: December 2021
draft: false
tags: ["TypeScript", "Notion", "REST API", "Integration"]
showToc: false
weight: 201
cover:
    image: "projects/kindle-to-notion/cover.jpg"
--- 
### 🔗 [GitHub](https://github.com/arkalim/kindle-to-notion)

## Description
An app built to sync book highlights taken on **Kindle** E-Reader to **Notion**, my productivity management app of choice. The highlights are exported to a text file by Kindle, which is parsed by the app using **RegEx** to be sent to Notion. The app is written in **TypeScript** and involves interfacing with **Notion API** to perform **CRUD** operations on Notion Database. The app also features caching to prevent resyncing of old highlights.