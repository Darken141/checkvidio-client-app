import React, { useState, useContext, useEffect } from 'react';
import { ProjectsContext } from '../../../../context/Projects';
import { useParams, useHistory } from 'react-router-dom';

import CustomInput from '../../../../components/input/input';
import CustomTextarea from '../../../../components/textarea/textarea';

import './project-page.styles.scss';

const ProjectPage = () => {
	const { id } = useParams();
	const history = useHistory();
	const { updateProject, projects } = useContext(ProjectsContext);
	const [ name, setName ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ videoName, setVideoName ] = useState('');
	const [ videoUrl, setVideoUrl ] = useState('');
	const project = projects.filter((prct) => prct.id === id);

	const handleUpdateProject = (e) => {
		e.preventDefault();
		updateProject(id, { name, desc, videoName, videoUrl });
		history.push('/dashboard');
	};

	useEffect(
		() => {
			setName(project[0].name);
			setDesc(project[0].desc);
			setVideoName(project[0].videoName);
			setVideoUrl(project[0].videoUrl);
		},
		[ project ]
	);

	return (
		<section id="project-page">
			<div className="project-container component">
				<CustomInput
					id="name"
					label="Názov projektu:"
					name={name}
					type="text"
					placeholder="Videoklip - R. Novák"
					value={name}
					handleChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="project-container component">
				<CustomInput
					id="video-name"
					label="Názov videa:"
					name={videoName}
					type="type"
					placeholder="render_00"
					value={videoName}
					handleChange={(e) => setVideoName(e.target.value)}
				/>
			</div>

			<div className="project-container component">
				<CustomInput
					id="video-url"
					label="Video URL:"
					name={videoUrl}
					type="text"
					placeholder="https://youtu.be/Hg77Rp-ykHE"
					value={videoUrl}
					handleChange={(e) => setVideoUrl(e.target.value)}
				/>
			</div>

			<div className="project-container component">
				<CustomTextarea
					label="Popis videa:"
					name="desc"
					rows="12"
					value={desc}
					placeholder="Video je v naprostom poriadku!"
					onChange={(e) => setDesc(e.target.value)}
					// handlePressKey={handlePressKey}
				/>
				<button onClick={(e) => handleUpdateProject(e)} className="custom-btn">
					Uložiť zmeny
				</button>
			</div>
		</section>
	);
};

export default ProjectPage;
