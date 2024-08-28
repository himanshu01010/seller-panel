import React, { useState, useEffect } from 'react';
import { BiGridAlt, BiStore, BiCart, BiLogOut, BiSliderAlt, BiWallet, BiLock, BiHeadphone, BiChevronDown, BiChevronUp, BiMenu } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Side_navber = () => {
    const [isManageProductOpen, setIsManageProductOpen] = useState(false);
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);
    const [WithdrawOpen, setWithdrawOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleManageProduct = () => {
        setIsManageProductOpen(!isManageProductOpen);
    };

    const toggleOrders = () => {
        setIsOrdersOpen(!isOrdersOpen);
    };

    const toggleWithdraw = () => {
        setWithdrawOpen(!WithdrawOpen)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const manageProduct = ["All Product", "Pending Product", "Product Review"];

    const handleManageProductClick = (product) => {
        navigate(`/ManageProduct/${product}`);
        closeMenu();
    };

    const orders = ["All Orders", "Pending Orders", "Processing Orders", "Dispatch Orders", "Delivered Orders", "Cancel Orders"];

    const handleOrdersClick = (ord) => {
        navigate(`/orders/${ord}`);
        closeMenu();
    }

    const renderNavContent = () => (
        <ul className="menu bg-emerald-700 text-white min-h-full w-[450px] p-4 space-y-4">
            <li className="text-xl font-semibold px-2 py-4 border-b text-emerald-700 ">
                <span className='bg-white hover:bg-slate-300'>Current Balance: $0.00</span>
            </li>
            <li>
                <Link to="/Dashboard" className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <BiGridAlt className="w-12 h-12" /> Dashboard
                </Link>
            </li>
            <li>
                <Link to='/MyShop' className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <BiStore className="w-12 h-12" /> My Shop
                </Link>
            </li>
            <li>
                <button onClick={toggleManageProduct} className="flex items-center justify-between gap-4 text-xl w-full text-left">
                    <div className="flex items-center gap-4">
                        <BiSliderAlt className="w-12 h-12" /> Manage Product
                    </div>
                    {isManageProductOpen ? (
                        <BiChevronUp className="w-6 h-6" />
                    ) : (
                        <BiChevronDown className="w-6 h-6" />
                    )}
                </button>
                {isManageProductOpen && (
                    <ul className="ml-12 mt-2 space-y-2">
                        {manageProduct.map((product) => (
                            <li key={product}>
                                <button
                                    onClick={() => handleManageProductClick(product)}
                                    className='text-lg text-left w-full'
                                >
                                    {product}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
            <li>
                <button onClick={toggleOrders} className="flex items-center justify-between gap-4 text-xl w-full text-left">
                    <div className="flex items-center gap-4">
                        <BiCart className="w-12 h-12" /> Orders
                    </div>
                    {isOrdersOpen ? (
                        <BiChevronUp className="w-6 h-6" />
                    ) : (
                        <BiChevronDown className="w-6 h-6" />
                    )}
                </button>
                {isOrdersOpen && (
                    <ul className="ml-12 mt-2 space-y-2">
                        {orders.map((ord, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleOrdersClick(ord)}
                                    className='text-lg text-left w-full'
                                >
                                    {ord}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
            <li>
                <a className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <MdAttachMoney className="w-12 h-12" /> Sales Log
                </a>
            </li>
            <li>
                <a className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <BiWallet className="w-12 h-12" /> Transaction Log
                </a>
            </li>
            <li>
                <button onClick={toggleWithdraw} className="flex items-center justify-between gap-4 text-xl w-full text-left">
                    <div className="flex items-center gap-4">
                        <BiSliderAlt className="w-12 h-12" /> Withdraw
                    </div>
                    {WithdrawOpen ? (
                        <BiChevronUp className="w-6 h-6" />
                    ) : (
                        <BiChevronDown className="w-6 h-6" />
                    )}
                </button>
                {WithdrawOpen && (
                    <ul className="ml-12 mt-2 space-y-2">
                        <li>
                            <a className='text-lg' onClick={closeMenu}>All  Withdraw</a>
                        </li>
                    </ul>
                )}
            </li>
            <li>
                <a className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <BiLock className="w-12 h-12" /> 2FA Security
                </a>
            </li>
            <li>
                <a className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <BiHeadphone className="w-12 h-12" /> Support
                </a>
            </li>
            <li className="mt-auto">
                <a className="flex items-center gap-4 text-xl" onClick={closeMenu}>
                    <BiLogOut className="w-12 h-12" /> Log Out
                </a>
            </li>
        </ul>
    );

    if (isMobile) {
        return (
            <div>
                <div className="navbar bg-emerald-700 text-white">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className={`drawer ${isMenuOpen ? 'drawer-open' : ''}`}>
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isMenuOpen} onChange={toggleMenu} />
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay" onClick={toggleMenu}></label>
                        {renderNavContent()}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop version (unchanged)
    return (
        <div className="lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                {renderNavContent()}
            </div>
        </div>
    );
};

export default Side_navber;