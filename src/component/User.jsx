import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Name: Utsav Goyal</h2>
      <h3>Location: Mathura</h3>
      <h3>Contact: utsav28feb@gmail.com</h3>
    </div>
  );
};

export default User;
