import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'
import { Link, Navigate, useParams } from 'react-router-dom'
import type { IAttribute } from 'types/iattribute'
import { useMediaQuery } from 'utils'
import { ReactElement } from 'react'
import LoadingOrError from 'components/LoadingOrError'

export default function AIBusinessAssessment(): ReactElement {
    const isTabletAndUp = useMediaQuery('(min-width: 600px)')
    const { projectTitle } = useParams()

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['projects'],
        queryFn: getProjects
    })
    if (isPending || isError) {
        return <LoadingOrError error={error as Error} />
    }

    //  The 1st 'data' from usrQuery and the 2nd 'data' from Axios. useQuery returns results in 'data', Axios also put the response in 'data'.
    
    const project = data.data.find(
        aProject => aProject.title.replace(/\s/g, "").toLowerCase() === projectTitle?.toLowerCase()
    )

    if (!project) {
        return <Navigate to='/' replace />
    }

    const imageWidth =
        (isTabletAndUp
            ? window.innerWidth 
            : window.innerWidth) * window.devicePixelRatio
    const imageHeight =
        (isTabletAndUp
            ? window.innerHeight
            : window.innerHeight) * window.devicePixelRatio

       var defaultImage = "images/" + project.image.url
  
    return (
            <div className='flex min-h-screen flex-col items-center sm:flex-row'>
                <div className='relative'>
                    <a href={project.image.author.url} target="_blank">
                        <img
                            width={imageWidth}
                            height={imageHeight}
                            style={{
                                backgroundColor: project.image.color
                            }}
                            src={defaultImage}
                            alt={project.title}
                        />
                    </a>
                </div>
                <div className='font-raleway my-8 sm:my-0 sm:ml-16'>
                    <Link data-testid='BackLink' to='/' className='flex items-center'>
                        <img src='/icons/arrow-left.svg' alt='' className='h-5 w-5' />
                        <span className='ml-4 text-xl'>Back</span>
                    </Link>

                    <h1
                        className='mt-2 text-5xl font-bold sm:mt-8'
                    >
                        <a className="text-blue-600" href={project.image.author.url} target="_blank">{project.title} <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i></a><a className='text-sm' href={project.image.author.url} target="_blank">Open the Project Page</a>
                    </h1>
                    
                    <table className='mt-8 text-lg'>
                        <thead>
                            <tr >
                                <th className='px-8 py-2'>Function</th>
                                <th className='px-8 py-2'>Host</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>Web Host</td>
                                <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>realtime database</td>
                                <td className='border border-gray-300 px-8 py-2'>firebase</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>AI</td>
                                <td className='border border-gray-300 px-8 py-2'>OpenAI API</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>Wordpress Server</td>
                                <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>MySQL DB Server</td>
                                <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className='font-bold underline decoration-from-font mt-5 my-5 text-3xl'>
                        Behind the Scenes: Insights into Development
                    </h1>

                    <div className='ps-px pr-64  text-2xl tracking-wide space-y-3'>
                    <p className='text-xl'>This small demo project provided me with a valuable opportunity to work with the OpenAI API, Firebase, and WordPress custom plugins for the first time.</p>
                    <p className='text-xl'><strong>OpenAI API:</strong></p>
                    <p className='text-xl'>Having previously studied Reinforcement Learning at university, I was familiar with OpenAI Gym (now Gymnasium). Witnessing the rise of ChatGPT and its NLP capabilities over the past five years has been remarkable. While I found getting started with Gym challenging initially, the ease of implementation with the OpenAI API was a pleasant surprise. After a few attempts, I was able to achieve the desired results.</p>
                    <p className='text-xl'><strong>Firebase:</strong></p>
                    <p className='text-xl'>Similar to the OpenAI API, setting up Firebase was relatively straightforward. However, I wouldn't consider myself an expert as I haven't extensively explored all its features. For this project, which required real-time data retrieval and storage, I utilized the Firebase Realtime Database.</p>
                    <p className='text-xl'><strong>Both systems</strong> are fundamentally based on REST APIs. Therefore, if you have experience working with standard APIs, you should not encounter significant difficulties in utilizing them.</p>
                    <p className='text-xl'><strong>WordPress Custom Plugins:</strong></p>
                    <p className='text-xl'>The custom plugins for this project were developed using PHP. This experience allowed me to learn about the concept of shortcodes within the WordPress environment. </p>
                    <h3 className='text-xl'>The plugin comprises four functions:</h3>
                    <ul className='list-disc text-lg'>
                        <li>'create_demo_page': Creates a dedicated page upon plugin activation.</li>
                        <li>'firebase_textbox': Stores user input from the textbox within the Firebase database.</li>
                        <li>'openai_prompt': Sends a prompt to the OpenAI API and retrieves the response.</li>
                        <li>'remove_demo_page': Removes the dedicated page when the plugin is deactivated.</li>
                    </ul>

                    <p className='text-xl'>Familiarizing myself with the proper format and syntax for WordPress plugin development required some trial and error, involving multiple plugin activations and deactivations. However, leveraging the power of NLP, I was able to complete the entire development process within 10 hours.</p>

                        <p className='italic'> Please feel free to contat me!</p>

                        <Link className='font-bold' to='/contacts'>
                            <span className="flex"><i className="mr-2 fa-regular fa-message flex items-start" />CONTACTS</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
