import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useEffect } from 'react'
import { useMachine } from '../../hooks/useMachine'
import { useMachineContext } from '../../hooks/useMachineContext'

export const MachineSelector = () => {
    const {data,isLoading,isError} = useMachine()
    const {machine,setMachine} = useMachineContext()

    const handleChange = (e:any)=>{

        setMachine(e.target.value)

    }

   if(isError) return <div>Something wrong with the server</div>

  return (<>
  <Select
  fullWidth
    value={machine}
    label="Machine"
    onChange={handleChange}
    disabled={isLoading}
    displayEmpty
  >
    <MenuItem value=""><em>Select Machine</em></MenuItem>
    {data && data.length>0 && data.map((machine:any,index:number)=>{
        return <MenuItem key={index} value={machine._id}>{machine.name}</MenuItem>
    })}
  
  </Select>
    </>
  )
}
