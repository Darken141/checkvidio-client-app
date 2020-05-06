import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

///////////////////////////////////////////////////////

//   import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
// 	apiKey: 'AIzaSyBKBBuIh-ctoHNzdpczrRpZBw0JLDRxQC4',
// 	authDomain: 'crown-db-7aa4a.firebaseapp.com',
// 	databaseURL: 'https://crown-db-7aa4a.firebaseio.com',
// 	projectId: 'crown-db-7aa4a',
// 	storageBucket: '',
// 	messagingSenderId: '68426761002',
// 	appId: '1:68426761002:web:dd26cdaf52ffec51'
// };

// export const createUserProfileDocument = async (userAuth, additionalData) => {
// 	if (!userAuth) return;

// 	const userRef = firestore.doc(`/users/${userAuth.uid}`);
// 	const snapShot = await userRef.get();

// 	if (!snapShot.exists) {
// 		const { displayName, email } = userAuth;
// 		const createdAt = new Date();

// 		try {
// 			await userRef.set({
// 				displayName,
// 				email,
// 				createdAt,
// 				...additionalData
// 			});
// 		} catch (error) {
// 			console.log('error creating user', error.message);
// 		}
// 	}
// 	return userRef;
// };

// firebase.initializeApp(config);

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey);
// 	console.log(collectionRef);

// 	const batch = firestore.batch();

// 	objectsToAdd.forEach((obj) => {
// 		const newDocRef = collectionRef.doc();
// 		console.log(newDocRef);
// 		batch.set(newDocRef, obj);
// 	});

// 	return await batch.commit();
// };

// export const convertCollectionsSnapshotToMap = (collections) => {
// 	const transformedCollection = collections.docs.map((doc) => {
// 		const { title, items } = doc.data();
// 		return {
// 			routeName: encodeURI(title.toLowerCase()),
// 			id: doc.id,
// 			title,
// 			items
// 		};
// 	});

// 	return transformedCollection.reduce((accumulator, collection) => {
// 		accumulator[collection.title.toLowerCase()] = collection;
// 		return accumulator;
// 	}, {});
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
