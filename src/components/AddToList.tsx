import React, { useState } from 'react';

const AddToList = () => {
	const [input, setInput] = useState({
		name: '',
		age: '',
		note: '',
		img: '',
	});

	const { name, age, note, img } = input;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='AddToList'>
			<input
				value={name}
				onChange={(e) => handleChange(e)}
				type='text'
				placeholder='Name'
				name='name'
				className='AddToList-input'
			/>
			<input
				value={age}
				onChange={(e) => handleChange(e)}
				type='text'
				placeholder='Age'
				name='age'
				className='AddToList-input'
			/>
			<input
				value={img}
				onChange={(e) => handleChange(e)}
				type='text'
				placeholder='Url'
				name='img'
				className='AddToList-input'
			/>
			<textarea
				value={note}
				onChange={(e) => handleChange(e)}
				placeholder='Note'
				name='note'
				className='AddToList-input'
			/>
		</div>
	);
};

export default AddToList;
