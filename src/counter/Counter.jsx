import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const counterNum = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};
const dispach = useDispatch()
   const IncrementHandle =  ()=>{
    dispach({type: 'increment'})
   }
   const DecrementHandle =  ()=>{
    dispach({type: 'decrement'})
   }
  return (
    <div>
      <h1>redux counter</h1>
      <div>counter valeu {counterNum}</div>
      <button onClick={toggleCounterHandler}>toggle</button>
      <div>
        <button onClick={IncrementHandle}>Increment</button>
        <button onClick={DecrementHandle}>Decrement</button>
      </div>
    </div>
  );
};
