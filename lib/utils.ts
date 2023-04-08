// cn helper to make it easier to conditionally add Tailwind CSS classes.
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
	console.log("test");
}
