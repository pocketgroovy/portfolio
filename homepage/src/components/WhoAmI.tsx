import { ReactElement } from "react";

export default function WhoAmI(): ReactElement {

    return (<div>
        <h1
            className='font-luckiest mt-8 text-5xl sm:mt-8'>
            WHO AM I?
        </h1>

        <div className='flex flex-col space-y-2 font-medium text-normal break-words tracking-wider'>
            <p className='text-lg text-font-ubuntu'>
                I'm Yoshi Miyamoto, also known as PocketGroovy, and I'm delighted to connect with you!!</p>
            <p>As a devoted father to my 8-year-old daughter and lucky husband,
                I find immense joy in both my family life and my professional pursuits.
                I've been working in the vibrant tech scene of U.S.A and Japan(Yes! I love Animes and Games!!).</p>
            <p>With over a decade of experience in software engineering, I've had the pleasure of contributing to a variety of exciting projects, ranging from mobile apps and games to e-commerce web applications.
                My roles have been varied, ranging from backend and frontend development to infrastructure engineering. I've had the opportunity to work in both startup environments and major corporations, experiencing the unique challenges, soaking up knowledge and refining my skills along the way.</p>
            <p>I'm committed to delivering exceptional results that you can trust. Your satisfaction is my top priority.
                I encourage you to take a look at some of the sample projects I've created, though I assure you that your unique vision will always take precedence. I live for the challenge of bringing ideas to life.</p>
            <p>Thank you for taking the time to read this message. If you have any questions or would like to discuss further, please don't hesitate to reach out to me via the messaging page or at info@pocketgroovy.com.</p>
            <p>Can't wait to hear from you and get groovin' on your project!</p>
            <p>Wishing you a wonderful day ahead!</p>
            <br />
            <p>Warm regards,</p>
            <p>Yoshi Miyamoto (PocketGroovy) </p>
        </div>
    </div>)
}