import { withLayout } from "./Layout/Layout";
import { AppRouter } from "./Providers/router";

function App() {
  return (
    <div className="App">
      <div className="page">
        <AppRouter />
      </div>
    </div>
  );
}

export default withLayout(App);
