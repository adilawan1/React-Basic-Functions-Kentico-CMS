import React, { useEffect, useState } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [size, newSize] = useState(window.innerWidth);

  function handleRes(params) {
    newSize(window.innerWidth);
  }

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    //window.addEventListener("resize", handleRes);
  }, []);

  return (
    <div>
      <h4>Inner width is {size}</h4>
      <h4 onClick={() => setCount(count + 1)}>
        Clicked {count} times by useState
      </h4>
    </div>
  );
}
