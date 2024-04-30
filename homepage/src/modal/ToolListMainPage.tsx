import { ReactElement } from "react";

export default function ToolListMainPage(): ReactElement{
    return (
        <ul className="list-outside list-disc text-lg">
            <li>react <span className="text-sm" >:UI library</span></li>
            <li>typeScript <span className="text-sm" >:language</span></li>
            <li>tailwindCSS <span className="text-sm" >:css framework</span></li>
            <li>vite <span className="text-sm" >:build tool</span></li>
            <li>node.js <span className="text-sm" >:backend framework</span></li>
            <li>express.js <span className="text-sm" >:web app framework</span></li>
            <li>nginx <span className="text-sm" >:reverse proxy</span></li>
            <li>VS Code <span className="text-sm" >:code editor</span></li>
        </ul>
    )
}