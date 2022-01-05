import React from 'react';
import { CoursePart } from '../types';
import Part from './Part';

interface ContentProps {
	courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps) => {
	return (
		<div>
			{courseParts.map((coursePart: CoursePart) => (
				<Part key={coursePart.name} coursePart={coursePart} />
			))}
		</div>
	);
};

export default Content;
