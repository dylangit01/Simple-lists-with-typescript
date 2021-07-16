import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
	people: Props['people'];
	setPeople: React.Dispatch<
		React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		age: '',
		note: '',
		img: '',
	});

	const { name, age, note, img } = input;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	const handleClick = (): void => {
		const newPerson = {
			name: input.name,
			age: input.age,
			url: input.img,
			note: input.note,
		};
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
			<button className='AddToList-btn' onClick={handleClick}>
				Add to List
			</button>
		</div>
	);
};

export default AddToList;
