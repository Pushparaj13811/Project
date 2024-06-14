import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navigationlinks from "@/Links/navigationlinks";
import ThemeButton from "../ThemeButton/ThemeButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="mx-auto bg-white dark:bg-gray-900 navbar border-b-2 border-borderColor sticky top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="items-center space-x-4">
                        <div className="navbar-logo text-black dark:text-white">
                            <h1 className="text-xl">
                                <Link
                                to = '/'
                                >
                                    Logo
                                </Link>
                            </h1>
                        </div>
                    </div>
                    <div className="navbar-menu hidden lg:block">

                        <ul className="space-x-10 hidden md:flex text-black dark:text-secondaryTextColor">
                            {
                                navigationlinks.map((link, index) => (

                                    <NavLink
                                        key={index}
                                        to={link.link}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white "
                                            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        {link.title}
                                    </NavLink>
                                ))}
                        </ul>
                    </div>

                    <div className="navbar-buttons flex items-center my-auto space-x-10">
                        <ThemeButton />
                        <Link
                            to="login"
                            className="text-gray-800 hidden md:block dark:bg-white dark:hover:bg-gray-100 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>

                        <Link
                            to="Signup"
                            className="text-white hidden md:block bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                        <button className="hamburger-icon lg:hidden dark:text-white " onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`fixed  left-0 top-14 bg-transparent z-20 backdrop-blur-2xl  h-58 w-full bg-white dark:bg-gray-800 transition-transform transform ${isOpen ? '-translate-x-100' : 'translate-x-full'} lg:hidden`}>
                <ul className="flex flex-col space-y-4 p-4 text-black dark:text-secondaryTextColor">
                    <Link
                        to="Signup"
                        className="text-white md:hidden bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Get started
                    </Link>
                    <Link
                        to="login"
                        className="text-gray-800 md:hidden bg-gray-300 dark:bg-white dark:hover:bg-gray-100 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Log in
                    </Link>

                    {
                        navigationlinks.map((link, index) => (

                            <NavLink
                                key={index}
                                to={link.link}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white "
                                    } border-b border-gray-300 dark:border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;