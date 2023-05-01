import {Button} from "@/components/ui/button";
import "./globals.css";
export const metadata = {
	title: "Quicktemplates Tool",
	description: "Generate your own document templates.",
};

import {Roboto} from "next/font/google";
import {Github, Linkedin} from "lucide-react";
const roboto = Roboto({weight: "400", style: "normal", subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<main className="dark:bg-gray-900/75 flex h-full min-h-screen flex-col bg-white transition duration-700 dark:bg-none">
					{children}
					<div className="flex h-12 w-full items-center justify-start gap-4 justify-self-end bg-neutral-800 px-4 text-white md:px-8">
						<a
							href="https://github.com/pablo-kitz"
							target="_blank"
							rel="noopener noreferrer">
							<Button size="sm">
								<Github />
							</Button>
						</a>
						<a
							href="https://www.linkedin.com/in/pablo-kitzberger/"
							target="_blank"
							rel="noopener noreferrer">
							<Button size="sm">
								<Linkedin />
							</Button>
						</a>
					</div>
				</main>
			</body>
		</html>
	);
}
