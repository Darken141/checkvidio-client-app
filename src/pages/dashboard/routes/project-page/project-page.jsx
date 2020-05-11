import React, { useState, useContext } from 'react';
import { ProjectsContext } from '../../../../context/Projects';
import { useParams, Link, useHistory } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CustomInput from '../../../../components/input/input';
import CustomTextarea from '../../../../components/textarea/textarea';

import './project-page.styles.scss';

const ProjectPage = () => {
	const { id } = useParams();
	const history = useHistory();
	const { updateProject } = useContext(ProjectsContext);
	const [ name, setName ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ videoName, setVideoName ] = useState('');
	const [ videoUrl, setVideoUrl ] = useState('');
	const url = `https://www.app.checkvid.io/video/${id}`;

	const handleUpdateProject = (e) => {
		e.preventDefault();
		updateProject(id, { name, desc, videoName, videoUrl });
		history.push('/dashboard');
	};

	return (
		<section id="project-page">
			<div className="project-header component">
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

			<div className="project-url component">
				<CustomInput
					id="url"
					label="Video odkaz"
					name="url"
					type="text"
					placeholder=""
					value={url}
					handleChange={() => {}}
				/>
				<CopyToClipboard text={url} onCopy={() => alert('Odkaz skopirovany')}>
					<span>Kopirovat odkaz</span>
				</CopyToClipboard>
			</div>

			<div className="project-body component">
				<CustomInput
					id="video-url"
					label="Video URL:"
					name={videoUrl}
					type="text"
					placeholder="https://youtu.be/Hg77Rp-ykHE"
					value={videoUrl}
					handleChange={(e) => setVideoUrl(e.target.value)}
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
