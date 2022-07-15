import {
  Box,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { border } from "@mui/system";
import { useAnomalyContext } from "../../hooks/useAnomalyContext";
import { timestampToDate } from "../../utils/helper";
import { AnomalyForm } from "../anomalyForm/AnomalyForm";
import { AudioWave } from "../partial/AudioWave";

export const AnomalyDetail = () => {
  const { anomaly } = useAnomalyContext();

  const audioUrl = `${process.env.REACT_APP_API_URL}/${anomaly.soundClip}`;

  return (
    <Box>
      {Object.keys(anomaly).length === 0 && (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: "80vh" }}
        >
          <Grid item>
            <Typography variant="caption">
              Please Select One of the Anomaly List
            </Typography>
          </Grid>
        </Grid>
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
              <AnomalyForm />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};
