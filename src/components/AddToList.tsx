import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
	people: Props['people'];
	setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		age: '',
		note: '',
		url: '',
	});

	const { name, age, note, url } = input;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	const handleClick = (): void => {
		if (!input.name || !input.age || !input.url) return;

		const newPerson = {
			name: input.name,
			age: parseInt(input.age),
			url: input.url,
			note: input.note,
		};
		setPeople([...people, newPerson]);

		setInput({ name: '', age: '', note: '', url: '' });
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
				type='number'
				placeholder='Age'
				name='age'
				className='AddToList-input'
			/>
			<input
				value={url}
				onChange={(e) => handleChange(e)}
				type='text'
				placeholder='Url'
				name='url'
				className='AddToList-input'
			/>
			<textarea
				value={note}
				onChange={(e) => handleChange(e)}
				placeholder='Note'
				name='note'
				className='AddToList-input'
			/>
			<button className='AddToList-btn' onClick={handleClick}>
				Add to List
			</button>
		</div>
	);
};

export default AddToList;
