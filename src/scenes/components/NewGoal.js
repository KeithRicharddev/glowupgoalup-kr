import { TextField, Modal } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function NewGoal({ setGoals }) {
  const navigate = useNavigate();
  const [newGoal, setNewGoal] = useState();
  const handleButtonSubmit = (e) => {
    e.preventDefault();
    fetch("https://glow-api-2.uc.r.appspot.com/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then(() => {
        fetch("https://glow-api-2.uc.r.appspot.com/goals")
          .then((res) => res.json())
          .then((data) => setGoals(data))
          .then(navigate("/home"))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "60px" }}
    >
      <form
        onSubmit={(e) => {
          handleButtonSubmit(e);
        }}
      >
        <TextField
          style={{ display: "flex", flexDirection: "column", width: 220 }}
          id="outlined-basic"
          label="Name of Goal"
          type="text"
          variant="outlined"
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
        />
        &nbsp;
        <TextField
          style={{ display: "flex", flexDirection: "column", width: 220 }}
          type="text"
          label="Reward for yourself"
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
        />
        &nbsp;
        <TextField
          style={{ display: "flex", flexDirection: "column", width: 220 }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) =>
            setNewGoal({ ...newGoal, description: e.target.value })
          }
        />
        <button className="create-goal-btn">Create New Goal</button>
      </form>
    </div>
  );
}
