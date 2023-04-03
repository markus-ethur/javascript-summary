import React, { useCallback, useEffect, useRef, useState } from 'react'

const Clock = () => {

  // const { time } = useCallback(() => {
  //   const time = new Date();
  //   return {time};
  // }, [])

  // const [time, setTime] = useState(Date());  


  const time = useRef(`${new Date()}`);


  // const timer = useCallback(() => {
  //   setTimeout(() => {
  //     time.current = new Date();
  //     timer();
  //   }, 1000)
  // }, []);

  function timer() {
    setTimeout(() => {
      time.current = `${new Date()}`;
      timer();
    }, 1000);      
  }  


  useEffect(() => {
    // time.current = `${new Date()}`;
      
    timer();
    // console.log(time)

    
    // setTimeout(() => {
    //   time.current = new Date();
    // }, 1000);
  }, [timer]);

  return (    
    <div>Clock time: {time.current} {console.log('rendered')}</div>
  )
}


export { Clock }