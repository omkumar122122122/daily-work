import React, { useEffect, useState } from "react";

function Profiles() {
  const [users, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");

      const data = await response.json();

      setdata(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      
    </div>
  );
}

export default Profiles;