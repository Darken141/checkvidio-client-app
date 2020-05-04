import { gql } from 'apollo-boost';

export const GET_PROJECT = gql`
	query GetProject($id: ID) {
		getProject(id: $id) {
			name
			desc
			videoName
			videoUrl
			createdAt
			createdBy
		}
	}
`;

export const UPDATE_PROJECT = gql`
	mutation UpdateProject($id: ID, $name: String, $desc: String, $videoName: String, $videoUrl: String) {
		updateProject(id: $id, name: $name, desc: $desc, videoName: $videoName, videoUrl: $videoUrl) {
			_id
		}
	}
`;

export const DELETE_PROJECT = gql`
	mutation DeleteProject($id: ID) {
		deleteProject(id: $id) {
			_id
			name
			desc
			videoName
			videoUrl
			createdBy
			createdAt
		}
	}
`;

export const DELETE_PROJECT_NOTES = gql`
	mutation DeleteProjectNotes($id: ID) {
		deleteProjectNotes(id: $id) {
			_id
		}
	}
`;

export const GET_PLAYED_SECONDS = gql`
	{
		playedSeconds @client
	}
`;

export const GET_PROJECT_NOTES = gql`
	query GetProjectNotes($id: ID) {
		getProjectNotes(id: $id) {
			_id
			time
			note
			isDone
		}
	}
`;

export const DELETE_NOTE = gql`
	mutation DeleteNote($id: ID) {
		deleteNote(id: $id) {
			_id
			time
			note
			isDone
			projectId
		}
	}
`;

export const TOGGLE_IS_DONE = gql`
	mutation ToggleIsDone($id: ID) {
		toggleIsDone(id: $id) {
			isDone
		}
	}
`;
