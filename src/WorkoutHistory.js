import React, { useState } from "react";
import axios from 'axios';

function WorkoutHistory() {
  const [history, setHistory] = useState([]);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [name, setName] = useState("");

  const handleClick = async () => {
    // API call to fetch workout history and update state
    const newWorkout = {
        email : "roes6117@colorado.edu"
    }
    const response = await axios.post('https://tvj9b1l42b.execute-api.us-east-2.amazonaws.com/beta-backend/getuserhistory',JSON.stringify(newWorkout));
    const jsonobj = await JSON.parse(response.data.body);
    await setSets(jsonobj.workout.sets);

    console.log(response);

  }

  return (
    <div>
      <h1>Workout History</h1>
      <button onClick={handleClick}>View History</button>
        {name!="" &&
            <li>
              roes6117@colorado.edu  {name}: {sets} sets - {reps} reps 
            </li>
}
    </div>
  );
}

export default WorkoutHistory;
