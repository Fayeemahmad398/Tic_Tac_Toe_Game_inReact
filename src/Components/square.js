const SqaureBox = (props) => {
  return (
    <div className="sqaurebox" onClick={props.setArrOfXAndO}>
      
      {props.value}
    </div>
  );
};


export default SqaureBox;
