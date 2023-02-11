import { useContext, useState } from "react";
import { ALertContext } from "./AlertContext";

export function useAlert() {
  const { alert } = useContext(ALertContext);

  const [alertName, setAlertName] = useState(alert);

  const closeAlert = () => {
    setAlertName("");
  };
  return { alertName, closeAlert, setAlertName };
}
