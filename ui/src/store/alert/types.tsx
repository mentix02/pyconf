export enum AlertType {
  Info = "info",
  Danger = "danger",
  Success = "success",
  Primary = "primary",
}

export type AlertMessage = {
  message: string;
  type: AlertType;
};

export type AlertState = {
  messages: AlertMessage[];
};
