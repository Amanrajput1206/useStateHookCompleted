/*There are two types of programming, imperative and declarative.
we use react hooks to look at the current state and dynamically change or re-render the page based on certain conditions.
Here we have imported the useState as a non default export from the react module*/
import React, { useState } from "react";

function App() {
  /* The 0 here signifies the initial state as a parameter. Also and the const array will store the return value of the function useState.
  Now whenever the state changes, the elements are re-rendered*/

  const [count, setCount] = useState(0);

  /*Above here is an example of what we can call Desctructuring, it means simplifying a complex structure. For example,
  and Array, const rgb = [9,123,4], can be descructured as const [red,green,blue] = [9,123,4], Here each value is mapped to it's corresponding variable
  This helps in readabilitiy and better understanding. Since we know that the return value of useState is an Array, hence the Desctructuring
  The return value of useState is structured as [InitialValue,Function]. Here the setCount function sets the value of count.*/

  /*In this code, the setCount function is part of React's state management system, which is provided by the useState hook. 
  Even though you didn't explicitly define the functionality of setCount, React handles it internally.  */

  console.log([count, setCount]);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
