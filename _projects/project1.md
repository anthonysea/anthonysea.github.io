---
title: NBA Player Reference
excerpt: Web application that dynamically visualizes and compares player data pulled from stats.nba.com
videos:
    - src: /assets/nba_player_reference_1.webm
    - src: /assets/nba_player_reference_2.webm
images:
    - src: /assets/nba_player_reference_3.png
technologies:
    - Flask
    - Connexion with Swagger
    - Vue.js and Axios.js
description: "Web application built with Flask, Connexion and Swagger, and Vue.js. First, I developed the backend REST API using Connexion on top of Flask. Connexion utilizes Swagger which allowed me to quickly define the endpoints that were needed for the frontend of the application. From then I could easily write up the backend logic that pulls the data from the nba_api Python package. Vue.js on the frontend allowed me to utilize Vue components to create a separation of concerns between differing parts of the application which simplified development. Requests to the REST API were done using Axios.js"
challenges: "The main challenges with this project lied in the frontend organization of the application. There were a few instances where I had to refactor and remove components to better handle the logical flow of data from user input to data visualization. Another challenge, which still remains, is that any changes with the nba_api package may cause my application to fail, I have to keep up with the updates of the package and adapt accordingly."

---

