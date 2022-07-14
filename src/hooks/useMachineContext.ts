import { useContext } from "react";
import { MachineContext } from "../providers/MachineProvider";

export const useMachineContext = () => {
  const { machine, setMachine } = useContext(MachineContext);
  return { machine, setMachine };
};
