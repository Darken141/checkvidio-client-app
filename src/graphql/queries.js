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

export const GET_PLAYED_SECONDS = gql`
	{
		playedSeconds @client
	}
`;
