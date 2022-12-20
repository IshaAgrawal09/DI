import Higher from "../Core/Higher";

const HeadingHover = (props) => {
  const { count, increment } = props;
  return (
    <h2 onMouseOver={increment}>
      {props.name} Hover {count} times
    </h2>
  );
};

export default Higher(HeadingHover);
