import type { ReactElement } from "react";

export default function ToolListMainPage(): ReactElement {
    return (
        <ul data-testid="tool-list" className="list-outside list-disc text-lg ">
            <li>react <span className="text-sm" >:UI library</span></li>
            <li>typescript <span className="text-sm" >:language</span></li>
            <li>tailwindcss <span className="text-sm" >:css framework</span></li>
            <li>vite <span className="text-sm" >:build tool</span></li>
            <li>node.js <span className="text-sm" >:backend framework</span></li>
            <li>express.js <span className="text-sm" >:email/db server</span></li>
            <li>nginx <span className="text-sm" >:reverse proxy</span></li>
            <li>mongodb <span className="text-sm" >:database</span></li>
            <li>vs code <span className="text-sm" >:code editor</span></li>
        </ul>
    )
}