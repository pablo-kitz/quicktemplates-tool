import { Montserrat as FontSans } from "next/font/google"

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

interface RootLayoutProps {
	children: React.ReactNode
}

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	description: siteConfig.description,
	keywords: [
		"Next.js",
		"Templating",
		"React",
		"Tailwind CSS",
	],
	authors: [
		{
			name: "Pablo Kitzberger",
			url: siteConfig.links.github
		}
	],
	creator: "Pablo Kitzberger",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	// TODO: Add following metadata:
	// openGraph
	// twitter
	// icons
	// manifest
	icons: '../public/favicon.svg'
};


export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<ThemeProvider>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
