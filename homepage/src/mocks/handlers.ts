import { http, HttpResponse } from 'msw'
import projects from './data/projects.json'

const handlers = [
	http.get('https://localhost:3660/pgprojects', () =>{
		return HttpResponse.json(projects)
	})
]

export default handlers
// src/mocks/handlers.js
// import { rest } from 'msw';
// import projects from './data/projects.json';

// const handlers = [
//   rest.get('https://localhost:3660/pgprojects', (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json(projects)
//     );
//   }),
// ];
// 
// export default handlers;
