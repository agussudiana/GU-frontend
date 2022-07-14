import React, { useContext } from "react";
import { AnomalyContext } from "../providers/AnomalyProvider";

export const useAnomalyContext = () => {
  const { anomaly, setAnomaly } = useContext(AnomalyContext);
  return {
    anomaly,
    setAnomaly,
  };
};
