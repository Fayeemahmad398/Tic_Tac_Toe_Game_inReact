import { useState } from "react";
import SqaureBox from "./square";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let arrOfValidIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const Board = (props) => {
  const [arrOfXAndO, setarrOfXAndO] = useState(new Array(9).fill(null));
  const [Player, setPlayer] = useState(props.player);

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
    // console.log(newarr)
    let checker = 0;
    // console.log(newArr);
    for (let comboIndexs of winConditions) {
      checker++;
      //Array deStructuring

      const [i, j, k] = comboIndexs;

      if (
        arrOfXAndO[i] != null &&
        arrOfXAndO[i] === arrOfXAndO[j] &&
        arrOfXAndO[i] === arrOfXAndO[k]
      ) {
        // console.log(p++);
        if (arrOfXAndO[i] === props.player) {
          // console.log(props.player);
          return props.player;
        } else {
          console.log("Computer");
          return "Computer";
        }
      } else {
        if (!arrOfXAndO.includes(null)) {
          console.log("draw");
          return "Draw";
        } else {
          if (checker == 8 && isComputerTurn) {
            return "comeOnComputer";
          } else if (checker == 8) {
            return "user";
          }
        }
      }
    }
  }

  function celebrateVictory(winner) {
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

    if (winner == props.player) {
      setTimeout(() => {
        toast(`"I am the Computer, I will try for the next Time`, {
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
        toast(` ${props.player} You lost , Best of Luck for the next Time`, {
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
  }
  function deleteAIndex(index) {
    // arrOfValidIndexes.splice(index, 1);
    for (let i = 0; i < arrOfValidIndexes.length; i++) {
      if (index == arrOfValidIndexes[i]) {
        arrOfValidIndexes.splice(i, 1);
        break;
      }
    }
  }

  function comeOnComputer() {
    // setTimeout(() => {
    let index = Math.floor(Math.random() * arrOfValidIndexes.length);
    let validIndex = arrOfValidIndexes[index];
    // console.log(validIndex);
    deleteAIndex(validIndex);
    setComputerTurn(false);
    handleClickOnBox(validIndex);

    // arrOfXAndO[validIndex]=
    // }, 2000);
  }

  function handleClickOnBox(index) {
    if (arrOfXAndO[index] == null) {
      deleteAIndex(index);
      // if (Player === props.player) {
      if (isComputerTurn) {
        arrOfXAndO[index] = props.player;
        let newarr = [...arrOfXAndO];
        setarrOfXAndO(newarr);
        setPlayer("Computer");
      } else {
        arrOfXAndO[index] = props.player;
        let newarr = [...arrOfXAndO];
        setarrOfXAndO(newarr);
        setPlayer(props.player);
      }
      // } else {
      // arrOfXAndO[index] = "Computer";
      // let newarr = [...arrOfXAndO];
      // setarrOfXAndO(newarr);
      // setPlayer(props.player);
      // }
      console.log("checkwinner");
      let result = checkWinnerPerson();

      if (result == props.player) {
        // console.log(props.player + " won");
        celebrateVictory(props.player);
      } else if (result == "Computer") {
        // console.log("Computer won");
        celebrateVictory("Computer");
      } else if (result == "Draw") {
        console.log("Click on reset button");
      } else if (result == "comeOnComputer") {
        comeOnComputer();
      } else {
        console.log(result);
        return;
      }
      console.log("checkwinner");
    }
  }

  return (
    <>
      <div id="board">
        <div className="row">
          <h2 id="turn">TURN:{Player}</h2>
          <SqaureBox
            value={arrOfXAndO[0]}
            setArrOfXAndO={() => {
              handleClickOnBox(0);
            }}
          />
          <SqaureBox
            value={arrOfXAndO[1]}
            setArrOfXAndO={() => {
              handleClickOnBox(1);
            }}
          />
          <SqaureBox
            value={arrOfXAndO[2]}
            setArrOfXAndO={() => {
              handleClickOnBox(2);
            }}
          />
        </div>

        <div className="row">
          <SqaureBox
            value={arrOfXAndO[3]}
            setArrOfXAndO={() => {
              handleClickOnBox(3);
            }}
          />
          <SqaureBox
            value={arrOfXAndO[4]}
            setArrOfXAndO={() => {
              handleClickOnBox(4);
            }}
          />
          <SqaureBox
            value={arrOfXAndO[5]}
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
          />
          <SqaureBox
            value={arrOfXAndO[7]}
            setArrOfXAndO={() => {
              handleClickOnBox(7);
            }}
          />
          <SqaureBox
            value={arrOfXAndO[8]}
            setArrOfXAndO={() => {
              handleClickOnBox(8);
            }}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Board;
