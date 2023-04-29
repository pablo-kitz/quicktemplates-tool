import React from "react";

const DocsSelect = ({children}: {children: React.ReactNode}) => {
	return (
		<div className="grow overflow-x-auto">
			<ul className="flex flex-nowrap gap-4 overflow-x-auto scroll-smooth p-2">{children}</ul>
		</div>
	);
};

export default DocsSelect;
