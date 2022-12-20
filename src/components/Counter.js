import Higher from "../Core/Higher";

const Counter = (props) => {
  const { count, increment } = props;

  return (
    <button onClick={increment}>
      {props.name} Clicked {count} times
    </button>
  );
};

export default Higher(Counter);
