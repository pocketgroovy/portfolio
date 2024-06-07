import type { ChangeEvent, FormEvent, ReactElement } from 'react';
import { useState } from 'react';


export default function ContactForm(): ReactElement {
	const [emailForm, setEmailForm] = useState({
		subject: '',
		username: '',
		email: '',
		message: '',
	});

	//Result if message was sent or not 
	const [result, setResult] = useState('');

	//Status of while message is being sent 
	const [status, setStatus] = useState('Submit');

	const resetEmailForm = () => {
		setEmailForm({ subject: '', username: '', email: '', message: '' });
	}

	const handleEmailFormChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.persist();
		const target = event.target;
		const name = target.name;
		setEmailForm((prevEmailData) => {
			return {
				...prevEmailData,
				[name]: target.value
			};
		});

		if (result.length > 0) {
			setResult('');
		}
	}

	const onHandleEmailMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.persist();
		const target = event.target;
		const name = target.name;
		setEmailForm((prevEmailData) => {
			return {
				...prevEmailData,
				[name]: target.value
			};
		});

		if (result.length > 0) {
			setResult('');
		}
	}

	const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setResult('');
		e.preventDefault();
		setStatus('Sending...');
		const target = e.currentTarget;

		const details = {
			subject: target.subject.value,
			username: target.username.value,
			email: target.email.value,
			message: target.message.value
		};

		try {
			let response = await fetch('https://mail.pocketgroovy.com/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(details),
			});
			let responseResult = await response.json();

			if (responseResult.status === 'success') {
				setResult('Message Sent!');
				resetEmailForm();
			} else if (responseResult.status === 'fail') {
				alert('Uh oh! Message failed to send.');
			}
		} catch (error) {
			console.error(error);
			setResult('Sorry! We are experiencing some issues with submitting message.');
		} finally{
			setStatus('Submit');
		}
	};
	return (
		<div className="p-1 font-ubuntu float-center
						rounded-xl shadow-2xl bg-white bg-clip-border  ">
			<form id='contact-form' className='form'
				onSubmit={onHandleSubmit}
				method='POST'>
				<label className="text-2xl"> Contact Form
					<div>
						<label className="text-sm">Select Category
							<br/>
							<select name='subject' className="contact-input" required>
								<option value="">
									-- Select Your Query --
								</option>
								<option value="General Question" >
									General Question
								</option>
								<option value="Service">
									Induiry About Service
								</option>
								<option value="others">
									Something Else
								</option>
							</select>
						</label>
						<br/>
						<div>
							<label className="text-sm">Name
								<input name='username' className="contact-input"
									type="name"
									placeholder="your name"
									required={true}
									value={emailForm.username}
									onChange={handleEmailFormChange}
								/>
							</label>
						</div>
						<label className="text-sm">
							Email Address
							<input name='email' className="contact-input"
								type="email"
								placeholder="your@email.com"
								required={true}
								value={emailForm.email}
								onChange={handleEmailFormChange} />
						</label>
						<br/>
						<label className="text-sm">
							Message
							<textarea name='message' className="contact-input"
								maxLength={300}
								placeholder='message (max 300 characters)*'
								required={true}
								value={emailForm.message}
								onChange={onHandleEmailMessageChange}
							/>
						</label>
						<br/>
						<button className="m-2 bg-blue-500 hover:bg-blue-700 
										text-white font-bold 
										py-2 px-4 rounded"
							type="submit">
							{status}
						</button>
						<h3 className='text-black'>{result}</h3>
					</div>
				</label>
			</form>
		</div>
	)
}
