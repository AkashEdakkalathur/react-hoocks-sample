import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(43);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked  ${count} times`;
   // alert("test")
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Age increased +5 is  {age} </p>
      <button onClick={() => setCount(count + 1)}>
      click count
      </button>
        <button onClick={() => setAge(age + 5)}>
        Click age
      </button>
    </div>
  );
}