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
