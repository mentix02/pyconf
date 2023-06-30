import { useSelector } from "react-redux";

import { RootState } from "../index.ts";
import { AlertMessage } from "./types.tsx";

export const useAlerts = (): AlertMessage[] =>
  useSelector((state: RootState) => state.alert.messages);
