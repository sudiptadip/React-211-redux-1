import React, { useState } from "react";
import { Store } from "./Redux/Store";
export default function App() {
  const { dispatch } = Store;
  const [data, setData] = useState(0);

  Store.subscribe(() => {
    setData(Store.getState().counter);
    console.log(Store.getState().counter);
  });

  return (
    <div>
      <h1>Counter :- {data}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 1 });
        }}
      >
        Increment
      </button>
      <button onClick={()=>dispatch({type: 'dec', payload: 1})} >Decrement</button>
    </div>
  );
}
