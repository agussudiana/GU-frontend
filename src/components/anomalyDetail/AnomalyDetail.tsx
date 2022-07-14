import { Grid } from "@mui/material";
import React from "react";
import { useAnomalyContext } from "../../hooks/useAnomalyContext";

export const AnomalyDetail = () => {
  const { anomaly } = useAnomalyContext();

  return (
    <>
      {Object.keys(anomaly).length === 0 && (
        <div>please select one of the anomaly</div>
      )}
      {Object.keys(anomaly).length > 0 && (
        <>
          <Grid container>
            <Grid item xs={6}>
              {anomaly.soundClip}
            </Grid>

            <Grid item xs={6}></Grid>
          </Grid>
        </>
      )}
    </>
  );
};
