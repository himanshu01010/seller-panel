import React from 'react';
// import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Side_navber from './Side_navber';

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Side_navber className="w-64 flex-shrink-0" />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <Dashboard />
      </main>
    </div>
  );
};

export default Layout;