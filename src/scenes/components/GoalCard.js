import * as React from "react";
import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewGoal from "./NewGoal";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );

export default function GoalCard({ goals }) {
  const navigate = useNavigate();
  console.log(goals);
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {goals.map((goal, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <Typography variant="h5" component="div">
                  {goal.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {goal.title}
                </Typography>
                <Typography variant="body2">
                  {goal.description}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Checkin</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button onClick={() => navigate("/createGoal")}>Create Goal</Button>
    </>
  );
}
//     goals.map((goal) => {
//       return (
//         <Card sx={{ maxWidth: 300  }}>
//           <CardContent>
//             <Typography
//               sx={{ fontSize: 14 }}
//               color="text.secondary"
//               gutterBottom
//             ></Typography>
//             <Typography variant="h5" component="div">
//               {goal.goalName}
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//               your goal!
//             </Typography>
//             <Typography variant="body2">
//               Taking up Space
//               <br />
//               {'"Check in at least 16 times"'}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       );
//     })}
//     </>
//   );
