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

export default function MyPortfolio(): ReactElement {
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
        <div className='font-raleway flex min-h-screen flex-col items-center sm:flex-row'>
            <div className='relative'>
                <img
                    width={imageWidth}
                    height={imageHeight}
                    style={{
                        backgroundColor: project.image.color
                    }}
                    src={defaultImage}
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
                            <td className='border border-gray-300 px-8 py-2'>MongoDB Server</td>
                            <td className='border border-gray-300 px-8 py-2'>Hostinger VPS Ubuntu</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className='font-bold underline decoration-from-font mt-5 my-5 text-3xl'>
                    Behind the Scenes: Insights into Development
                </h1>

                <div className='ps-px pr-64  text-2xl tracking-wide space-y-3'>
                    <h3 className='font-bold' >Feature:</h3>
                    <h4 className='font-bold text-xl'>1. Architecutre:</h4>
                    <p className='text-xl'>The architecture for these portfolio webpages is based on the 3 tiers: Presentation, Application, and Data tiers. The main tools used were the MERN stack, comprising MongoDB, Express, React, and Node.</p>
                    <p className='text-xl'>I chose this stack for its scalability and quick development as well as it's popularity among developers, which makes it easier to obtain the necessary information.</p>
                    <h4 className='font-bold text-xl'>2. Infrastructure:</h4>
                    <p className='text-xl'>As for the infrastructure setup, I first configured the Hostinger website to host the presentation pages, which users will interact with. Then, I set up a VPS (Virtual Private Server) to host email and database servers using Express.</p>
                    <h4 className='font-bold text-xl'>3. Security:</h4>
                    <p className='text-xl'>For enhanced security, I utilized Nginx to reverse-proxy requests to the servers. SSL(https) was essential for me. Hostinger Web Hosting provides free SSL certificates, eliminating the need for manual setup. All I had to do was associate my domain with the web hosting, and SSL was installed automatically.</p>
                    <h3 className='font-bold' >Challenges in Development:</h3>
                    <p className='text-xl'>The email and database servers, hosted on a VPS, were assigned to subdomains. This setup helped me avoid issues related to CORS (Cross-Origin Resource Sharing) .</p>
                    <p className='text-xl'>However, HTTPS communication presented a bit of a challenge. Even though the servers share the same domain (pocketgroovy), separate SSL certificates are needed for each subdomain unless you use wildcard or multi-domain certificates. Fortunately, <a className='outer' href="https://support.hostinger.com/en/articles/6865487-how-to-install-ssl-on-vps-using-certbot?irclickid=VjuR2qx3axyKTrVX642%3AL3f5UkHXCO2hky0ZUM0&irgwc=1&PID=95368" target='_blank'> Hostinger provided comprehensive documentation.</a> While the SSL installation wasn't automatic for these subdomains, their guidance saved me a lot of time and money.</p>
                    <h3 className="font-bold" >Infrastructure Diagram</h3>
                    <ImagePane imagePath={image} imageTitle='mern' />
                    <a className='text-base outer' href='https://github.com/pocketgroovy/portfolio' target="_blank" rel="noreferrer" > <img className='h-5 w-5' src={gituhubimgae} alt='Code in github' />  Check Code in Github</a>
                    <p> Please feel free to contat me!</p>

                    <Link className='font-bold' to='/contacts'>
                        <span className="flex"><i className="mr-2 fa-regular fa-message flex items-start" />CONTACTS</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
