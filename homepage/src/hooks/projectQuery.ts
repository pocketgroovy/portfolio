// import { useQuery } from "@tanstack/react-query"
// import getProjects from "api/getProjects"
// import { ReactElement } from "react"
// import { useParams, Navigate } from "react-router-dom"
// import LoadingOrError from '../components/LoadingOrError'
// import { IProject } from "types/iproject"


// export default function ProjectDetails(): any {
//     const { projectTitle } = useParams()

//     const { isPending, isError, error, data } = useQuery({
//         queryKey: ['projects'],
//         queryFn: getProjects
//     })
//     if (isPending || isError) {
//         return <LoadingOrError error={ error as Error } />
//     }

//     //The 1st 'data' from usrQuery and the 2nd 'data' from Axios. useQuery returns results in 'data', Axios also put the response in 'data'. 
//     const project = data.data.find(
//         aProject => aProject.title.toLowerCase() === projectTitle?.toLowerCase()
//     )

//     if (!project) {
//         return <Navigate to='/' replace />
//     }
//     return project
// }