import AddButton from "./AddButton";
import EntryDescription from "./EntryDescription";
import EntryValue from "./EntryValue";
import EntryType from "./EntryType";


export default function AddEntry() {
    return (
      <div className="border-b bg-gray-100 py-3">
        <div className="mx-auto max-w-xl px-5">
          <form className="flex gap-2">
            <EntryType />
            <EntryDescription />
            <EntryValue />
            <AddButton />
          </form>
        </div>
      </div>
 );
}