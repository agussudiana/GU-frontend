import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { useAnomalyContext } from "../../hooks/useAnomalyContext";
import { timestampToDate } from "../../utils/helper";

type Props = {
  value: any;
};
const setColorChip = (anomaly: string) => {
  if (anomaly === "Severe") return "error";
  if (anomaly === "Moderate") return "warning";
  if (anomaly === "Mild") return "info";
};
export const AnomalyItem = ({ value }: Props) => {
  const { setAnomaly, anomaly } = useAnomalyContext();
  const handleClick = () => {
    setAnomaly(value);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 1,
        border: anomaly._id === value._id ? "1px solid blue" : "inherit",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Grid container>
            <Grid item xs={1}>
              {value.status === "new" && (
                <div className="anomaly-status-dot"></div>
              )}
            </Grid>
            <Grid item xs={11}>
              <Typography variant="caption" component={"div"}>
                ID #{value._id.slice(-5)}
              </Typography>
              <Typography
                variant="caption"
                component={"div"}
                sx={{ fontWeight: "bold" }}
              >
                {value.reason ? value.reason.reason : "Unknown Anomaly"}
              </Typography>
              <Typography variant="caption" component={"div"}>
                Detected at {timestampToDate(value.timestamp)}
              </Typography>
              <Typography
                variant="caption"
                component={"div"}
                sx={{ color: "#3478FC" }}
              >
                {value.machine.name}
              </Typography>

              <Chip
                size="small"
                label={value.anomaly}
                color={setColorChip(value.anomaly)}
                sx={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
