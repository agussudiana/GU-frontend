import { Box } from "@mui/material";
import React from "react";
import { useAnomaly } from "../../hooks/useAnomaly";
import { useMachineContext } from "../../hooks/useMachineContext";
import { AnomalyItem } from "../anomalyItem/AnomalyItem";
import { ErrorMessage } from "../partial/ErrorMessage";

export const AnomalyList = () => {
  const { machine } = useMachineContext();

  const { data, isError, isLoading } = useAnomaly(machine);

  if (isError) return <ErrorMessage />;

  return (
    <>
      <Box sx={{ maxHeight: "90vh", overflowY: "auto" }}>
        {data &&
          data.length > 0 &&
          data.map((anomaly: any, index: number) => {
            return <AnomalyItem key={index} value={anomaly} />;
          })}
      </Box>
    </>
  );
};
