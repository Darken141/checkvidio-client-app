import React from 'react';

import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import AsideNavBar from './aside-navbar';

const GET_ASIDE_HIDDEN = gql`
	{
		asideHidden @client
	}
`;

const AsideNavBarContainer = ({ projects }) => {
	const { data: { asideHidden } } = useQuery(GET_ASIDE_HIDDEN);
	const client = useApolloClient();

	const hideAside = () => {
		client.writeData({ data: { asideHidden: true } });
	};

	return <AsideNavBar projects={projects} asideHidden={asideHidden} hideAside={hideAside} />;
};

export default AsideNavBarContainer;
