import Board from "./board";


const Section = (props) => {
  console.log(props.player1);
  console.log(props.player2);
  return (
    <div >
      
      <Board player1={props.player1} player2={props.player2} />


    </div>
  );
};

export default Section;
