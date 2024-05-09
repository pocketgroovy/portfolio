import { ReactElement } from "react";

export default function Technologies(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            Tech 
        </h1>
        <span className="m-10 text-sm">*some of the technologies I had a chance to play with so far</span>

        <div className='list-task-style'>
            <p className="font-extrabold" >Proficient:</p> <span>Azure, Terraform, Java, Kubernetes, Spring Boot, Github Action, Bitbucket, JavaScript, Node, React, MongoDB, Apache, Tomcat, Python, Eclipse, SQL, Redis, Linux, Shell Script, Git, Jenkins, Visual Studio Code, JIRA, PyCharm</span>
            <p className="font-extrabold">Exposure:</p> <span>R,  Backbone.js, C++, C, C#, Unity, Graphite, Grafana, CollectD, Angular, Zabbix, Geb, FHIR, SMART on FHIR, Numpy, Panda, Matplotlib, iOS, Objective-C, Xcode, Android, Android Studio</span>
        </div>
    </div>)
}