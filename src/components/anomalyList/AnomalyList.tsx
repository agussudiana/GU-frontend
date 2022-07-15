import { Box, Chip, Divider, IconButton } from "@mui/material";
import { useAnomaly } from "../../hooks/useAnomaly";
import { useMachineContext } from "../../hooks/useMachineContext";
import { AnomalyItem } from "../anomalyItem/AnomalyItem";
import { ErrorMessage } from "../partial/ErrorMessage";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

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
          <Chip size="small" label="2 New" color="info" />
        </Box>
        <Divider />
        {data &&
          data.length > 0 &&
          data.map((anomaly: any, index: number) => {
            return <AnomalyItem key={index} value={anomaly} />;
          })}
      </div>
    </>
  );
};
