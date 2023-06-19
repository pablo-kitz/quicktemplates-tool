import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Button, Input, Textarea } from "@/components/ui/index";
import { PlusCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Document } from "@/app/page";
import TextArea from "./TextArea";
import { DocForm } from "./doc-form";

type DocCreatorProps = {
  slideover: boolean,
  docs: Document[],
  setSlideover: Dispatch<SetStateAction<boolean>>,
  setDocs: Dispatch<SetStateAction<Document[]>>,
}

const DocCreator = ({ slideover, setSlideover, docs, setDocs }: DocCreatorProps) => {

  const [newDoc, setNewDoc] = useState<Document>({
    id: "",
    title: "",
    text: "",
    placeholders: [],
  });
  const [emptyPlaceholder, setEmptyPlaceholder] = useState(false);

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
    if (!newDoc.title || !newDoc.text) {
      // TODO:Feedback visual de error
    }
    if (!newDoc.placeholders) {
      // TODO:Esta por generar un documento sin placeholders
    }
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
      const regexPattern = /\s$/; // " " validation
      setNewDoc((prev) => ({
        ...prev,
        // Add the placeholderName string to the docText textarea
        text: regexPattern.test(prev.text) ? prev.text + `{${newPlaceholder}}` : prev.text + " " + `{${newPlaceholder}}`,
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
          <DocForm />
          {/*
          <div className="bg-grey-100 flex grow flex-col justify-between">
            <div className="py-2">
              <Input
                id="title"
                placeholder="Document Title"
                onChange={handleChange}
              />
            </div>
            <div className="h-full grow py-2">
              <TextArea value={newDoc.text} handleChange={handleChange} />
            </div>
            <div className="flex justify-between gap-2 py-2">
              <Input
                onChange={handlePlaceholderChange}
                placeholder="New Placeholder"
                variant="danger"
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
        */}
        </SheetContent>
      </Sheet>
    </>
  )
}

export default DocCreator