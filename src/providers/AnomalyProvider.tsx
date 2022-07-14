import React, { createContext, Dispatch, useState } from "react";

type IAnomalyContext = {
  anomaly: any;
  setAnomaly: Dispatch<React.SetStateAction<any>>;
};
export const AnomalyContext = createContext<IAnomalyContext>(
  {} as IAnomalyContext
);
type Props = {
  children: JSX.Element;
};
export const AnomalyProvider = ({ children }: Props) => {
  const [anomaly, setAnomaly] = useState<any>({});
  return (
    <AnomalyContext.Provider value={{ anomaly, setAnomaly }}>
      {children}
    </AnomalyContext.Provider>
  );
};
