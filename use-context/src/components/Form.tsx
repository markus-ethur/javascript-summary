import React, { useCallback, useState } from 'react'
import FormContext from './FormContext';

type FormProps = {
  children: any
}

const Form = ({ children }: FormProps) => {

  const [inputs, setInputs] = useState<any[]>([]);

  const registerFields = useCallback((name: any, ref: any) => {
    setInputs(state => [...state, { name, ref }])
  }, []);

  return (
    <form>
      <FormContext.Provider value={{ registerFields }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

export default Form