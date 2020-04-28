import React, { useState } from 'react';

import CustomRadiobox from '../../../../components/radiobox/radiobox';
import CustomTextarea from '../../../../components/textarea/textarea';
import TimeInput from '../time-input/time-input';
import Duration from '../../../../utils/duration';
import { useParams } from 'react-router-dom';
import { GET_PLAYED_SECONDS } from '../../../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { IoMdSend } from 'react-icons/io';

import './note-form.styles.scss';

const NoteForm = ({ addNote }) => {
	const { id } = useParams();
	const [ option, setOption ] = useState('actual');
	const [ note, setNote ] = useState('');
	const [ min, setMin ] = useState('');
	const [ sec, setSec ] = useState('');
	const { data: { playedSeconds } } = useQuery(GET_PLAYED_SECONDS);

	const radioboxes = [
		{
			id: 1,
			label: 'Aktuálny',
			type: 'radio',
			name: 'actual',
			handleChange: () => setOption('actual')
		},
		{
			id: 2,
			label: 'Žiadny',
			type: 'radio',
			name: 'notime',
			handleChange: () => setOption('notime')
		},
		{
			id: 3,
			label: 'Vlastny',
			type: 'radio',
			name: 'custom',
			handleChange: () => setOption('custom')
		}
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		if (option === 'actual') {
			addNote({ variables: { time: playedSeconds, note, projectId: id }, refetchQueries: [ 'GetProjectNotes' ] });
		}
		if (option === 'notime') {
			addNote({ variables: { time: 0, note, projectId: id }, refetchQueries: [ 'GetProjectNotes' ] });
		}
		if (option === 'custom') {
			addNote({
				variables: { time: handleCustomTime(min, sec), note, projectId: id },
				refetchQueries: [ 'GetProjectNotes' ]
			});
		}
	};

	const handleCustomTime = (min, sec) => {
		let time = Number(min) * 60;
		time = time + Number(sec);
		return time;
	};

	return (
		<form className="note-form" onSubmit={(e) => handleSubmit(e)}>
			<label className="note-form__label">Zvolte čas:</label>
			<div className="note-form__radioboxes">
				{radioboxes.map(({ id, ...props }) => <CustomRadiobox key={id} option={option} {...props} />)}
			</div>
			<div className="note-form__time-format">
				{option === 'notime' ? null : option === 'actual' ? (
					<div className="actual-time">
						Čas:{' '}
						<span>
							<Duration seconds={playedSeconds} />
						</span>
					</div>
				) : (
					<div className="custom-time">
						<TimeInput
							type="number"
							name="radio"
							min={min}
							sec={sec}
							placeholder="0"
							handleMinChange={(e) => setMin(e.target.value)}
							handleSecChange={(e) => setSec(e.target.value)}
						/>
					</div>
				)}
			</div>
			<CustomTextarea
				label="Vaša poznámka:"
				name="note"
				rows="8"
				value={note}
				placeholder="Video je v naprostom poriadku!"
				onChange={(e) => setNote(e.target.value)}
				// handlePressKey={handlePressKey}
			/>
			<button className="custom-btn">
				Odoslat{' '}
				<div className="send-icon">
					<IoMdSend />
				</div>
			</button>
		</form>
	);
};

export default NoteForm;
