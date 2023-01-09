import React, {useState} from 'react';
import Alert from "./Components/Alert/Alert";

function App() {
    const [alertName,setAlertName] = useState<string>('')
    const closeAlert = () =>{
        setAlertName('')
    }
    return (
        <div className="App">
            <h1>App</h1>

            <button onClick={()=>setAlertName('Click')}> Click </button>
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </div>
    );
}

export default App;
