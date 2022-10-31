import { initializeApp } from  'firebase/app'
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAadG6kgVcgiv68WUxLg66lGvJvWrR_l9w",
  authDomain: "dragonclothing-2488c.firebaseapp.com",
  projectId: "dragonclothing-2488c",
  storageBucket: "dragonclothing-2488c.appspot.com",
  messagingSenderId: "502956519973",
  appId: "1:502956519973:web:ebe42818bf488c459a85cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUseDocFromAuth = async (userAuth, additionalInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot.exists())

  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await setDoc( userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log("user creation error", error.message)
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
