import { Link } from "@inertiajs/react";
import React from "react";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-[#1E1EFF] text-[#D2D2D2]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-[#D2D2D2] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link href={route('about')}>HOME</Link>
                            </li>

                            <li>
                                <a>SERVICES</a>
                            </li>
                            <li>
                                <a>CONTACT US</a>
                            </li>
                            <li>
                                <a>BOOKINGS</a>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl btn btn-ghost">QTC EVENTS</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="gap-4 px-1 menu menu-horizontal text-[#D2D2D2]">
                        <li>
                        {/* <Link href={route('about')}>HOME</Link> */}
                        <Link href='/about'>HOME</Link>
                        </li>
                        <li>
                           <a>SERVICES</a>
                        </li>
                        <li>
                            <a>CONTACT US</a>
                        </li>
                        <li>
                            <a>BOOKINGS</a>
                        </li>
                    </ul>
                </div>
                <div className="gap-3 navbar-end">
                    <a className="hidden text-white btn sm:flex btn-outline">LOGIN</a>
                    <a className="btn bg-[#2c2ca5] sm:btn-sm btn-md text-[#D2D2D2] border-0">GET STARTED</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
