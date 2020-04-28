import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

import { resolvers, typeDefs } from './graphql/resolvers';

const httpLink = new createHttpLink({
	uri: 'https://www.wavingsanta.com'
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			token: token ? `${token}` : ''
		}
	};
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	typeDefs,
	resolvers
});

client.writeData({
	data: {
		user: null,
		asideHidden: true,
		userMenuHidden: true,
		playedSeconds: 0,
		initialNotes: 0
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
