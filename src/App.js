import "./App.css";
import Cards from "./components/Cards";
import Poster from "./components/Poster";
import Header from "./components/Header";
// import Header from "./components/Header/index";
// import Card from "./components/Cards";
// import React from "react";


function App() {
  // const [fruits, setFruits] = React.useState()
  // fetch('https://65b278df9bfb12f6eafddb92.mockapi.io/fruits').then((res) => res.json()).then((json) => console.log(json))
  return (
    <>
    <Header></Header>
    <Poster></Poster>
    <Cards></Cards>
    </>
  );
}

export default App;
