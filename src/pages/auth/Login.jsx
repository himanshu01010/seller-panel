import React, { useState } from 'react';
import img1 from "../../assets/loginImg.png";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useMutation } from '@tanstack/react-query';
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (loginData) => {
      return axios.post(`${import.meta.env.VITE_BACKEND_URL}/seller/login`, loginData);
    },
    onSuccess: (response) => {
      console.log('Login successful', response.data);
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // You might also want to store other user data
      localStorage.setItem('userData', JSON.stringify(response.data.data));
      
      // Navigate to dashboard
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error('Login failed', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
        alert(`Login failed: ${error.response.data.message || 'Please check your credentials and try again.'}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('No response received from the server. Please try again later.');
      } else {
        console.error('Error message:', error.message);
        alert('An error occurred while processing your request. Please try again.');
      }
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="top-0 left-0 right-0 z-10 p-4 bg-white sm:bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold text-black">Home / Sign In</h1>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 bg-emerald-700 text-white text-sm sm:text-lg md:text-xl">
              Pages
              <span className="ml-2">▼</span>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-emerald-700 rounded-box z-[1] w-32 sm:w-40 md:w-52 p-2 shadow">
              <li><a>1</a></li>
              <li><a>2</a></li>
              <li><a>3</a></li>
              <li><a>4</a></li>
              <li><a>5</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative w-full h-[calc(100vh-64px)] sm:h-full">
        {/* Background image (hidden on mobile) */}
        <img
          src={img1}
          alt="Smiling woman with laptop"
          className="hidden sm:block object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald-700 sm:bg-opacity-20"></div>

        {/* Login form */}
        <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-6 md:p-12">
          <div className="w-full max-w-lg md:max-w-xl">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-10">Seller Login</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 md:mb-8">
              Login to your seller account to manage your shop
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border text-base sm:text-lg md:text-2xl rounded-xl bg-white text-black"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border rounded-xl bg-white text-base sm:text-lg md:text-2xl text-black"
                required
              />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full w-full sm:w-[200px]" type="submit">
                  <p className="text-base sm:text-lg md:text-3xl">Login</p>
                </button>
                <a href="#" className="text-white font-bold text-base sm:text-lg md:text-2xl hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
            <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-base sm:text-lg md:text-2xl hover:underline">
                Create An Account
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;