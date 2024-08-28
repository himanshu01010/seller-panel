import Side_navber from "../../components/Side_navber"
import React from 'react'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className="flex h-screen">
      <Side_navber />
      <div className="flex-grow overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default Home;