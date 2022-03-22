import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import NewGoal from "./NewGoal";
import GoalCard from "./GoalCard";

const Dashboard = ({ user }) => {
  const [goals, setGoals] = useState("");
  // useEffect(() => {
  //   fetch("http://localhost:3002/goals")
  //     .then((res) => res.json())
  //     .then((data) => setGoals(data))
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(user);
  return (
    <>
      <Container maxWidth="md">
        {/* <nav className="navbar">
          <h1>GoalUp and GlowUp </h1>
          <div className="links">
            <a
              href="/"
              style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px",
              }}
            >
              Log out
            </a>
          </div>
        </nav> */}
        <GoalCard goals={goals} />
      </Container>
    </>
  );
};

export default Dashboard;
