import { gql } from 'apollo-boost';

export const typeDefs = gql`
	extend type Mutation {
		SetUser(user: String): String
	}
`;

const GET_USER = gql`
	{
		user @client
	}
`;

export const resolvers = {
	Mutation: {
		setUser: (_, { user }, { cache }) => {
			cache.writeQuery({
				query: GET_USER,
				data: { user }
			});
		}
	}
};
