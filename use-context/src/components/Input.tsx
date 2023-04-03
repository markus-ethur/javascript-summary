import React, { useContext, useEffect, useRef } from 'react'

import FormContext from './FormContext'

type InputProps = {
  name: string;
}

const Input = ({ name }: InputProps) => {
  const { registerFields } = useContext(FormContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      registerFields(name, inputRef.current);
    }      
  },[name, registerFields])

  return (
    <input type="text" name={name} ref={inputRef} />
  )
}

export default Input