import React, { createContext, Dispatch, useState } from "react";


type IMachineContext = {
    machine:string,
    setMachine:Dispatch<React.SetStateAction<string>>
}
export const MachineContext = createContext<IMachineContext>({}as IMachineContext)
type Props = {
children:JSX.Element
}
export const MachineProvider = ({children}:Props) => {
    const [machine,setMachine] = useState("")
  return (
    <MachineContext.Provider value={{machine,setMachine}}>
        {children}
    </MachineContext.Provider>
  )
}
