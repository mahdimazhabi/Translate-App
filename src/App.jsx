import { useRoutes } from "react-router-dom";
import contextApi from "./context/contextApi";
import { useState } from "react";
import allRoute from "./routes";

const App = () => {
  const [count, setCount] = useState("");
  const route = useRoutes(allRoute);
  console.log(count);
  return (
    <contextApi.Provider value={{ count, setCount }}>
      {route}
    </contextApi.Provider>
  );
};

export default App;
