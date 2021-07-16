import React from 'react';

interface IProps {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

// Specific the component type with the props type: React.FC<IProps>

const List: React.FC<IProps> = ({ people }) => {

	// we can hover over the "renderList" to find its type: JSX.Element[]
	const renderList = (): JSX.Element[] =>
		people.map(({ name, age, url, note }) => (
			<li key={name} className='List'>
				<div className='List-header'>
					<img className='List-img' src={url} alt='' />
					<h2>{name}</h2>
				</div>
				<p>{age} years old</p>
				<p className='List-note'>{note}</p>
			</li>
		));

	return <ul>{renderList()}</ul>;
};

export default List;
