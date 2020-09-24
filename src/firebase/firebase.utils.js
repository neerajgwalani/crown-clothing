import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCeUKjxqyZbcDbH5De2q9xqpQlc-LOPNPk",
    authDomain: "crwn-db-f3352.firebaseapp.com",
    databaseURL: "https://crwn-db-f3352.firebaseio.com",
    projectId: "crwn-db-f3352",
    storageBucket: "crwn-db-f3352.appspot.com",
    messagingSenderId: "164460450280",
    appId: "1:164460450280:web:65557acc3dfb3a5253545d"
  };
  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
  
    const userRef = firestore.doc(`Users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log("Error creating a user", error.message);
      }
    }
  
    return userRef;
  
  }
  
  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;