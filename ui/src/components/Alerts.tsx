import { useDispatch } from "react-redux";

import { useAlerts } from "../store/alert/hooks.ts";
import { removeAlert } from "../store/alert/slice.ts";

export default function Alerts() {
  const alerts = useAlerts();
  const dispatch = useDispatch();

  const handleAlertDismiss = (index: number) => {
    dispatch(removeAlert(index));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xl-6 offset-xl-3">
          <br />
          {alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`alert alert-dismissible alert-${alert.type}`}
            >
              <button
                type="button"
                className="btn-close"
                onClick={() => handleAlertDismiss(idx)}
              />
              {alert.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
