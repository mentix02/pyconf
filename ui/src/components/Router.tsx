import { Route, Switch } from "wouter";

import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Contact from "../pages/Contact.tsx";
import Comments from "../pages/Comments.tsx";
import FourOhFour from "../pages/FourOhFour.tsx";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/r">
        <Comments post_id="0" />
      </Route>
      <Route path="/p/:post_id">
        {(params) => <Comments post_id={params.post_id} />}
      </Route>
      <Route>
        <FourOhFour />
      </Route>
    </Switch>
  );
}
