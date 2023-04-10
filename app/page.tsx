"use client";
import {Button} from "@/components/ui/button";
import {ChevronsUp, ClipboardType, FilePlus2, Github, Linkedin, PlusCircleIcon, Trash2} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Toggle} from "@/components/ui/toggle";
import {Switch} from "@/components/ui/switch";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const documents = [
	{
		name: "Template 1",
		placeholders: ["abc", "123"],
	},
	{
		name: "Another Something template",
		placeholders: ["abc", "123"],
	},
];

const selectDoc = "documents[0]";

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
							size="lg"
							className="flex flex-col">
							<SheetHeader>
								<SheetTitle>Create Doc</SheetTitle>
								<SheetDescription>Create your doc.</SheetDescription>
							</SheetHeader>

							<div className="bg-grey-100 flex grow flex-col justify-between divide-y dark:divide-none">
								<div className="py-2 ">
									<Input />
								</div>
								<div className="h-full grow py-2">
									<Textarea className="h-full w-full resize-none rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 dark:border-indigo-500 dark:bg-gray-700 dark:text-white dark:drop-shadow-lg" />
								</div>
								<div className="flex justify-around gap-2 py-2">
									<Input />
									<Button>Generar Place</Button>
								</div>
								<div className="flex items-end justify-center py-2">
									<Button>Generar Doc</Button>
								</div>
							</div>

							<SheetFooter>
								<SheetTrigger>
									<Button type="submit">Exit</Button>
								</SheetTrigger>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</span>
			</nav>

			<div className="flex-grow">
				{selectDoc ? (
					<div className="mx-auto my-2 flex w-10/12 flex-grow flex-col justify-between md:w-9/12">
						<div className="align-center mx-2 my-2 flex justify-between text-2xl sm:mx-16">
							<div className="z-10 inline pt-1 align-middle font-bold text-gray-800 dark:text-white">{documents[0].name}</div>
							<Button
								variant="destructive"
								size="sm">
								<Trash2 />
							</Button>

							{/*<Modal
							handleDelete={() => handleDelete(selectDoc)}
							openModal={openModal}
							setOpenModal={setOpenModal}
						/>*/}
						</div>
						<div className="flex grow flex-col gap-x-6 py-2 md:flex-row">
							<div className="mx-auto my-auto w-5/6">
								<div className="border-grey-300 w-full whitespace-pre-line rounded-xl border bg-white p-4 text-sm dark:border-indigo-500 dark:bg-gray-700 dark:text-white dark:drop-shadow-lg sm:text-base">{documents[0].name}</div>
							</div>
							<div className="mx-6">
								{documents[0].placeholders?.map((placeholder) => {
									return (
										<div
											className="my-2"
											key={placeholder}>
											<Input />
										</div>
									);
								})}
							</div>
						</div>
						<div className="flex items-end justify-center py-8">
							<Button variant="outline">Generate</Button>
						</div>
						<div className="relative">
							<div className="border-grey-300 w-full whitespace-pre-line  rounded-xl border bg-white p-4 dark:border-indigo-500 dark:bg-gray-700 dark:text-white dark:drop-shadow-lg">{documents[0].name}</div>
							<div className="absolute right-2 top-2">
								<Button
									variant="ghost"
									size="round">
									<ClipboardType />
								</Button>
							</div>
						</div>
					</div>
				) : (
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
				)}
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
				</div>
			</div>
		</main>
	);
}
