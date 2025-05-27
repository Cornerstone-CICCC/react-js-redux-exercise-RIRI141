import { useDispatch, useSelector } from "react-redux";
import { incrementAge, decrementAge } from "./userSlice";
import { useState } from "react";

type UserState = {
  user: {
    firstname: string;
    lastname: string;
    age: number;
  };
};

const User = () => {
  const [fnameInput, setFnameInput] = useState<string>("");
  const [lnameInput, setLnameInput] = useState<string>("");

  const age = useSelector((state: UserState) => state.user.age);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>User Info</h2>
      
        <h3>
          {fnameInput} {lnameInput}
        </h3>
        <h3>{age}</h3>
      <div>
        <button onClick={() => dispatch(decrementAge())}>Decrement Age</button>
        <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
        <input
          type="text"
          value={fnameInput}
          onChange={(e) => setFnameInput(e.target.value)}
          placeholder="Enter Your Firstname"
        />
        <input
          type="text"
          value={lnameInput}
          onChange={(e) => setLnameInput(e.target.value)}
          placeholder="Enter Your Lastname"
        />
      </div>
    </div>
  );
};

export default User;
