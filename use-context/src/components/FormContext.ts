import { createContext } from "react";

type FormContextType = {
  registerFields: (name: any, ref: any) => void
}

const FormContext = createContext<FormContextType>({
  registerFields: (name, ref) => {},
});

export default FormContext;

