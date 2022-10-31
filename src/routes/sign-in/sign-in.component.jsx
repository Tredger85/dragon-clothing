import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth'

import {
  auth,
  signInWithGooglePopup,
  createUseDocFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'

import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {
  useEffect( () => {
    async function fetchAuth () {
      const response = await getRedirectResult(auth)
      if(response){
        const userDocRef = await createUseDocFromAuth(response.user);
      }
    }
    fetchAuth()
  }, [])
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUseDocFromAuth(user);
  }

  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In With Redirect</button>
      <SignUp/>
    </div>
  )
}

export default SignIn
