import React, { useState, useEffect} from "react";

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("here")
    setCount(count + 1);
    return () => {
      console.log("unmounting")
    }
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;