// Feedback.js

export default function Feedback() {
	return(
		<div className=" m-10 experience-task-style float-left border-2 p-2 
						rounded-xl shadow-xl text-xl">
			<form>
				<p className="text-2xl"> Contact Form</p>
				<div>
					<label className="text-sm">Select Category</label>
					<br></br>
					<select className="bg-gray-50 border border-gray-300 
										text-gray-600 text-sm rounded-lg 
										focus:border-blue-500 w-full p-2.5">
						<option value="Feedback" >
							-- Select Your Query --
						</option>
						<option value="Feedback" >
							General Question
						</option>
						<option value="Feedback">
							Induiry About Service
						</option>
						<option value="Feedback">
							Something Else
						</option>
		
					</select>
					<br></br>
					<label className="text-sm">Email Address*</label>
					<br></br>
					<input className="bg-gray-50 border border-gray-300 
										text-sm rounded-lg focus:border-blue-500
										w-full p-2.5"
							type="email"
							placeholder="your@email.com"/>
					<br></br>
					<label className="text-sm">
						Message
					</label>
					<br></br>
					<textarea className="bg-gray-50 border border-gray-300 
											text-sm rounded-lg 
											focus:border-blue-500 
											w-full p-2.5"
								>
					</textarea>
					<br></br>
					<button className="bg-blue-500 hover:bg-blue-700 
										text-white font-bold 
										py-2 px-4 rounded"
							type="button">
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
