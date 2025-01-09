import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'
import AttributionTag from 'components/AttributionTag'
import ImagePane from 'components/ImagePane'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import type { IAttribute } from 'types/iattribute'
import { useMediaQuery } from 'utils'
import image from '../media/images/rssreader.png'
import gituhubimgae from '../media/images/github-mark.png'

export default function RssFeedReader(): ReactElement {
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

    const photoAttributes: IAttribute = {
        site: {
            name: 'Unsplash',
            url: 'https://unsplash.com'
        },
        author: {
            name: project.image.author.name,
            url: project.image.author.url
        },
        type: 'Photo'
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
                    <a className='text-blue-600' href={project.image.author.url}  target="_blank">
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
                        <a className='text-blue-600' href={project.image.author.url} target="_blank">{project.title} <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i></a><a className='text-sm' href={project.image.author.url} target="_blank">Open the Project Page</a>
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
                                <td className='border border-gray-300 px-8 py-2'>Feed Retrieval Server</td>
                                <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>User Interface Server</td>
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
                        <h3 className='font-bold' >Feature:</h3>
                        <p className='text-xl'>One of the most notable aspects of developing my RSS reader app was utilizing containers for all components, including MySQL. This approach ensures that the project can run seamlessly across various environments and offers excellent scalability.</p>
                        <h3 className='font-bold' >Challenges in Development:</h3>
                        <h4 className='font-bold text-xl'>1. Docker's Unique Networking:</h4>
                        <p className='text-xl'>I implemented three different Docker containers for this project: the RSS Retriever, the RSS Subscriber (user interface), and the MySQL database. If the database were running directly on the host server (i.e., not containerized), the app could communicate with the database locally using localhost, avoiding the need for internet-based interactions. However, with containerization, it's like having three separate servers. Without a domain name or at least an IP address, these containers can't communicate with each other.</p>
                        <p className='text-xl'>I was reluctant to use IP addresses due to the lack of guarantee that they would remain consistent upon container reinitialization. Fixing the IP addresses would undermine the flexibility and mobility benefits of Docker. Fortunately, Docker allows containers to communicate using their names, provided they are within the same custom network. This way, as long as the intended containers are in the same network, I can simply use their names for interactions, including with the database.</p>
                        <h4 className='font-bold text-xl'>2. Network Security:</h4>
                        <p className='text-xl'>To enhance security and prevent the network from being directly accessible from the internet, I incorporated Nginx as a proxy server. Nginx acts as an intermediary, forwarding user requests to retrieve data, thereby adding an additional layer of security.</p>
                        <p className='text-xl'>Additionally, client requests are made over HTTPS. By having Nginx handle the HTTPS connections and forward requests to the internal services over localhost, I avoid the need for SSL certificates for the app components within the internal network. This approach saves me from the hassle of periodic certificate renewal and reduces the costs associated with maintaining SSL certificates for internal services.</p>
                        <ImagePane imagePath={image} imageTitle='rssreader' />
                        <a className='text-base outer' href='https://github.com/pocketgroovy/RssFeed' target="_blank" rel="noreferrer" > <img className='h-5 w-5' src={gituhubimgae} alt='Code in github' />  Check Code in Github (Feed Retrieval)</a>
                        <a className='text-base outer' href='https://github.com/pocketgroovy/RssClient' target="_blank" rel="noreferrer" > <img className='h-5 w-5' src={gituhubimgae} alt='Code in github' />  Check Code in Github (User Interface)</a>
                        <p className='italic'> Please feel free to contat me!</p>

                        <Link className='font-bold' to='/contacts'>
                            <span className="flex"><i className="mr-2 fa-regular fa-message flex items-start" />CONTACTS</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
