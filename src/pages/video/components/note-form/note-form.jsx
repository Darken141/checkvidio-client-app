import React, { useState } from 'react';

import CustomRadiobox from '../../../../components/radiobox/radiobox';
import CustomTextarea from '../../../../components/textarea/textarea';
import TimeInput from '../time-input/time-input';
import Duration from '../../../../utils/duration';

import { IoMdSend } from 'react-icons/io';

import './note-form.styles.scss';

const NoteForm = () => {
	const [ option, setOption ] = useState('actual');
	const [ note, setNote ] = useState('');
	const [ min, setMin ] = useState('');
	const [ sec, setSec ] = useState('');
	const playedSeconds = 0;

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

	return (
		<form className="note-form">
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
