---
title: "Kindle to Notion"
description: "A way to seamlessly transfer your Kindle highlights to Notion Database!"
date: 2021-12-12
draft: false
tags: ["TypeScript", "Notion", "REST API", "Integration"]
showToc: false

# weight: 1
cover:
    image: "projects/kindle-to-notion/cover.png"
--- 
## 🔗 [GitHub](https://github.com/arkalim/kindle-to-notion)

## Description
An app built to sync book highlights taken on **Kindle** E-Reader to **Notion**, my productivity management app of choice. The highlights are exported to a text file by Kindle, which is parsed by the app using **RegEx** to be sent to Notion. The app is written in **TypeScript** and involves interfacing with **Notion API** to perform **CRUD** operations on Notion Database. The app also features caching to prevent resyncing of old highlights.