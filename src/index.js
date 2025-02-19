import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/Auth';
import { HeaderProvider } from './context/Header';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<UserProvider>
		<HeaderProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</HeaderProvider>
	</UserProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
