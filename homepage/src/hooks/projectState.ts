// import getProjects from 'api/getProjects';
// import { useState, useEffect } from 'react';
// import { IProject } from 'types/iproject';

// function projectStates() {

//     const [projects, setProjects] = useState<IProject[]>([])
//     const [err, setErr] = useState<Error>()

//     async function fetchProjects() {
//         await getProjects()
//             .then(results => {
//                 console.log('setting projects ' + results.data)
//                 setProjects(results.data)
//             }
//             )
//             .catch(err => {
//                 setErr(err)
//                 console.log(err)
//             }
//             )
//     }

//     useEffect(() => {
//         {projects ?
//         fetchProjects():''}
//     }, [])

//     console.log(projects + ' <== projects in hook projectState')
//     return {
//         values: {
//             projects,
//             err
//         },
//         actions: {
//             setProjects,
//             setErr
//         }
//     };
// }
// export default projectStates;
