import React from "react";
import "./App.css";
import createBook from "./components/createBook";
import GetAllBook from "./components/getBook";
const App = () => {
  return (
    <>
      <h1>App Component</h1>
      <createBook/>
      <GetAllBook/>
    </>
  );
};

export default App;
