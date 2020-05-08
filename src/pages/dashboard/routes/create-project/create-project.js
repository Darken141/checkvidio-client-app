import React, { useState } from 'react';

import CustomInput from '../../../../components/input/input';
import CustomTextarea from '../../../../components/textarea/textarea';

const CreateProject = () => {
	const [ name, setName ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ videoName, setVideoName ] = useState('');
	const [ videoUrl, setVideoUrl ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<main id="create-project">
			<h1 className="heading">Vytvoriť project</h1>
			<form onSubmit={(e) => handleSubmit(e)} className="component">
				<CustomInput
					id="name"
					label="Názov projektu:"
					name={name}
					type="text"
					placeholder="Videoklip - R. Novák"
					value={name}
					handleChange={(e) => setName(e.target.value)}
				/>
				<CustomInput
					id="video-name"
					label="Názov videa:"
					name={videoName}
					type="type"
					placeholder="render_00"
					value={videoName}
					handleChange={(e) => setVideoName(e.target.value)}
				/>
				<CustomInput
					id="video-url"
					label="Video odkaz:"
					name={videoUrl}
					type="text"
					placeholder="https://youtu.be/Hg77Rp-ykHE"
					value={videoUrl}
					handleChange={(e) => setVideoUrl(e.target.value)}
				/>
				<CustomTextarea
					label="Popis k videu:"
					name="desc"
					rows="8"
					value={desc}
					placeholder="Vložte popis k videu..."
					onChange={(e) => setDesc(e.target.value)}
					// handlePressKey={handlePressKey}
				/>

				<button className="custom-btn" type="submit">
					Pridať
				</button>
			</form>
		</main>
	);
};

export default CreateProject;
