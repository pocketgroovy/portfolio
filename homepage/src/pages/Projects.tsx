import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import backgroundVideo from '../media/video/dutch-park-flower.mp4'
import type { IProject } from 'types/iproject'
import Project from 'components/Project'
import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'
import { Link } from 'react-router-dom'

// Icon components using SVG
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Filter = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

export default function Projects(): ReactElement {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['projects'],
		queryFn: getProjects
	})

	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	const projects = data.data

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			{/* Enhanced Navigation Header */}
			<nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
				<div className="max-w-6xl mx-auto px-4 py-4">
					<div className="flex justify-between items-center">
						<Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
							PocketGroovy
						</Link>
						<div className="hidden md:flex space-x-8">
							<Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
							<Link to="/projects" className="text-cyan-400 font-semibold">Projects</Link>
							<Link to="/experience" className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</Link>
							<Link to="/service" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
							<Link to="/aboutMe" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
							<Link to="/contacts" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
						</div>
						{/* Mobile menu button */}
						<div className="md:hidden">
							<button className="text-gray-300 hover:text-white">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative py-20 px-4 overflow-hidden">
				{/* Background Video */}
				<div className="absolute inset-0 z-0">
					<video autoPlay loop muted className="w-full h-full object-cover opacity-20">
						<source src={backgroundVideo} type='video/mp4' />
					</video>
					<div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
				</div>

				<div className="relative z-10 max-w-6xl mx-auto text-center">
					<div className="mb-12">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
							My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
							Explore my portfolio of web applications, infrastructure solutions, and custom development projects
						</p>
						
						{/* Quick Stats */}
						<div className="flex justify-center space-x-8 mb-8">
							<div className="text-center">
								<div className="text-3xl font-bold text-cyan-400">100+</div>
								<div className="text-gray-400">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-purple-400">10+</div>
								<div className="text-gray-400">Technologies</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-emerald-400">10+</div>
								<div className="text-gray-400">Years</div>
							</div>
						</div>
					</div>

					{/* Project Categories */}
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{['All Projects', 'Web Apps', 'Infrastructure', 'AI/ML', 'WordPress'].map((category) => (
							<button
								key={category}
								className={`px-6 py-3 rounded-full border transition-all duration-300 ${
									category === 'All Projects'
										? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
										: 'border-gray-400 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid Section */}
			<section className="py-16 px-4 bg-slate-900/50">
				<div className="max-w-7xl mx-auto">
		
					{/* Projects Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
						{projects.map((project: IProject, index: number) => (
							<div key={project._id} className="group">
								<div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
									<Project project={project} index={index} />
								</div>
							</div>
						))}
					</div>

				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Like What You See?
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
						Ready to start your own project? Let's discuss how I can help bring your vision to life.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Link to="/contacts" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center">
							Start Your Project
							<svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
						
						<Link to="/service" className="px-8 py-4 border border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center">
							View Services
							<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>

					<div className="mt-8 text-gray-400">
						<p>📧 info@pocketgroovy.com • 🌍 Available worldwide</p>
					</div>
				</div>
			</section>
		</div>
	)
}