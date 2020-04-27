import { gql } from 'apollo-boost';

export const GET_PROJECT = gql`
	query GetProject($id: ID) {
		getProject(id: $id) {
			name
			desc
			videoName
			videoUrl
			clientEmail
			createdAt
		}
	}
`;
