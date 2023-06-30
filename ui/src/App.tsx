import Navigation from "./components/Navigation.tsx";

import Router from "./components/Router.tsx";
import Alerts from "./components/Alerts.tsx";

export default function App() {
  return (
    <>
      <Navigation />
      <Alerts />
      <main className="container">
        <Router />
      </main>
    </>
  );
}
