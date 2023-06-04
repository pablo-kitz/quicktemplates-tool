import { ReactElement } from "react"

const TextArea(): ReactElement {

  return (
    <div className="h-full grow py-2">
      <textarea
        className="dark:bg-gray-700 h-full w-full resize-none rounded-md border-neutral-300 p-2 ring-neutral-300 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-500 dark:text-white dark:drop-shadow-lg"
        id="text"
        placeholder={t("creation.textField")}
        value={newDoc.text}
        onChange={handleChange}
      />
    </div>

  )
}
export default TextArea