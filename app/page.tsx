"use client";
import {Button} from "@/components/ui/button";
import {ChevronsUp, FilePlus2, Github, Linkedin, PlusCircleIcon} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Toggle} from "@/components/ui/toggle";
import {Switch} from "@/components/ui/switch";

const documents = [
	{
		name: "test",
	},
	{
		name: "test2",
	},
	{
		name: "test2",
	},
	{
		name: "test2",
	},
	{
		name: "test2",
	},
];

export default function Home() {
	return (
		<main className="flex h-full min-h-screen flex-col bg-gradient-to-r from-zinc-50 to-white transition duration-700 dark:bg-gray-900/75 dark:bg-none">
			<nav className="flex items-center bg-indigo-100/75 px-8 py-4 text-black drop-shadow-md transition duration-700 dark:bg-gradient-to-tl dark:from-gray-800/90 dark:via-gray-900/90 dark:to-black/90 dark:shadow-2xl">
				<div className="grow overflow-x-auto">
					<ul className="flex flex-nowrap gap-4 overflow-x-auto scroll-smooth p-2">
						{documents.map((doc) => (
							<Toggle
								key={doc.name}
								size="sm">
								{doc.name}
							</Toggle>
						))}
					</ul>
				</div>
				<span className="flex-initial">
					<Sheet>
						<SheetTrigger asChild>
							<Button size="round">
								<PlusCircleIcon />
							</Button>
						</SheetTrigger>
						<SheetContent
							position="right"
							size="lg">
							<SheetHeader>
								<SheetTitle>Create Doc</SheetTitle>
								<SheetDescription>Create your doc.</SheetDescription>
								<div className="">test</div>
								<SheetFooter>
									<SheetTrigger>
										<Button type="submit">Exit</Button>
									</SheetTrigger>
								</SheetFooter>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</span>
			</nav>

			<div className="flex-grow">
				<div className="relative h-full w-full flex-grow text-slate-300">
					{documents && (
						<div className="absolute left-0 top-0 m-4 flex flex-col items-center justify-center">
							<ChevronsUp className="m-2 h-8" />
							<div>Seleccioná un documento</div>
						</div>
					)}
					<div className="absolute right-0 top-0 m-4 flex flex-col items-center justify-center">
						<FilePlus2 className="m-2 h-8" />
						<div>Crea un documento</div>
					</div>
				</div>
			</div>

			<div className="flex h-12 w-full items-center justify-start gap-4 justify-self-end bg-slate-800 px-8 text-white">
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
				<div className="ml-auto flex gap-2 px-2">
					<Switch />
					<Switch
						variant="select"
						shape="square"
					/>
				</div>
			</div>
		</main>
	);
}
