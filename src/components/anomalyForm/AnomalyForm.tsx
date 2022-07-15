import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import { useAction } from "../../hooks/useAction";
import { useAnomalyContext } from "../../hooks/useAnomalyContext";
import { useMachineContext } from "../../hooks/useMachineContext";
import { useReason } from "../../hooks/useReason";
import { useToastContext } from "../../providers/ToastProvider";

interface IFormInput {
  reason: string;
  action: string;
  comment: string;
}

export const AnomalyForm = () => {
  const { anomaly } = useAnomalyContext();
  const { machine } = useMachineContext();
  const { data: reasonList, isLoading: isLoadingReason } = useReason(
    anomaly.machine._id
  );
  const { data: actionList, isLoading: isLoadingAction } = useAction();
  const { control, handleSubmit, reset } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setToastConfig } = useToastContext();
  const { mutate } = useSWRConfig();

  useEffect(() => {
    reset({
      reason: anomaly.reason ? anomaly.reason._id : "",
      action: anomaly.action ? anomaly.action._id : "",
      comment: anomaly.comment ? anomaly.comment : "",
    });
  }, [anomaly]);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    const endpoint = `${process.env.REACT_APP_API_URL}/anomaly/${anomaly._id}`;
    const res = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      method: "PUT",
    }).then((res) => res.json());
    setIsSubmitting(false);
    setToastConfig({
      open: true,
      title: "Success",
      body: "Anomaly successfuly updated",
      type: "success",
    });

    //update the list of anomaly
    const key = `${process.env.REACT_APP_API_URL}/anomaly?machineId=${machine}`;
    mutate(key);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction={"column"} sx={{ p: 4 }} spacing={2}>
        <Grid item>
          <Typography
            variant="caption"
            component={"div"}
            sx={{ fontWeight: "bold" }}
          >
            Equipment
          </Typography>

          <Typography variant="caption">{anomaly.machine.name}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            component={"div"}
            sx={{ fontWeight: "bold" }}
          >
            Suspected Reason
          </Typography>
          {reasonList && (
            <Controller
              name="reason"
              control={control}
              render={({ field }) => (
                <Select sx={{ width: "50%" }} {...field} displayEmpty>
                  <MenuItem value="">
                    <em>Unknown Anomaly</em>
                  </MenuItem>
                  {reasonList &&
                    reasonList.length > 0 &&
                    reasonList.map((reason: any, index: number) => {
                      return (
                        <MenuItem key={index} value={reason._id}>
                          {reason.reason}
                        </MenuItem>
                      );
                    })}
                </Select>
              )}
            />
          )}
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            component={"div"}
            sx={{ fontWeight: "bold" }}
          >
            Action Required
          </Typography>
          {actionList && (
            <Controller
              name="action"
              control={control}
              render={({ field }) => (
                <Select sx={{ width: "50%" }} {...field} displayEmpty>
                  <MenuItem value="">
                    <em>Select Action</em>
                  </MenuItem>
                  {actionList &&
                    actionList.length > 0 &&
                    actionList.map((action: any, index: number) => {
                      return (
                        <MenuItem key={index} value={action._id}>
                          {action.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              )}
            />
          )}
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            component={"div"}
            sx={{ fontWeight: "bold" }}
          >
            Comment
          </Typography>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: "60%" }}
                type="text"
                multiline
                rows={3}
              ></TextField>
            )}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoadingReason || isLoadingAction || isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
};
