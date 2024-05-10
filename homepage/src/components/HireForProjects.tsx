import type { ReactElement } from "react";

export default function HireForProjects(): ReactElement {

    return (<div>
        <h1
            className='list-title'>
            open for any project
        </h1>

        <ol className="space-y-4 text-gray-500 list-inside dark:text-gray-400">
            <li>name a few..</li>
            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <p>mobile app</p>
                <p>e-commerce</p>
                <p>devpps</p>
                <p>infra maintenance</p>
                <p>API building</p>
                <p>backend development</p>
            </ul>
        </ol>
    </div>)
}