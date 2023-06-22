const ShowGameDetails = (props) => {
  console.log(props.score1);
  console.log(props.score1);
  console.log(props);
  return (
    <div id="showdetails">
      <div id="table-box">
        <div id="table">
          <h1>Need 30 points to win</h1>
          <h1 id="rounds">Remaining Rounds:{props.rounds} out of 6</h1>
          <h2>
            Player-1<span>{" "+props.player1} </span>{" "}
            <span>with points:{props.score1}</span>
          </h2>
          
          <h2>
            Player-2<span>{" "+props.player2} </span>
            <span>with points:{props.score2}</span>
          </h2>
        </div>

        <div id="btns">
          <button id="reset" onClick={props.updateState} >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowGameDetails;
