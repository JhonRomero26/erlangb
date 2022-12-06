import { Route, Router } from "wouter";
import "./App.css";
import { useHashLocation } from "./hooks/useHashLocation";
import ErlangbPage from "./pages/ErlangbPage";
import OrgansPage from "./pages/OrgansPage";
import TrafficOfertedPage from "./pages/TrafficOfertedPage";

function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/" component={TrafficOfertedPage} />
      <Route path="/organs" component={OrgansPage} />
      <Route path="/erlangb" component={ErlangbPage} />
    </Router>
  );
}

export default App;
