import Navbar from "./Components/navbar";
import tictoeimg from "./Components/imagestic.jpg"
import "./Components/styleCommon.css";
import Section from "./Components/section";
import { useEffect, useState } from "react";

const style1 = {
  display: "none",
};
const style2 = {
  display: "block",
};


const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  useEffect(() => {
    let name1 = prompt("Name of Player-1 please !");
    if (name1 == "") {
      name1 = "Unknown1";
    }

    let name2 = prompt("Name of Player-2 please !");
    if (name2 == "") {
      name2 = "Unknown2";
    }
    setName1(name1);
    setName2(name2);
  }, []);

  function startGame() {
    if (
      (name1 == "Unknown1" || name1 == null) &&
      (name2 == "Unknown2" || name2 == null)
      ) {
      setName1("Unknown1");
      setName2("Unknown2");
    } else if (name1 == "Unknown1" || name1 == null) {
      setName2("Unknown1");
    } else if (name2 == "Unknown2" || name2 == null) {
      setName2("Unknown2");
    }
  }
  return (
    <>
      {name1 && name2 ? (
        <>

          <h1 id="game" style={style1}>
            Lets Play TIC TAC TOE GAME !
          </h1>
        </>
      ) : (
        <>
        <img src={tictoeimg} alt="img"  id="tictoeimg"/>
          <button onClick={startGame} id="startGame" >Start Game</button>
          <h1 id="game" style={style2}>
            Lets Play TIC TAC TOE GAME !
          </h1>
        </>
      )}
      {name1 && name2 && (
        <>
          <Navbar />
          <Section
            player1={name1.split(" ")[0]+"1"}
            player2={ name2.split(" ")[0]+"2"}
          />
        </>
      )}
    </>
  );
};

export default App;
