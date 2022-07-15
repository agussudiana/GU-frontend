import { Box, Chip, Divider, IconButton, LinearProgress } from "@mui/material";
import { useAnomaly } from "../../hooks/useAnomaly";
import { useMachineContext } from "../../hooks/useMachineContext";
import { AnomalyItem } from "../anomalyItem/AnomalyItem";
import { ErrorMessage } from "../partial/ErrorMessage";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const countNew = (data: any[]) => {
  const newData = data.filter((i) => i.status === "new");
  return newData.length;
};
export const AnomalyList = () => {
  const { machine } = useMachineContext();

  const { data, isError, isLoading } = useAnomaly(machine);

  if (isError) return <ErrorMessage />;

  return (
    <>
      <div className={"audio-list"}>
        <Box>
          <IconButton size="small">
            <ArrowLeftIcon /> Back
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          {data && data.length} Alerts{" "}
          {data && data.length && (
            <Chip size="small" label={countNew(data) + " New"} color="info" />
          )}
        </Box>
        <Divider />
        {isLoading && <LinearProgress />}
        {data &&
          data.length > 0 &&
          data.map((anomaly: any, index: number) => {
            return <AnomalyItem key={index} value={anomaly} />;
          })}
      </div>
    </>
  );
};
