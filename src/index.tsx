import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import StoreProvider from "./Providers/StoreProvider/ui/StoreProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <StoreProvider >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StoreProvider>
)
