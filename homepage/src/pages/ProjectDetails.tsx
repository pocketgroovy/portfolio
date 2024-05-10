import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'
import AttributionTag from 'components/AttributionTag'
// import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import type { IAttribute } from 'types/iattribute'
import { useMediaQuery } from 'utils'

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

    //The 1st 'data' from usrQuery and the 2nd 'data' from Axios. useQuery returns results in 'data', Axios also put the response in 'data'.    
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
        <>
            {/* <Head title={fruit.name} /> */}
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
                        className='mt-2 text-6xl font-bold sm:mt-8'
                    >
                        {project.title}
                    </h1>
                    <h2 className='mt-3 text-xl text-gray-500 dark:text-gray-400'>
                        test
                    </h2>
                    <table className='mt-8 text-lg'>
                        <tbody>
                            test body
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
