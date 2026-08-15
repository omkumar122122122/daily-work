import { useEffect, useState } from "react";
import {CreateBrouserRouter,RouterProvider} from "react-router-dom"

const App = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const fetchData1 = async () => {
    const response = await fetch("http://localhost:3000/users1");
    setData1(await response.json());
  };

  const fetchData2 = async () => {
    const response = await fetch("http://localhost:3000/users2");
    setData2(await response.json());
  };

  const fetchData3 = async () => {
    const response = await fetch("http://localhost:3000/users3");
    setData3(await response.json());
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      {data1.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
      <h2>skills</h2>

      {data2.map((item) => (
        <div key={item.id}>
          <p>{item}</p>
        </div>
      ))}
      <h2>projects</h2>

      {data3.map((item) => (
        <div key={item.id}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default App;