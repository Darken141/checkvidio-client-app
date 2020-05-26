import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../../../context/Projects';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import OverviewCard from '../components/project-overview/overviewcard';
import Spinner from '../../../components/spinner/spinner.component';
import PopUp from '../../../components/pop-up/pop-up';
import CustomInput from '../../../components/input/input';

const Projects = () => {
	const { projects, loading, showEmailPopUp, selectedProjectUrl, sendingEmail, sendInviteEmail } = useContext(
		ProjectsContext
	);
	const [ email, setEmail ] = useState('');
	return (
		<main id="projects">
			<div className="heading__container">
				<h1 className="heading">Moje projekty</h1>
			</div>
			<div className="projects-list">
				<div className="project-overview__head ">
					<div className="project-overview__head-col ">#</div>
					<div className="project-overview__head-col ">Video</div>
					<div className="project-overview__head-col ">Popis</div>
					<div className="project-overview__head-col ">Možnosti</div>
				</div>
				{loading && <Spinner />}
				{projects.map(({ id, desc, videoName, videoUrl, name, showDropdownMenu }, idx) => (
					<OverviewCard
						key={id}
						id={id}
						idx={idx}
						desc={desc}
						videoName={videoName}
						videoUrl={videoUrl}
						name={name}
						showDropdownMenu={showDropdownMenu}
					/>
				))}

				{showEmailPopUp && (
					<PopUp>
						<CustomInput
							id="Email"
							label="E-mail klienta:"
							name={email}
							type="email"
							placeholder="client@email.com"
							value={email}
							handleChange={(e) => setEmail(e.target.value)}
						/>
						<button onClick={() => sendInviteEmail(email)} className="custom-btn">
							Odoslať
						</button>

						<div className="project-url ">
							<CustomInput
								id="url"
								label="Video odkaz"
								name="url"
								type="text"
								placeholder=""
								value={selectedProjectUrl}
								handleChange={() => {}}
							/>
							<CopyToClipboard text={selectedProjectUrl} onCopy={() => alert('Odkaz skopirovany')}>
								<button className="custom-btn">Kopírovať odkaz</button>
							</CopyToClipboard>
						</div>

						{sendingEmail && <Spinner />}
					</PopUp>
				)}

				{projects.length === 0 && (
					<div className="cta">
						<Link to="/dashboard/create-project">Pridať prvý projekt</Link>
					</div>
				)}
			</div>
		</main>
	);
};

export default Projects;
