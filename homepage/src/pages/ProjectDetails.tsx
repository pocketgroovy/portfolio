import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'
import AttributionTag from 'components/AttributionTag'
import ImagePane from 'components/ImagePane'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import type { IAttribute } from 'types/iattribute'
import { useMediaQuery } from 'utils'
import image from '../media/images/mern.png'
import gituhubimgae from '../media/images/github-mark.png'



const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.3

export default function ProjectDetails(): ReactElement {
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
        aProject => aProject.title.toLowerCase() === projectTitle?.toLowerCase()
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
            ? window.innerWidth * DESKTOP_IMAGE_WIDTH_PERCENTAGE
            : window.innerWidth) * window.devicePixelRatio
    const imageHeight =
        (isTabletAndUp
            ? window.innerHeight
            : window.innerHeight * MOBILE_IMAGE_HEIGHT_PERCENTAGE) *
        window.devicePixelRatio


    return (
            <div className='flex min-h-screen flex-col items-center sm:flex-row'>
                <div className='relative'>
                    <img
                        width={imageWidth}
                        height={imageHeight}
                        style={{
                            backgroundColor: project.image.color
                        }}
                        src={`${project.image.url}&w=${imageWidth}&h=${imageHeight}`}
                        alt={project.title}
                    />
                    <AttributionTag attribute={photoAttributes} />

                </div>
                <div className='my-8 sm:my-0 sm:ml-16'>
                    <Link data-testid='BackLink' to='/' className='flex items-center'>
                        <img src='/icons/arrow-left.svg' alt='' className='h-5 w-5' />
                        <span className='ml-4 text-xl'>Back</span>
                    </Link>

                    <h1
                        className='mt-2 text-5xl font-bold sm:mt-8'
                    >
                        {project.title}
                    </h1>
                    <h2 className='mt-3 text-xl text-gray-900 dark:text-gray-400'>
                        *Please click the tech stack button for tools I used
                    </h2>

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
                                <td className='border border-gray-300 px-8 py-2'>Hostinger Web hosting</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'>Email Server</td>
                                <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                            </tr>
                            <tr >
                                <td className='border border-gray-300 px-8 py-2'> DB Server</td>
                                <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className='font-bold underline decoration-from-font mt-5 my-5 text-3xl'>
                        Behind the Scenes: Insights into Development
                    </h1>

                    <div className='ps-px pr-64 pb-10 font-serif4 text-xl  text-justify tracking-wide space-y-5'>
                        <p>The architecture for these portfolio webpages is based on the 3 tiers: Presentation, Application, and Data tiers. The main tools used were the MERN stack, comprising MongoDB, Express, React, and Node.</p>
                        <p>I chose this stack primarily for its popularity, which makes it easier to obtain the necessary information.</p>
                        <p>As for the infrastructure setup, I first configured the Hostinger website to host the presentation pages, which users will interact with. Then, I set up a VPS (Virtual Private Server) to host email and database servers using Express.</p>
                        <p>For enhanced security, I utilized Nginx to reverse-proxy requests to the servers. Speaking of security, SSL was essential for me. Hostinger Web Hosting provides free SSL certificates, eliminating the need for manual setup. All I had to do was associate my domain with the web hosting, and SSL was installed automatically.</p>
                        <p>The email and database servers, residing in the VPS, were assigned to subdomains. Although SSL installation was not automatic for these, Hostinger provided documentation (<a className='text-blue-600 visited:text-purple-600 ...' href="https://support.hostinger.com/en/articles/6865487-how-to-install-ssl-on-vps-using-certbot">https://support.hostinger.com/en/articles/6865487-how-to-install-ssl-on-vps-using-certbot</a>), making the setup relatively straightforward.</p>
                        <ImagePane imagePath={image} imageTitle='mern' />
                        <a className='text-blue-600 visited:text-purple-600 ...' href='https://github.com/pocketgroovy/portfolio' target="_blank"> <img className='h-5 w-5' src={gituhubimgae} alt='Code in github' />  Check Code in Github</a>
                        <p> Please feel free to contat me!</p>

                        <Link className='font-bold' to='/contacts'>
                            <span className="flex"><i className="mr-2 fa-regular fa-message flex items-start" />CONTACTS</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
