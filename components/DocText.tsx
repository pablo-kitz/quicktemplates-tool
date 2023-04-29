import React from "react";

const DocText = ({children}: {children: React.ReactNode}) => {
	return <div className="border-grey-300 dark:bg-gray-700 w-full whitespace-pre-line rounded-xl border border-neutral-400 p-4 text-sm dark:border-blue-500 dark:text-white dark:drop-shadow-lg sm:text-base">{children}</div>;
};

export default DocText;
