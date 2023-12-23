# NodeJS-HOWTOs
This repository contains a collection of NodeJS-HOWTOs for learning purposes.

## TABLE OF CONTENTS
<ol>
<li><a href="#tested-with">Tested With</a></li>
<li><a href="#content">Content</a></li>
<li><a href="#contributing">Contributing</a></li>
</ol>

## TESTED WITH
The HOWTOS are tested with the following software components...

Name           | Reference    
-------------- | --------------- 
Windows        | >= 11
Docker Desktop | >= 4.12.0
WSL            | >= 2
Ubuntu         | >= 20.04.6 LTS (Focal Fossa)
docker         | 20.10.17
docker-compose | v2.10.2

## CONTENT
Id  | Description                                                          
----|----------------------------------------------------------------------
001 | HOWTO - Create File Uploading with Node.js (Express)                 
002 | HOWTO - Create Simple HTTP(s) Client with Node.js                    
003 | HOWTO - Dockerize a Node.js Web App (Express)
004 | HOWTO - Process JSON Post Requests with Node.js (Express)
005 | HOWTO - Run a Simple File-Server with Node.js (Express)
006 | HOWTO - Run a Simple JSON Server with Node.js
007 | HOWTO - Run Worker Threads with Node.js (Express)
008 | HOWTO - Use Swagger for documenting REST-APIs with Node.js (Express)

## SETUP

1. Clone the NodeJS-HOWTOs repo

        $ cd ~
        $ mkdir workspace
        $ cd workspace
        $ git clone git@github.com:schneidermatic/NodeJS-HOWTOs.git

2. Select one of the HOWTOs i.e. 

        $ cd NodeJS-HOWTOs/HOWTO - Create a File Uploading with Node.js (Express)
        $ source ./.apprc
        $ app_ls
        $ app_run

3. Clean up the HOWTO folder

        $ app_rm
        
## CONTRIBUTING
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request