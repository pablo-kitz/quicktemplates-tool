import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Button, Input, Textarea } from "@/components/ui/index";
import { PlusCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import { Document } from "@/app/page";

type DocCreatorProps = {
  slideover: boolean,
  setSlideover: Dispatch<SetStateAction<boolean>>,
  docs: Document[],
  setDocs: Dispatch<SetStateAction<Document[]>>,
}

const DocCreator = ({ slideover, setSlideover, docs, setDocs }: DocCreatorProps) => {

  const [newDoc, setNewDoc] = useState<Document>({
    id: "",
    title: "",
    text: "",
    placeholders: [],
  });

  //TODO: Usar Map
  const [newPlaceholder, setNewPlaceholder] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.id;
    setNewDoc((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlaceholder(e.target.value);
  };

  const handleDocSubmit = () => {
    setNewDoc((prev) => {
      const updatedDoc = { ...prev, id: `doc_${localStorage.length}` };
      localStorage.setItem(updatedDoc.id, JSON.stringify(updatedDoc));
      setDocs([...docs, updatedDoc]);
      return {
        id: "",
        title: "",
        text: "",
        placeholders: [],
      };
    });
    setSlideover(false);
  };

  const handlePlaceholderSubmit = () => {
    if (newPlaceholder === "") {
      // TODO:Feedback visual de error
      throw new Error("placeholder empty");
    } else {
      const regexPattern = /\s$/; // Validación de espacios vacios
      setNewDoc((prev) => ({
        ...prev,
        text: regexPattern.test(prev.text) ? prev.text + `{${newPlaceholder}}` : prev.text + " " + `{${newPlaceholder}}`, // Add the placeholderName string to the docText textarea
        placeholders: [...prev.placeholders, newPlaceholder],
      }));
      setNewPlaceholder("");
    }
  };

  return (
    <>
      <Sheet
        open={slideover}
        onOpenChange={setSlideover}>
        <SheetTrigger asChild>
          <Button
            size="square"
            rounded="round">
            <PlusCircleIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          position="right"
          size="custom"
          className="flex flex-col">
          <SheetHeader>
            <SheetTitle>New Document</SheetTitle>
            <SheetDescription>Create a new document</SheetDescription>
          </SheetHeader>
          <div className="bg-grey-100 flex grow flex-col justify-between">
            <div className="py-2 ">
              <Input
                id="title"
                placeholder="Document Title"
                onChange={handleChange}
              />
            </div>
            <div className="h-full grow py-2">
              <Textarea
                className="dark:bg-gray-700 h-full w-full resize-none rounded-md border-neutral-300 p-2 ring-neutral-300 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-500 dark:text-white dark:drop-shadow-lg"
                id="text"
                placeholder="Document Text"
                value={newDoc.text}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between gap-2 py-2">
              <Input
                onChange={handlePlaceholderChange}
                placeholder="New Placeholder"
              />
              <Button
                onClick={handlePlaceholderSubmit}
                size="lg">
                Add Placeholder
              </Button>
            </div>
            <div className="flex items-end justify-center py-2">
              <Button onClick={handleDocSubmit}>Save Document</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default DocCreator