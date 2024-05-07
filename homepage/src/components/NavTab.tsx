import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function NavTab(): ReactElement {
    return (
        <div >
            <ul className="font-comfortaa text-2xl text-center text-black">
                <li className="mb-2">
                    <Link to='/' >
                        <span className="tab-button">
                            <i className="p-2 fa-solid fa-house"></i>
                        Top /
                             <br /> Projects</span>
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