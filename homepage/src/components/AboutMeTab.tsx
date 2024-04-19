import { ReactElement } from 'react';

export default function AboutMeTab(): ReactElement {
    return (
        <div className='absolute font-comfortaa '>
            <ul className="text-sm font-medium text-center ">
                <li className="mb-2"> 
                    <a href="/" aria-current="page" className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Projects</a>
                </li>
                <li className="mb-2">
                    <a href="/career" className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Career</a>
                </li> 
                <li className="mb-2">
                    <a href="/services" className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-400">Services</a>
                </li>
                <li className="mb-2">
                    <a href="/contacts" className="block p-4 text-blue-600 bg-gray-100 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#BAB6D0,0_0px_0_0_#D4D8DF]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_3px_0_0_#BAB6D0,0_5px_0_0_#D4D8DF]
    border-b-[1px] border-gray-700">Contacts</a>
                </li>
            </ul>
        </div>
    );
}