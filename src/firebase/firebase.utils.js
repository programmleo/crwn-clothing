import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBxq-TCg9nbatdSdflFsPkQDyzb5HZ0keg",
    authDomain: "crwn-db-3039c.firebaseapp.com",
    databaseURL: "https://crwn-db-3039c.firebaseio.com",
    projectId: "crwn-db-3039c",
    storageBucket: "crwn-db-3039c.appspot.com",
    messagingSenderId: "407158169806",
    appId: "1:407158169806:web:516a0d263aac17760eb09f",
    measurementId: "G-2KH1PTPM9B"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
