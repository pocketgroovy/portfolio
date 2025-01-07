# My Portfolio

## Feature:
### 1. Architecutre:
The architecture for these portfolio webpages is based on the 3 tiers: Presentation, Application, and Data tiers. The main tools used were the MERN stack, comprising MongoDB, Express, React, and Node.

I chose this stack for its scalability and quick development as well as it's popularity among developers, which makes it easier to obtain the necessary information.

### 2. Infrastructure:
As for the infrastructure setup, I first configured the Hostinger website to host the presentation pages, which users will interact with. Then, I set up a VPS (Virtual Private Server) to host email and database servers using Express.

### 3. Security:
For enhanced security, I utilized Nginx to reverse-proxy requests to the servers. SSL(https) was essential for me. Hostinger Web Hosting provides free SSL certificates, eliminating the need for manual setup. All I had to do was associate my domain with the web hosting, and SSL was installed automatically.

## Challenges in Development:
The email and database servers, hosted on a VPS, were assigned to subdomains. This setup helped me avoid issues related to CORS (Cross-Origin Resource Sharing) .

However, HTTPS communication presented a bit of a challenge. Even though the servers share the same domain (pocketgroovy), separate SSL certificates are needed for each subdomain unless you use wildcard or multi-domain certificates. Fortunately, Hostinger provided comprehensive documentation. While the SSL installation wasn't automatic for these subdomains, their guidance saved me a lot of time and money.


## Run Commands
### Local 
#### Servers
`node dbserver.js`, `node server.js`
#### DB
`mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork`

#### homepage
`vite --open`

### Production
#### Servers
`pm2 start dbserver.js`, `pm2 start server.js`

#### DB
`systemctl start mongod`

#### homepage
`vite build`
`tar -cvf dist.tar dist/`
place and untar the dist.tar under public_html

## Development Notes
### To add new app page
1. create tsx file with a title of the app under homepage/src/pages
2. add the component to the map as componentMap in the ProjectDetails.tsx under homepage/src/pages
3. add the app image to public/images folder
4. add the app data into DB *image author name has to be "Yoshi Miyamoto"

### To disable cors for local usage
uncommnent out `db.use(cors());`