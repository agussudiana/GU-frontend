import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { useAnomalyContext } from "../../hooks/useAnomalyContext";
import { timestampToDate } from "../../utils/helper";
import { AudioWave } from "../partial/AudioWave";

export const AnomalyDetail = () => {
  const { anomaly } = useAnomalyContext();

  const audioUrl = `${process.env.REACT_APP_API_URL}/${anomaly.soundClip}`;

  return (
    <Box>
      {Object.keys(anomaly).length === 0 && (
        <div>please select one of the anomaly</div>
      )}
      {Object.keys(anomaly).length > 0 && (
        <>
          <Grid container>
            <Grid item xs={12} sx={{ p: 4 }}>
              <Typography variant="subtitle1">
                Alert ID #{anomaly._id.slice(-5)}
              </Typography>
              <Typography variant="subtitle2">
                Detected at {timestampToDate(anomaly.timestamp)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6} sx={{ p: 4 }}>
              <Typography>Anomaly Machine Output</Typography>
              <AudioWave audioUrl={anomaly.soundClip ? audioUrl : ""} />
            </Grid>

            <Grid item xs={6} sx={{ p: 4 }}>
              <Typography>Normal Machine Output</Typography>
              <AudioWave audioUrl={anomaly.soundClip ? audioUrl : ""} />
            </Grid>
            <Grid item xs={12}>
              <TextField type="text"></TextField>
              <TextField type="text"></TextField>
              <TextField type="text"></TextField>
              <TextField type="text"></TextField>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};
