import Login from "./scenes/login";
import Dashboard from "./scenes/components/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./App.css";
import Header from "./scenes/components/Header";
import NewGoal from "./scenes/components/NewGoal";
import GoalCard from "./scenes/components/GoalCard";
const firebaseConfig = {
  apiKey: "AIzaSyC5nJgkvzf4oVYCBnJDAlHbnj_DJXiSWIw",
  authDomain: "glow-api-2.firebaseapp.com",
  projectId: "glow-api-2",
  storageBucket: "glow-api-2.appspot.com",
  messagingSenderId: "905233898991",
  appId: "1:905233898991:web:03d0d19b75a2ff75f86a1a",
};
const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [goals, setGoals] = useState("");
  useEffect(() => {
    fetch("https://glow-api-2.uc.r.appspot.com/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.log(err));
  }, []);

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
    <>
      <Header handleLogin={handleLogin} user={user} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Login user={user} setUser={setUser} />}
        />
        {/* <Route path="/home" element={<Dashboard user={user} />} /> */}
        <Route path="/home" element={<GoalCard goals={goals} />} />
        <Route path="/createGoal" element={<NewGoal setGoals={setGoals} />} />
      </Routes>
    </>
  );
}

export default App;
