import React, { createContext, useState, useEffect } from 'react';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import Spinner from '../components/spinner/spinner.component';

export const UserContext = createContext({
	currentUser: null
});

export const UserProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ pending, setPending ] = useState(true);

	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			setPending(false);
		});

		return () => unsubscribeFromAuth();
	}, []);

	if (pending) return <Spinner />;

	return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};
