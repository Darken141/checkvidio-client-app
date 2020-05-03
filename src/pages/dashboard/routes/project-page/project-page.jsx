import React, { useState, useEffect } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PROJECT, DELETE_PROJECT, DELETE_PROJECT_NOTES } from '../../../../graphql/queries';
import { useParams, useHistory, Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import EmailForm from '../../../../components/email-form/email-form';
import CustomInput from '../../../../components/input/input';
import CustomTextarea from '../../../../components/textarea/textarea';

import Spinner from '../../../../components/spinner/spinner.component';

import './project-page.styles.scss';

const ProjectPage = ({ updateProject }) => {
	const history = useHistory();
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });
	const [ deleteProject ] = useMutation(DELETE_PROJECT);
	const [ deleteProjectNotes ] = useMutation(DELETE_PROJECT_NOTES);
	const [ name, setName ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ videoName, setVideoName ] = useState('');
	const [ videoUrl, setVideoUrl ] = useState('');
	const [ toggleEmailForm, setToggleEmailForm ] = useState(false);
	const url = `https://www.app.checkvid.io/video/${id}`;

	const handleDeleteProject = () => {
		let r = window.confirm('Chcete odstranit tento projekt?');
		if (r) {
			deleteProject({ variables: { id }, refetchQueries: [ 'GetUserProjects' ] });
			deleteProjectNotes({ variables: { id } });
			history.push('/');
		}
	};

	useEffect(
		() => {
			if (data) {
				setName(data.getProject.name);
				setDesc(data.getProject.desc);
				setVideoName(data.getProject.videoName);
				setVideoUrl(data.getProject.videoUrl);
				console.log('hop');
			}
		},
		[ data ]
	);

	useEffect(
		() => {
			return () => {
				console.log('unmount');
			};
		},
		[ id ]
	);

	if (loading) return <Spinner />;
	if (error) return <div>Nieco sa pokazilo...</div>;
	if (data) {
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

				<div className="project-options">
					<Link to={`${id}/send-email`} className="send-email icon">
						<IoIosMail />
					</Link>
					<div className="delete-project icon" onClick={handleDeleteProject}>
						<FaRegTrashAlt />
					</div>
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
					<button
						className="custom-btn"
						onClick={() =>
							updateProject({
								variables: { id, name, desc, videoName, videoUrl },
								refetchQueries: [ 'GetProject', 'GetUserProjects' ]
							})}
					>
						Uložiť zmeny
					</button>
				</div>

				{toggleEmailForm ? <EmailForm setToggleEmailForm={setToggleEmailForm} projectId={id} /> : null}
			</section>
		);
	}

	return <div>Nenasiel sa ziaden projekt</div>;
};

export default ProjectPage;
