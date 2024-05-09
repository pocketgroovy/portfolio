import { ReactElement } from "react";

export default function Education(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            Education
        </h1>

        <div className='list-task-style'>
            <ol>
                <li>M.S. Computer Science, Georgia Institute Of Technology, Atlanta Georgia, USA  Master Degree	2020</li>
            <ul className="text-sm" >* Machine Learning was my specialization</ul>
            <br/>
            <li>Certificate of Computer Programming, Santa Monica College, Santa Monica, CA, USA     	2013</li>
            </ol>

        </div>
    </div>)
}