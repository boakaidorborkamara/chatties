import AllContacts from "./AllContacts";
import PinnedContacts from "./PinnedContacts";

export function SideBar() {
  return (
    <div className="h-screen border-r-1 border-slate-400 sticky top-0">
      {/* logo  */}
      <div className="p-5 gap-1 flex">
        <div className="flex items-center">
          <img src="/assets/mingcute_chat-4-fill.png" alt="Chatties logo" />
          <img src="/assets/Chatties.png" alt="Chatties logo" />
        </div>
      </div>

      {/* contact search bar  */}
      <div className="p-5 flex gap-2">
        <input
          type="text"
          placeholder="Search messages, people"
          className="px-5 rounded-2xl w-80 border-solid border-gray-800"
        />
        <img src="/assets/Create new chat.png" alt="new chat icon" />
      </div>

      {/* contacts  */}
      <div>
        {/* pinned contacts  */}
        <PinnedContacts />

        {/* all chats  */}
        <AllContacts />
      </div>
    </div>
  );
}
