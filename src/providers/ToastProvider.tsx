import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Alert, AlertTitle, Snackbar } from "@mui/material";

type severity = "success" | "error";
type ToastConfig = {
  open: boolean;
  title: string;
  body: string;
  type: severity;
};

type Toast = {
  setToastConfig: Dispatch<SetStateAction<ToastConfig>>;
};

export const ToastContext = createContext<Toast>({} as Toast);

export const ToastProvider = (props: any) => {
  const [toastConfig, setToastConfig] = useState<ToastConfig>({
    open: false,
    title: "title",
    body: "body",
    type: "error",
  });

  const handleClose = () => {
    setToastConfig({ ...toastConfig, open: false });
  };

  return (
    <ToastContext.Provider value={{ setToastConfig }}>
      {props.children}

      <Snackbar
        open={toastConfig.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={toastConfig.type}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{toastConfig.title}</AlertTitle>
          <div> {toastConfig.body}</div>
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
