import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./Post";
import Card from "./Card";
import PostFunction from "./PostFunction";
import StateInClass from "./State";

function App() {
  const Profile =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0Y9lLJH7IxGtVNEEbG6IQQJKTNmARO4Z2Q&s";
  const Profile2 =
    "https://static.thairath.co.th/media/Dtbezn3nNUxytg04aiHu0GshMALAXxhmtDRESPFLuKiupp.jpg";
  return (
    <>
      <Post />
      <Card name="Krit" profile={Profile} />
      <br></br>
      <Card name="Boom" profile={Profile2} />
      <PostFunction />
      <StateInClass name={'Ifluk'} Counter="0"/>
    </>
  );
}

export default App;
