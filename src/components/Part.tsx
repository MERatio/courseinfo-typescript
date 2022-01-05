import React from 'react';
import { CoursePart } from '../types';
import { assertNever } from '../helpers';

interface PartProps {
	coursePart: CoursePart;
}

const Part = ({ coursePart }: PartProps) => {
	switch (coursePart.type) {
		case 'normal':
			return (
				<p>
					<b>
						{coursePart.name} {coursePart.exerciseCount}
					</b>
					<br></br>
					<i>{coursePart.description}</i>
				</p>
			);
		case 'groupProject':
			return (
				<p>
					<b>
						{coursePart.name} {coursePart.exerciseCount}
					</b>
					<br></br>
					<i>project exercises {coursePart.groupProjectCount}</i>
				</p>
			);
		case 'submission':
			return (
				<p>
					<b>
						{coursePart.name} {coursePart.exerciseCount}{' '}
					</b>
					<br></br>
					<i>{coursePart.description}</i>
					<br></br>
					<span>submit to {coursePart.exerciseSubmissionLink}</span>
				</p>
			);
		case 'special':
			return (
				<p>
					<b>
						{coursePart.name} {coursePart.exerciseCount}
					</b>
					<br></br>
					<i>{coursePart.description}</i>
					<br></br>
					<span>required skills: {coursePart.requirements.join(',')}</span>
				</p>
			);
		default:
			return assertNever(coursePart);
	}
};

export default Part;
