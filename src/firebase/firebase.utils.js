import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
const config = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const createUserProduction = async (productionName, userId, additionalData) => {
	if (!productionName) return;
	if (!userId) return;

	const userRef = firestore.doc(`/users/${userId}`);
	const userSnapShot = await userRef.get();

	if (!userSnapShot.exists) return;

	const productionRef = firestore.collection('productions');
	const newProdRef = productionRef.doc();

	try {
		await userRef.set({
			...userSnapShot.data(),
			production: newProdRef.id
		});
		await newProdRef.set({
			productionName,
			creator: userSnapShot.id,
			createAt: new Date(),
			...additionalData
		});
	} catch (error) {
		console.log(error);
	}

	return newProdRef;
};

export const getUserProduction = async (userId) => {
	if (!userId) return;
	const userRef = firestore.doc(`users/${userId}`);
	const userSnapshot = await userRef.get();
	if (!userSnapshot.exists) return;
	const { production } = userSnapshot.data();
	const productionRef = firestore.doc(`productions/${production}`);
	const prodSnapShot = await productionRef.get();
	if (!prodSnapShot.exists) return;
	return productionRef;
};

export const createVideoProject = async (productionId, videoProject) => {
	if (!productionId) return;
	if (!videoProject) return;

	const productionRef = firestore.doc(`productions/${productionId}`);
	const prodSnapShot = await productionRef.get();

	if (!prodSnapShot.exists) return;

	const projectRef = firestore.collection(`productions/${productionId}/projects`);
	const newProjectRef = projectRef.doc();

	try {
		newProjectRef.set(videoProject);
	} catch (error) {
		console.log(error);
	}
	return newProjectRef;
};

export const getVideoProjects = async (productionId) => {
	if (!productionId) return;

	const projectsRef = firestore.collection(`productions/${productionId}/projects`);
	const projectsSnapShot = await projectsRef.get();
	if (projectsSnapShot.empty) return;

	return projectsSnapShot;
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
