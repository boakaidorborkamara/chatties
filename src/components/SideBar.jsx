import { MessageSquareMore } from "lucide-react";
import { Pin } from "lucide-react";
import { MessageSquareText } from "lucide-react";

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
        {/* pinned chats  */}
        <div className="mt-5">
          <div className="flex gap-2 px-5">
            <img src="/assets/tabler_pin-filled.png" alt="new chat icon" />
            <p className="text-slate-400">PINNED CHATS</p>
          </div>

          {/* contact card  */}
          <div className="  p-5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* profile image  */}
              <div>
                <img src="/assets/Ellipse1.png" alt="" />
              </div>

              {/* username and message  */}
              <div>
                <h4 className="font-bold">Boakai Kamara</h4>
                <p className="text-slate-400">I a coming at your house.</p>
              </div>
            </div>

            {/* time and notification batch  */}
            <div>
              <p className="text-slate-400">10:30 AM</p>
              <small className="bg-blue-600 p-1 rounded-full text-white px-2">
                2
              </small>
            </div>
          </div>
        </div>

        {/* all chats  */}
        <div className="mt-5">
          <div className="flex items-center gap-2 px-5">
            <img src="/assets/icon-park-solid_message.png" alt="message icon" />
            <p className="text-slate-400">ALL MESSAGES</p>
          </div>

          {/* contact card  */}
          <div className="  p-5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* profile image  */}
              <div>
                <img src="/assets/Ellipse1.png" alt="" />
              </div>

              {/* username and message  */}
              <div>
                <h4 className="font-bold">Boakai Kamara</h4>
                <p className="text-slate-400">I a coming at your house.</p>
              </div>
            </div>

            {/* time and notification batch  */}
            <div>
              <p className="text-slate-400">10:30 AM</p>
              <small className="bg-blue-600 p-1 rounded-full text-white px-2">
                2
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
