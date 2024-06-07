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