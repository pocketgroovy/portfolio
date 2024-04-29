import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function NavTab(): ReactElement {
    return (
        <div >
            <ul className="font-jersey25 text-center ">
                <li className="mb-2 ">
                    <Link to='/' >
                        <span className="tab-button">
                            <i className="fa-solid fa-house"></i>
                            Top / Projects</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to='/experience' >
                        <span className="tab-button">Experience</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to='/service'>
                        <span className="tab-button">Service</span>
                    </Link>
                </li>
                <li className="mb-2 ">
                    <Link to='/contacts'>
                        <span className="tab-button flex"><i className="mr-2 fa-regular fa-message flex items-start"></i>Contacts</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}