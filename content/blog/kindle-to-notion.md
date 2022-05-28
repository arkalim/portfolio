---
title: "Kindle to Notion"
description: "A way to seamlessly transfer your Kindle highlights to Notion Database!"
dateString: Dec 2021
draft: false
tags: ["TypeScript", "Notion", "REST API", "Integration"]
weight: 101
cover:
    image: "/blog/kindle-to-notion/cover.jpg"
---

# ✏️ Intro
If you’re like me who loves reading books on Kindle, you might have wondered how you could extract your highlights in an organized way and save them as notes. At least I did. You see, I use Notion as my primary note-taking/productivity management app and I already have a database of all the books that I have read so far and also the ones that I am planning to read next.

![My Notion Books Database](/blog/kindle-to-notion/img1.jpg)

And since each of these book entries in the Notion database is a page in itself, I thought why not populate them with the highlights that I made in Kindle while reading them. The only problem was Kindle stores all of the highlights in a text file (My Clippings.txt) which as you can see contains a tonne of useless information like the book location, where the highlight was made, and when it was made.

![My Clippings.txt](/blog/kindle-to-notion/img2.jpg)

I needed to find a way to filter out the highlights, group them by the book title and send them to my Notion book database. Not only that, all of this should happen automatically with minimal human effort. So, over the past two weekends, I spent the majority of my time coding and I’m finally ready with an app that would allow readers to seamlessly transfer all of their highlights to Notion. Let’s take a look...

# 🤖 Node Environment
You need a stable version of Node JS, installed locally, to run this app. I have tested this on Node versions 16 and 14, and it has worked flawlessly on both of them. So, before proceeding to the next steps, make sure you have a stable version of Node installed. I’m not going to explain the environment setup in this article because the installation process might differ for different operating systems. You can easily learn that on Google.

# ⚙️ Setup
Follow the steps given below to set up the Kindle to Notion app on your local system.

- Copy my [Books Database Template](https://arkalim.notion.site/346be84507ff482b80fceb4024deadc2?v=e868075eaf5749bc941e617e651295fb) to your Notion dashboard. The app requires some fields (**Title**, **Author**, and **Book Name**) to be present in the database in order for the highlight sync to work properly. So, you can either create your own database having these fields or you can just copy mine using the template I provided above.

- Clone the [GitHub Repository](https://github.com/arkalim/kindle-to-notion) to your local system and install the dependencies.
```
git clone https://github.com/arkalim/kindle-to-notion.git
cd kindle-to-notion
npm install
```

- Rename these files or folders by removing .example extensions as shown below. The original files/folders in my local repo contained data that was either sensitive or specific to my highlights. So, I created empty aliases of them with .example extensions and committed them to GitHub.<br>
‣ `cache.example` ➡ `cache`<br>
‣ `data.example` ➡ `data`<br>
‣ `.env.example` ➡ `.env`<br>

- Get your Notion API key at the [Notion Integrations](https://www.notion.so/my-integrations) page and create a new internal integration. Integrations allow us to access a portion of our Notion workspace using a secret token called the **Notion API key (Internal Integration Token)**.

![My Notion Books Database](/blog/kindle-to-notion/img3.jpg)

- Go to your Notion dashboard. Navigate to the Books database. Click on Share in the top right-hand corner and invite the integration you just created. This will allow the integration to edit the **Books** database using the Notion API key that we got in the previous step.

![My Notion Books Database](/blog/kindle-to-notion/img4.jpg)

- Copy the link to the Notion **Books** database and extract the Database Id as shown below. The database id is nothing but all of the gibberish between the last `/` and the `?`. This is required by the app to perform **CRUD operations** on this database.
```
Original Link: https://www.notion.so/arkalim/346be84507ff482b80fceb4024deadc2?v=e868075eaf5749bc941e617e651295fb
Database Id: 346be84507ff482b80fceb4024deadc2
```

- So, now you have the **Notion API key** as well as the **Database Id**. Now, populate these variables in the `.env` file. Storing this sensitive information in `.env` ensures that it won’t get exposed to the rest of the world if you commit your local repo to GitHub as `.gitignore` has been configured to ignore `.env` during commits.
```
NOTION_API_KEY=your-notion-api-key
BOOK_DB_ID=your-book-database-id
```

- Connect your **Kindle** to your computer. Navigate to `Kindle` ➡ `documents` and copy `My Clippings.txt`. Replace my `My Clippings.txt` in `resources` folder with yours.

# 🔁 Sync Highlights
Finally, we are at the end of the setup section. You are now ready to sync your Kindle highlights to Notion. Open a terminal in your local repository and run the following command to watch your highlights teleport!
```
npm start
```

# ❗️For Nerds
- Every highlight made on Kindle is appended at the end of `My Clippings.txt`. **RegEx** has been used extensively throughout the application to parse and filter this text file.
- `cache` is a folder that contains the local cache to prevent the app from resyncing old highlights. `data` is a folder that contains the API response logs. `.env` is a file containing the environment variables like the **Notion API key** and the **Database Id**.
- `Book Name` is used as the primary key to facilitate upsert operation in the Notion database. `Book Name` corresponds to the title of the book in `My Clippings.txt`. So, this field should be left untouched. However, the other fields like **Title, Author, Date Started, Date Finished, Status, and Genre** could be modified as per your wish.
- The app maintains a local cache in the file `sync.json` present in the `cache` folder. This JSON file is updated at the end of each sync. This is done to prevent the app from resyncing the old highlights. If no new highlights have been made, no sync takes place.
- In case you wish to sync every book all over again, you need to empty the array present in `sync.json` and delete all the highlights present in your Notion database before running the sync.
- Responses from Notion API calls are exported to files with `.json` extensions in `data` folder. This was done to mitigate the problem of effectively logging JSON objects in the console (terminal).

# That’s all folks!
If you made it till here, hats off to you! In this article, we learned how to set up **Kindle to Notion** app on our local system and use it to sync our Kindle highlights to the Notion Books database. If you want me to write more detailed articles explaining the inner workings of this app, drop a comment below. I write articles regularly so you should consider following me to get more such articles in your feed. Thanks a lot for reading!