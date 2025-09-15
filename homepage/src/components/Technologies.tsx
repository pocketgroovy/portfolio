import type { ReactElement } from "react";

export default function Technologies(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            Tech 
        </h1>

        <div className='list-task-style'>
            <p className="font-extrabold" >Proficient:</p> <span>Azure, AKS, Terraform, Kubernetes, Java, Spring Boot, Python, GitHub Actions, Jenkins, Argo CD, Docker, SQL, Redis, Linux, Shell scripting, Git, CI/CD, WAF, PCI DSS, Python, Node.js/React, MongoDB, WordPress</span>
            <p className="font-extrabold">Exposure:</p> <span>Grafana/Graphite/collectd, C/C++, C#</span>
        </div>
    </div>)
}