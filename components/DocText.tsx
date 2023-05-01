import React from "react";

const DocText = ({children}: {children: React.ReactNode}) => {
	return <div className="w-full whitespace-pre-line rounded-xl border border-neutral-300 bg-neutral-100 p-4 text-sm shadow dark:border-blue-500 dark:bg-neutral-700 dark:text-white dark:drop-shadow-lg sm:text-base">{children}</div>;
};

export default DocText;
