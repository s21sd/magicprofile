import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Second from './componets/Second';
import Header from './componets/Header';
import Signup from './componets/Signup';
import Login from './componets/Login';
import Dashboard from './componets/Dashboard';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Header /> */}
          <Route>
            <Route path='/' element={<Second />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
