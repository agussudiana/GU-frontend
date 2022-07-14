import { Grid } from "@mui/material";
import React from "react";
import { AnomalyDetail } from "../anomalyDetail/AnomalyDetail";
import { AnomalyList } from "../anomalyList/AnomalyList";
import { MachineSelector } from "../machineSelector/MachineSelector";

export const Main = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MachineSelector />
      </Grid>
      <Grid item xs={3}>
        <AnomalyList />
      </Grid>
      <Grid item xs={9}>
        <AnomalyDetail />
      </Grid>
    </Grid>
  );
};
