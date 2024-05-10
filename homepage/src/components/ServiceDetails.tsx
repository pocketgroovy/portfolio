import type { ReactElement } from "react";

export default function Career(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            Web App
        </h1>

        <div className='list-task-style'>
            <ul className="tasklist">
                <li>Target: PC/Mobile(Browser) Web App </li>
                <li>Pages: 1 - 50</li>
                <li>Expected Timeline: 2 to 37 weeks *sample below</li>
            </ul>
            <h1 className="jobtitle">Sample Process * Some steps may be omitted depending on the circumstances.</h1>
            <ul className="tasklist">
                <li>Requirements Phase: Discuss what you need. create a wireframe (1-4 weeks)</li>
                <li>Content Creation ( 2-8 weeks) </li>
                <li>UI/UX design ( 4-12 weeks) </li>
                <li>Development ( 2-10 weeks)</li>
                <li>Testing ( 1-3 weeks)</li>
                <li>Release</li>
                <li>post-launch support (4 weeks)</li>
            </ul>
            <h1 className="jobtitle">Additional Service(After the post-launch support expired)	*extra fees occur  </h1>
            <li>Maintenence such as security update, bug fixes, backups, performance optimization, content updates</li>
        </div>
    </div>)
}