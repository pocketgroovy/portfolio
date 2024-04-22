import { ReactElement } from "react";

export default function Career(): ReactElement {

    return (<div>
        <h1
            className='font-luckiest mt-8 text-5xl sm:mt-8'>
            Experience
        </h1>

        <div className='flex flex-col space-y-2 font-medium text-normal break-words tracking-wider'>
            <h1>Rakuten | Infrastructure Engineer | Tokyo, Japan					              2021-2024</h1>
            <ul className="list-disc list-inside">
                <li>Azure Kubernetes Service annual update to maintain the most up-to-date security compliant infrastructure</li>
                <li>Blocked more than 98% of illegal access by implementing Web Application Firewall</li>
                <li>Setup CI/CD pipelines with Jenkins, Argocd and Bitbucket</li>
            </ul>

            <h1>Rakuten | Software Engineer | Tokyo, Japan	 				               	   	       	        2017 - 2020</h1>
            <ul className="list-disc list-inside">
                <li>Solely responsible for improving the Login process for more secure access to R pay web application handling session information with RESTful access and cookies.</li>
                <li>@Rakuten pay architecture team,  building Java web online payment app which is earning a monthly revenue of  One billion yen and attracting 20000 hourly access users.</li>
                <li>Upgrading Java 1.6 to 1.8 to support TLS1.2 for better security.</li>
                <li>Refactoring Java web app based on struts to spring-boot including replacing struts tags with jstl, mavenize to save more than 70% of development cost and time and better security.</li>
                <li>Setting up Jenkins with Docker containers environment to reduce development cost and time by 90%</li>
            </ul>
            <h1>Voltage Entertainment Inc. | Software Engineer | San Francisco, CA	2014 - 2016</h1>
            <ul className="list-disc list-inside">

                <li>Developed login API using Python, Django and C# to track user retention rate and key performance indicator (KPI), automating the sales report process with Shell Scripts to reduce time for completion by over 98%.</li>
                <li>Improved speed of server setup time by ~92% through writing bash scripts on CentOS and Ubuntu systems to install and run Apache, Firewall, MongoDB and Python servers.</li>
                <li>Reduced MongoDB query and insertion processes time of 10,000+ documents from 5 minutes to &lt; 1 minute by utilizing bulk operations and indexing of databases containing ~500,000 mobile game users.</li>
                <li>Engineered Graphite monitoring system with Grafana UI for all Linux servers to monitor network traffic, CPU performance and memory usage, allowing for server spec efficiency savings of ~$60,000 annually.</li>
            </ul>
            <h1>MashOn Inc. | Software Engineer | Los Angeles, CA	  2013</h1>
            <ul className="list-disc list-inside">

                <li>Analyzed Java, Spring and JavaScript codebase to test and resolve server-side module errors in displaying item names and images of customers purchases.</li>
            </ul>
        </div>
    </div>)
}