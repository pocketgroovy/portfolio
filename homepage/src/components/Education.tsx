import { ReactElement } from "react";

export default function Education(): ReactElement {

    return (<div>
        <h1
            className='font-luckiest mt-8 text-5xl sm:mt-8'>
            Education
        </h1>

        <div className='flex flex-col space-y-2 font-medium text-normal break-words tracking-wider'>
            <h1>M.S. Computer Science, Georgia Institute Of Technology, Atlanta Georgia, USA  Master Degree	2020</h1>

            <h1>Certificate of Computer Programming, Santa Monica College, Santa Monica, CA, USA     	2013
            </h1>

        </div>
    </div>)
}