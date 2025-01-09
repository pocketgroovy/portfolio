import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'
import LoadingOrError from 'components/LoadingOrError'
import { ReactElement } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useMediaQuery } from 'utils'

export default function WordpressPaymentApp(): ReactElement {
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
                    <a href={project.image.author.url}  target="_blank">
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
                        <a className="text-blue-600" href={project.image.author.url}  target="_blank">{project.title} <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i></a><a className='text-sm' href={project.image.author.url} target="_blank">Open the Project Page</a>
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
                        <h3 className='font-bold' >Feature:</h3>
                        <p className='text-xl'>This WordPress application was developed from the ground up using the latest WordPress version with a MySQL database. Using WooCommerce, the website offers an online shopping experience. The WP Mail SMTP plugin enables visitors to use a contact page to communicate with the site owner.</p>
                        <h3 className='font-bold' >Challenges in Development:</h3>
                        <p className='text-xl'>Development and deployment of the webapp were remarkably smooth thanks to the use of a popular Content Management System (CMS). </p>
                        <p className='text-xl'>Compared to other development projects I've worked on, I encountered very few significant challenges.</p>
                        <p className='text-xl'>The only minor obstacle I faced was a limitation on the size of images that could be uploaded. However, this was easily resolved by adjusting the PHP and Nginx configurations to allow for larger file sizes.</p>
                        <p className='italic'> Please feel free to contat me!</p>

                        <Link className='font-bold' to='/contacts'>
                            <span className="flex"><i className="mr-2 fa-regular fa-message flex items-start" />CONTACTS</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
