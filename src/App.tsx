import {withLayout} from "./Layout/Layout";
import {AppRouter} from "./Providers/router";
import './index.css'

function App() {
    return (
        <div className="App">
            <div className="page">
                <AppRouter/>
            </div>
        </div>
    );
}

export default withLayout(App);
