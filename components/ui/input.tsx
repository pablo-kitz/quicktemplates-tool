import * as React from "react";

import {cn} from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({className, ...props}, ref) => {
	return (
		<input
			className={cn("bg-transparent flex h-10 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900", className)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export {Input};
