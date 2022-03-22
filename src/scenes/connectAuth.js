import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5nJgkvzf4oVYCBnJDAlHbnj_DJXiSWIw",
  authDomain: "glow-api-2.firebaseapp.com",
  projectId: "glow-api-2",
  storageBucket: "glow-api-2.appspot.com",
  messagingSenderId: "905233898991",
  appId: "1:905233898991:web:03d0d19b75a2ff75f86a1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
export default getAuth;
