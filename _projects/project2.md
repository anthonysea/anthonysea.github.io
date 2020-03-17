---
title: Article Search
excerpt: Article searching web application that finds related articles given an article headline
videos:
    - src: /assets/article_search_cap_1.webm
    - src: /assets/article_search_cap_2.webm
images:
    - src: /assets/article_search_cap_3.png
technologies:
    - Flask
    - BeautifulSoup4
    - Connexion and Swagger 
    - Vue.js
description: "Web application that utilizes a web scraper to find relevant news articles given a user query. The web scraper was built with the BeautifulSoup4 and essentially scrapes Google search results of the user query. The web scraper results are then served through the endpoints of the REST API built with Connexion and defined with Swagger. Vue.js is used on the frontend to consume the REST API and display the results offering a dynamic user experience."
challenges: "This was the first application that I developed utilizing Flask, Connexion, and Vue.js and so it took some time to understand the logic that was needed to properly connect all the components of the application. One other issue that I ran into was the handling of pagination of when there were too many results, I ended up utilising a scrollbar to maintain the single page aspect of the application."

---

