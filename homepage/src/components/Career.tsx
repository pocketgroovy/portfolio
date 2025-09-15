import type { ReactElement } from "react";

export default function Career(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            Experience
        </h1>

        <div className='list-task-style'>
            <h1 className="jobtitle">Rakuten | Infrastructure Engineer | Tokyo, Japan					              2021-2024</h1>
            <ul className="tasklist">
                <li>Cut AKS upgrade time by 80% by codifying regression tests and documenting past incidents, enabling safe blue-green cluster rollouts </li>
                <li> Maintained PCI DSS–compliant infrastructure; partnered with internal/external auditors and remediated 100% of findings within SLA </li>
                <li> Deployed WAF policies and rate limiting at the edge, blocking &gt;98% of malicious requests without impacting conversion </li>
                <li> Reduced HTTP 431 errors by 98% by tuning ingress and server header limits (e.g., proxy-buffer-size),
                    eliminating checkout failures</li>
                <li> Improved platform availability to 99.99%+ quarterly by implementing GitOps with Argo CD, gated CI with Jenkins, and automated rollbacks</li>
            </ul>
            <h1 className="jobtitle">Rakuten | Software Engineer | Tokyo, Japan	 				               	   	       	        2017 - 2021</h1>
            <ul className="tasklist">
                <li> Built CLI tools that reduced application deployment time by 95% (hours → minutes) </li>
                <li>  Hardened Rakuten Pay login and session management (REST APIs, cookies), improving security posture and reducing authentification failures</li>
                <li>  Migrated legacy Struts app to Spring Boot; replaced Struts tags with JSTL and migrated builds to Maven,cutting development effort by &gt;70% and enabling TLS 1.2</li>
                <li>  Containerized CI with Jenkins and Docker, reducing build times and developer setup by ~90%</li>
            </ul>
            <h1 className="jobtitle">Voltage Entertainment Inc. | Software Engineer | San Francisco, CA	2014 - 2017</h1>
            <ul className="tasklist">
                <li>Developed login API using Python, Django and C# to track user retention rate and key performance indicator (KPI), automating the sales report process with Shell Scripts to reduce time for completion by over 98%.</li>
                <li>Improved speed of server setup time by ~92% through writing bash scripts on CentOS and Ubuntu systems to install and run Apache, Firewall, MongoDB and Python servers.</li>
                <li>Reduced MongoDB query and insertion processes time of 10,000+ documents from 5 minutes to &lt; 1 minute by utilizing bulk operations and indexing of databases containing ~500,000 mobile game users.</li>
                <li>Engineered Graphite monitoring system with Grafana UI for all Linux servers to monitor network traffic, CPU performance and memory usage, allowing for server spec efficiency savings of ~$60,000 annually.</li>
            </ul>
            <h1 className="jobtitle">MashOn Inc. | Software Engineer | Los Angeles, CA	  2013</h1>
            <ul className="tasklist">
                <li>Debugged Java/Spring/JavaScript modules to resolve server-side defects affecting item names and images in customer purchases.</li>
            </ul>
        </div>
    </div>)
}