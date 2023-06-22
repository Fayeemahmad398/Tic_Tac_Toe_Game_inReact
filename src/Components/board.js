import { useState } from "react";
import React, { useRef } from "react";
import msgtone from "./SmsSound.mp3";
import celebratetone from "./Congratulations.mp3";
import SqaureBox from "./square";
import { ToastContainer, toast } from "react-toastify";
import ShowGameDetails from "./ShowGameDetails";
import "react-toastify/dist/ReactToastify.css";
let player1_ = 0;
let player2_ = 0;

const Board = (props) => {
  // console.log(props);

  const [arrOfXAndO, setarrOfXAndO] = useState(new Array(9).fill(null));
  const [Player, setPlayer] = useState(props.player1);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [rounds, setRounds] = useState(6);
  const [gameOver, setGameover] = useState("");
  const [celebrate, setCelebration] = useState(false);
  const [winner, setWinner] = useState("");

  function playSound(){
    new Audio(msgtone).play();
  }
  function playSoundCelebration(){
    new Audio(celebratetone).play();
  }

  function checkWinnerPerson() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let checker = 0;
    for (let comboIndexs of winConditions) {
      checker++;
      //Array deStructuring

      const [i, j, k] = comboIndexs;

      if (
        arrOfXAndO[i] != null &&
        arrOfXAndO[i] === arrOfXAndO[j] &&
        arrOfXAndO[i] === arrOfXAndO[k]
      ) {
        if (arrOfXAndO[i] === props.player1) {
          console.log(props.player1);
          return props.player1;
        } else if (arrOfXAndO[i] === props.player2) {
          console.log(props.player2);
          return props.player2;
        }
      } else {
        if (checker === 8 && !arrOfXAndO.includes(null)) {
          console.log("draw");
          return "Draw";
        } else {
        }
      }
    }
  }

  function celebrateVictory(winner) {
    // Call the function to play the celebration tone
    playSoundCelebration();
    toast(`"Congratulations ${winner} You have won the match`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      style: {
        backgroundColor: `green`,
        color: "white",
      },
    });

    if (winner == props.player1) {
      setTimeout(() => {
        toast(`${props.player2} You Lost ,Best Of Luck for the  next Time`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: false,
          style: {
            backgroundColor: `red`,
            color: "white",
          },
        });
      }, 1000);
    } else {
      setTimeout(() => {
        toast(` ${props.player1} You lost , Best of Luck for the next Time`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: false,
          style: {
            backgroundColor: `red`,
            color: "white",
          },
        });
      }, 2000);
    }
    player1_ = 0;
    player2_ = 0;
    setGameover("GAME OVER !");
    setWinner(winner);
    setCelebration(true);
  }
  function drawMatch() {
    toast(`Match DRAW  ,Start Again by clicking on Restart Button`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      style: {
        backgroundColor: `yellow`,
        color: "black",
      },
    });
  }

  function handleClickOnBox(index) {
    playSound();
    if (arrOfXAndO[index] == null) {
      if (Player === props.player1) {
        arrOfXAndO[index] = props.player1;
        let newarr = [...arrOfXAndO];
        setarrOfXAndO(newarr);
        setPlayer(props.player2);
      } else {
        arrOfXAndO[index] = props.player2;
        let newarr = [...arrOfXAndO];
        setarrOfXAndO(newarr);
        setPlayer(props.player1);
      }

      console.log("checkwinner");
      let result = checkWinnerPerson();

      if (result == props.player1) {
        player1_++;
        setScore1(score1 + 10);
        setRounds(rounds - 1);

        setarrOfXAndO(new Array(9).fill(null));

        if (player1_ == 3) {
          celebrateVictory(props.player1);
          player1_ = 0;
        }
      } else if (result == props.player2) {
        player2_++;
        setRounds(rounds - 1);
        setScore2(score2 + 10);
        setarrOfXAndO(new Array(9).fill(null));

        if (player2_ == 3) {
          celebrateVictory(props.player2);
          player2_ = 0;
        }
      } else if (result == "Draw") {
        drawMatch();
        player2_ = 0;
        player1_ = 0;

        handleState();
      }
    }
  }

  
  function handleState() {
    setarrOfXAndO(new Array(9).fill(null));
    setScore1(0);
    setScore2(0);
    setRounds(6);
    setGameover("");
    setCelebration(false);
    setWinner("");
  }

  return (
    <div id="section">
      <div id="board">
        {celebrate && <p id="emoji">🎆 🎇 🎉 🎊 &#x1F603;</p>}
        {winner && <h1 id="winner">Winner:{winner}</h1>}
        <h1 id="gameover">{gameOver}</h1>
        <div className="row">
          <h2 id="turn">TURN:{Player}</h2>
          <SqaureBox
            value={arrOfXAndO[0]}
            setArrOfXAndO={() => {
              handleClickOnBox(0);
             
            }}
            className={arrOfXAndO[0]}
          />
          <SqaureBox
            value={arrOfXAndO[1]}
            setArrOfXAndO={() => {
              handleClickOnBox(1);
            }}
            className={arrOfXAndO[1]}
          />
          <SqaureBox
            value={arrOfXAndO[2]}
            setArrOfXAndO={() => {
              handleClickOnBox(2);
            }}
            className={arrOfXAndO[2]}
          />
        </div>

        <div className="row">
          <SqaureBox
            value={arrOfXAndO[3]}
            setArrOfXAndO={() => {
              handleClickOnBox(3);
            }}
            className={arrOfXAndO[3]}
          />
          <SqaureBox
            value={arrOfXAndO[4]}
            setArrOfXAndO={() => {
              handleClickOnBox(4);
            }}
            className={arrOfXAndO[4]}
          />
          <SqaureBox
            value={arrOfXAndO[5]}
            className={arrOfXAndO[5]}
            setArrOfXAndO={() => {
              handleClickOnBox(5);
            }}
          />
        </div>
        <div className="row">
          <SqaureBox
            value={arrOfXAndO[6]}
            setArrOfXAndO={() => {
              handleClickOnBox(6);
            }}
            className={arrOfXAndO[6]}
          />
          <SqaureBox
            value={arrOfXAndO[7]}
            setArrOfXAndO={() => {
              handleClickOnBox(7);
            }}
            className={arrOfXAndO[7]}
          />
          <SqaureBox
            value={arrOfXAndO[8]}
            setArrOfXAndO={() => {
              handleClickOnBox(8);
            }}
            className={arrOfXAndO[8]}
          />
        </div>
      </div>
      <ShowGameDetails
        player1={props.player1}
        player2={props.player2}
        updateState={() => {
          handleState();
        }}
        score1={score1}
        score2={score2}
        rounds={rounds}
      />

      <ToastContainer />
    </div>
  );
};
export default Board;
