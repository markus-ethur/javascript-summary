import React, { useEffect, useRef, useState } from 'react'

const UseRefSample3 = () => {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);

  const buttonRef = useRef();

  useEffect(() => {
    // infinite looping
    // setNumber((prevNumber) => prevNumber + 10);

    numberRef.current = Math.random()
  });

  useEffect(() => {
    // buttonRef.current.click();
  },[]);


  console.log(numberRef)
  console.log('renderizou!')

  return (
    <div>
      <h1>O number é {number}</h1>
      <h1>O numero do useRef é: {numberRef.current}</h1>
      <h1>O contador é {count}</h1>
      <button 
        onClick={() => setCount((prevCount) => prevCount + 1)}
        ref={buttonRef}>
          Add Count
      </button>
    </div>   
  )
}

export default UseRefSample3