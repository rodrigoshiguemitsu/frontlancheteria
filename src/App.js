import Rotas from "./routes";
import{ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
     
     <Rotas/>
     <ToastContainer
     autoClose={5000}/>

    </div>
  );
}

export default App;
