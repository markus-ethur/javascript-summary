"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'

// https://medium.com/@guigaoliveira_/conhecendo-o-useref-do-react-9d67e66

type PropType = {
  name: string
}

const Greeting = React.memo(function Greeting(props: PropType) {
  return <h1>{props.name}</h1>
});


export default function Page() {
  const [counter, setCounter] = React.useState(0);

  // Update state variable `counter`
  // every 2 seconds.
  // React.useEffect(() => {
  //   setInterval(() => {
  //     setCounter(counter + 1);
  //   }, 2000);
  // }, []);

  console.log('App render')
  return <Greeting name="Ruben" />

  
}
