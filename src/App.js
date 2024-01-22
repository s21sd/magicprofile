import './App.css';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Second from './componets/Second';
import Signup from './componets/Signup';
import Login from './componets/Login';
import Dashboard from './componets/Dashboard';
import Settings from './componets/Settings';
import { useState } from 'react';

import { DataProvider } from './componets/Dataprovider';
import About from './componets/About';
function App() {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);

    console.log(isLoggedIn);
    // navigate('/dashboard');
  };
  const hadleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <DataProvider>

        <BrowserRouter>
          {/* Remove the extra <Route> component wrapping the <Routes> component */}
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Second isLoggedIn={isLoggedIn} onLogout={hadleLogout} />} />
            <Route path="/login" element={<Login onlogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
            {/* <Route path='/dashboard' element={<Dashboard />} /> */}
            <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard onLogout={hadleLogout} /> : <Login onlogin={handleLogin} />}
          />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </DataProvider >
    </div>
  );
}

export default App;
