import type { ReactElement } from "react";

export default function RssReaderDevelopment(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            Rss Reader
        </h1>
        <i className="text-sm fa-solid fa-arrow-up-right-from-square pb-5"></i><a className='text-sm' href='https://rssreader.subscriber.pocketgroovy.com' target="_blank"> Open the Sample Project</a>


        <div className='list-task-style'>
            <ul className="tasklist">
                <li>Target: PC/Mobile(Browser)  </li>
                <li>Pages: 1 - 5</li>
                <li>Expected Timeline: 5 to 10 weeks *sample below</li>
            </ul>
            <h1 className="jobtitle">Sample Process * Some steps may be omitted depending on the circumstances.</h1>
            <ul className="tasklist">
                <li>Requirements Phase: Discuss what you need. create a wireframe (1 - 2 weeks)</li>
                <li>UI/UX design ( 1 - 2 weeks) </li>
                <li>Development ( 2 - 4 weeks)</li>
                <li>Testing ( 1 - 2 weeks)</li>
                <li>Release</li>
                <li>post-launch support (4 weeks)</li>
            </ul>
            <h1 className="jobtitle">Additional Service(After the post-launch support expired)	*extra fees occur  </h1>
            <li>Maintenence such as security update, bug fixes, backups, performance optimization, content updates</li>
        </div>
    </div>)
}