import React, { useEffect, useState } from "react";
import Higher from "../Core/Higher";
import { DI } from "../Core/DependencyInjection";

const Show = (props) => {
  console.log("props", props);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    props.di
      .GET("https://jsonplaceholder.typicode.com/users")
      .then((actualData) => setData(actualData))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const { addName } = props;
  console.log("data", addName);
  return (
    <div>
      {loading
        ? "Please wait for some time"
        : data?.map((item) => {
            return (
              <p>
                {addName} : {item.name}
              </p>
            );
          })}
    </div>
  );
};

export default DI(Higher(Show));
