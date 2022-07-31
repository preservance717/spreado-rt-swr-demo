import React from "react";
import { setSpreadOut, useSpreadIn } from "spreado";

const setValue = (value: number) => {
  return setSpreadOut("counter", value);
};
const useValue = () => {
  return useSpreadIn<number>("counter", 0);
};

const Counter = () => {
  const value = useValue();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => setValue(value + 1)}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => setValue(value - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
