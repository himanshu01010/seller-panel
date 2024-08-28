  import React, { useState,useEffect } from 'react';
  import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
  import Navbar from './components/Navbar';
  // import Footer from './components/Footer';
  import Home from './pages/home/Home';
  import Login from './pages/auth/Login';
  import Signup from './pages/auth/Signup';
  import Dashboard from './components/Dashboard';
  import MyShop from './components/MyShop';
  import ManageProduct from './pages/manageProduct/ManageProduct';
  import CreateProduct from './pages/manageProduct/CreateProduct';
  import Orders from './pages/orders/Orders'

  function App() {
    
    // const [islogin, setIsLogin] = useState(false);
    const [islogin, setIsLogin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

    return (
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={islogin ? <Home />:<Navigate to='/login'/>}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path='/MyShop' element={<MyShop/>}/>
                <Route path='/ManageProduct/:product' element={<ManageProduct/>}/>
                <Route path='/ManageProduct/All Product/addNew' element={<CreateProduct/>}/>
                <Route path='/orders/:ord' element={<Orders/>}/>
              </Route>
            </Routes>
          </div>
          {/* {!islogin && <Footer />} */}
        </div>
      </Router>
    );
  }

  export default App;