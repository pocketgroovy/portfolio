// Card.js

export default function Card() {
	return (
		<div >
			<div className=" float-center
							rounded-xl bg-white bg-clip-border 
							text-gray-700 shadow-2xl">
				<div className="p-6">
					<h5 className="text-left
								experience-task-style text-xl 
								font-semibold text-blue-gray-900 
								antialiased">
						Reach Me At
					</h5>
					<ul>
						<li className="m-5 text-xl ">
							<span><i className="fa-solid fa-envelope" ></i> </span>
							<span>info@pocketgroovy.com</span>
						</li>
						<p className="text-left
								experience-task-style text-xl 
								font-semibold text-blue-gray-900 
								">
						or please use the contact form below
					</p>
					</ul>
				</div>
			</div>
		</div>
	)
}