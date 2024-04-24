
export default function Card() {
	return (
		<div >
			<div className="font-ubuntu font-semibold float-center text-xl
							rounded-xl bg-white bg-clip-border 
							text-gray-700 shadow-2xl antialiased">
				<div className="p-6">
					<h5 className="text-left">
						Feel free to reach me at
					</h5>
					<ul>
						<li className="m-5 text-center">
							<span><i className="fa-solid fa-envelope" ></i> </span>
							<span>info@pocketgroovy.com</span>
						</li>
						<p className="text-left">
						or use the contact form below
					</p>
					</ul>
				</div>
			</div>
		</div>
	)
}