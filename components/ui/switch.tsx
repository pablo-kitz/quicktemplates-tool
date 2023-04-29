"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import {cn} from "@/lib/utils";
import {VariantProps, cva} from "class-variance-authority";

type SwitchVarProps = VariantProps<typeof switchVariants>;
const switchVariants = cva("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900", {
	variants: {
		variant: {
			switch: "data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:data-[state=checked]:bg-neutral-400 dark:data-[state=unchecked]:bg-neutral-700",
			select: "data-[state=checked]:bg-neutral-600 data-[state=unchecked]:bg-neutral-300 dark:data-[state=checked]:bg-neutral-400 dark:data-[state=unchecked]:bg-neutral-600",
		},
		shape: {
			round: "rounded-full",
			square: "rounded-md",
		},
	},
	defaultVariants: {
		variant: "switch",
		shape: "round",
	},
});

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchVarProps>(({className, variant, shape, ...props}, ref) => (
	<SwitchPrimitives.Root
		className={cn(switchVariants({variant, shape, className}))}
		{...props}
		ref={ref}>
		<SwitchPrimitives.Thumb className={cn("data-[state=checked]:tranneutral-x-5 data-[state=unchecked]:tranneutral-x-0 pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform")} />
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export {Switch};
