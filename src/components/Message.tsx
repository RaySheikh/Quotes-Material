import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

interface Props {
  message: string;
  color: Severity;
}

type Severity = "error" | "success" | "info" | "warning" | undefined;

const Message = ({ message, color }: Props) => {
  return (
    <div style={{ marginTop: 25 }} className="ui container">
      {message ? (
        <Alert severity={color}>
          <AlertTitle>
            {color ? color.charAt(0).toUpperCase() + color.slice(1) : null}
          </AlertTitle>
          {message} — <strong>({new Date().toLocaleTimeString()})</strong>
        </Alert>
      ) : null}
    </div>
  );
};

export default Message;
