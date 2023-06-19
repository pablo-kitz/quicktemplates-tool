import * as React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva("bg-transparent flex h-10 w-full rounded-md border px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900", {
	variants: {
		variant: {
			default: "border-neutral-300 placeholder:text-neutral-400 focus:ring-blue-500",
			danger: "border-red-300 placeholder:text-red-400 focus:ring-red-500 dark:border-red-700 dark:text-red-50 dark:focus:ring-red-400 dark:focus:ring-offset-red-900"
		}
	},
	defaultVariants: {
		variant: "default"
	}
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, ...props }, ref) => {
	return (
		<input
			className={cn(inputVariants({ variant, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
