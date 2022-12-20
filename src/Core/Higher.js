import { useState } from "react";
const Higher = (OriginalComp) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const [addName, setAddName] = useState("Your Name");
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <OriginalComp
        count={count}
        increment={increment}
        addName={addName}
        {...props}
      />
    );
  };
  return NewComponent;
};

export default Higher;
