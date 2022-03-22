import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const Login = ({ user, setUser }) => {
  let navigate = useNavigate();
  const handleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => err.message);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="home">
      <h2>Your motivation for today!</h2>
      <p> "Nothing is impossible. The word itself says I'm possible!" </p>
      <p>{"Welcome! Your Goals are waiting for you!"}</p>
      {/* <GoogleButton type="light" onClick={handleLogin} /> */}
    </div>
  );
};

export default Login;

// import { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";

// export default function Login({ setUser, user }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("", {
//       method: "POST",
//       body: JSON.stringify(),
//       headers: {
//         Accept: "applcation/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setUser(data.user))
//       .catch(alert);
//   };

//   useEffect(() => {
//     const localUser = localStorage.getItem("displayName");
//     console.log("localUser from LS", localUser);
//     if (localUser) setUser(localUser);
//   }, []);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         setUser(result.user);
//         history.push("/board");
//       })
//       .catch(alert);
//   };
//   const handleGoogleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         localStorage.setItem("displayName", result.user.displayName);
//         localStorage.setItem("profilePhoto", result.user.photoURL);
//         console.log("this is my result", result.user.displayName);
//         history.push("/board");
//       })
//       .catch(alert);
//   };
//   console.log("Here is my user from my parent app", user);
//   return (
//     <>
//       <section className="WelcomeBg">
//         <h1 className="glow">Welcome to Dream Board</h1>

//         <button className="google-signin" onClick={handleGoogleLogin}>
//           Sign in with Google
//         </button>
//       </section>
//     </>
//   );
// }
