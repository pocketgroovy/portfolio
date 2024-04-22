import type {ReactElement } from 'react'
import { Link } from 'react-router-dom';

export default function AboutMeTab(): ReactElement {
    return (
        <div className='absolute font-comfortaa '>
            <ul className="text-sm font-medium text-center ">
                <li className="mb-2">
                    <Link to='/' >
                        <span className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Projects</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to='/experience' >
                        <span className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Experience</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to='/service'>
                        <span className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Service</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to='/contacts'>
                        <span className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Contacts</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}