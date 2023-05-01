import React from "react";

const NavBar = ({children}: {children: React.ReactNode}) => {
	return <nav className="dark:from-gray-800/90 dark:via-gray-900/90 flex items-center bg-blue-400 px-8 py-4 text-black drop-shadow-md transition duration-700 dark:bg-gradient-to-tl dark:to-black/90 dark:shadow-2xl">{children}</nav>;
};

export default NavBar;
