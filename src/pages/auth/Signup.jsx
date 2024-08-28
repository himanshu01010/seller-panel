import React, { useState } from 'react';
import img1 from "../../assets/loginImg.png";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const signupMutation = useMutation({
    mutationFn: (signupData) => {
      return axios.post(`http://192.168.1.11:3000/seller/signup`, signupData);
    },
    onSuccess: (response) => {
      console.log("Signup successful", response.data);
      
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error("Signup failed", error);
      alert(error.response?.data?.message || "An error occurred during signup");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signupMutation.mutate({
      email,
      password,
      userName,
      phoneNumber,
      companyName
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="top-0 left-0 right-0 z-10 p-4 bg-white sm:bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold text-black">Home / Sign up</h1>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 bg-emerald-700 text-white text-sm sm:text-lg md:text-xl">Pages
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

        {/* Signup form */}
        <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-6 md:p-12">
          <div className="w-full max-w-lg md:max-w-xl">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-10">Seller Sign up..</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 md:mb-8">
              Sign up to your seller account to manage your shop
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border text-base sm:text-lg md:text-2xl rounded-xl bg-white text-black"
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border text-base sm:text-lg md:text-2xl rounded-xl bg-white text-black"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border text-base sm:text-lg md:text-2xl rounded-xl bg-white text-black"
                required
              />
              <input
                type="text"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border text-base sm:text-lg md:text-2xl rounded-xl bg-white text-black"
                required
              />
              <input
                type="tel"
                placeholder="Phone no."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 md:p-3 mb-4 sm:mb-6 md:mb-10 border rounded-xl bg-white text-base sm:text-lg md:text-2xl text-black"
                required
              />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button 
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full w-full sm:w-[200px]" 
                  type="submit"
                  disabled={signupMutation.isLoading}
                >
                  <p className="text-base sm:text-lg md:text-3xl">
                    {signupMutation.isLoading ? 'Signing up...' : 'Sign up'}
                  </p>
                </button>
              </div>
            </form>
            <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-base sm:text-lg md:text-2xl hover:underline">
                Login 
              </Link>
            </p>
          </div>
        </div>
      </main>
      {!isLogin && <Footer />}
    </div>
  );
};

export default Signup;