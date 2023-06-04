"use client";

import { useState, useEffect } from "react";
import { ClipboardType, PlusCircleIcon, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button, Toggle, Input } from "@/components/ui/index";
import DocsSelect from "@/components/DocsSelect";
import DocText from "@/components/DocText";
import NavBar from "@/components/NavBar";
import DocCreator from "@/components/DocCreator";

export type Document = {
	id: string;
	title: string;
	text: string;
	placeholders: string[];
};

export default function Home() {
	// Translations

	// Docs State Management
	const [docs, setDocs] = useState<Document[]>([]);

	useEffect(() => {
		const getDocs = [];

		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key && key.startsWith("doc_")) {
				const item = localStorage.getItem(key);
				if (item !== null) {
					const doc = JSON.parse(item);
					getDocs.push(doc);
				}
			}
		}

		setDocs(getDocs); // set docs directly to getDocs
	}, []);

	// UI State Management
	const [slideover, setSlideover] = useState(false);

	const [selectDoc, setSelectDoc] = useState<Document | null>(null);

	const handleSelectDoc = (doc: Document) => {
		if (selectDoc == doc) {
			setSelectDoc(null);
			setCurrentOutput("");
		} else {
			setSelectDoc(doc);
			setCurrentOutput("");
		}
	};

	const handleDeleteDoc = (doc: Document) => {
		const deleteDoc = docs.filter((doc) => doc !== selectDoc);
		localStorage.removeItem(doc.id);
		setDocs(deleteDoc);
		setSelectDoc(null);
		setCurrentOutput("");
	};

	const [replacementValues, setReplacementValues] = useState<Map<string, string>>(new Map());

	const updateReplacementValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setReplacementValues(replacementValues.set(name, value));
		console.log(replacementValues);
	};

	const [currentOutput, setCurrentOutput] = useState("");

	const handleGenerateDoc = () => {
		if (selectDoc) {
			let generatedDoc = selectDoc.text;
			selectDoc.placeholders.forEach((placeholder) => {
				let replaceValue = replacementValues.get(placeholder);
				if (replaceValue == undefined) {
					throw new Error("undefined placeholder");
				}
				generatedDoc = generatedDoc.replace(`{${placeholder}}`, replaceValue);
			});
			setCurrentOutput(generatedDoc);
		}
	};

	return (
		<>
			{/* Document Select / Document Create */}
			<NavBar>
				<DocsSelect>
					{docs.map((doc) => (
						<Toggle
							key={doc.title}
							onClick={() => handleSelectDoc(doc)}
							size="sm">
							{doc.title}
						</Toggle>
					))}
				</DocsSelect>
				<DocCreator
					slideover={slideover}
					setSlideover={setSlideover}
					docs={docs}
					setDocs={setDocs
					} />
			</NavBar>
			{/* Main View */}
			<div className="flex flex-grow sm:justify-center">
				{/* Selection Check */}
				{selectDoc ? (
					<div className="m-4 flex flex-grow flex-col gap-6 sm:w-10/12 sm:flex-grow-0">
						{/* Title / Document Delete */}
						<div className=" flex items-center justify-between text-2xl sm:mx-16">
							<div className="text-gray-800 font-bold dark:text-white">{selectDoc.title}</div>
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button
										variant="destructive"
										size="squaresm"
										rounded="round">
										<Trash2 />
									</Button>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Delete Document</AlertDialogTitle>
										<AlertDialogDescription>Are you sure you want to delete this document? It will be permanently removed. This action cannot be undone.</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction onClick={() => handleDeleteDoc(selectDoc)}>Delete</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>
						{/* Document Text / Document Placeholders */}
						<div className="flex flex-col gap-2 gap-x-6 sm:flex-row">
							<DocText>{selectDoc.text}</DocText>
							<div className="flex flex-col justify-center gap-2">
								{selectDoc.placeholders.map((placeholder) => {
									return (
										<Input
											key={selectDoc.placeholders.indexOf(placeholder)}
											id={placeholder}
											name={placeholder}
											placeholder={placeholder}
											onChange={updateReplacementValue}
											type="text"
										/>
									);
								})}
							</div>
						</div>
						{/* Generate Button */}
						<div className="flex justify-center py-2">
							<Button
								onClick={handleGenerateDoc}
								variant="outline">
								Generate
							</Button>
						</div>
						{/* Output */}
						{currentOutput && (
							<div>
								<DocText>{currentOutput}</DocText>
								<div className="flex justify-end py-2">
									<Button
										variant="ghost"
										size="square"
										rounded="round">
										<ClipboardType />
									</Button>
								</div>
							</div>
						)}
					</div>
				) : (
					// Instructions
					<div className="flex flex-grow flex-col items-center justify-center gap-8 text-center text-neutral-300">
						<div>This tool is made to simplify commonly used text templates</div>
						<div className="flex items-center justify-center gap-2">
							To start, try creating a document
							<Button
								size="square"
								rounded="round"
								disabled={true}>
								<PlusCircleIcon />
							</Button>
						</div>
						{docs[0] && (
							<div className="flex items-center justify-center gap-2">
								Or selecting one from your personal library
								<Toggle
									size="sm"
									disabled={true}>
									{docs[0].title}
								</Toggle>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
}
