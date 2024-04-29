import { ReactElement } from "react";

export default function ToolListMainPage(): ReactElement{
    return (
        <ul className="list-outside list-disc text-lg">
            <li>React <span className="text-sm" >:UI library</span></li>
            <li>TypeScript <span className="text-sm" >:language</span></li>
            <li>TailwindCSS <span className="text-sm" >:css framework</span></li>
            <li>Vite <span className="text-sm" >:build tool</span></li>
            <li>Nginx <span className="text-sm" >:reverse proxy</span></li>
            <li>VS Code <span className="text-sm" >:code editor</span></li>
        </ul>
    )
}