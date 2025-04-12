import React from "react";
import SenderMessageCard from "./SenderMessageCard";
import ReceiverMessageCard from "./ReceiverMessageCard";
import ChatHeader from "./ChatHeader";

export function ChatArea() {
  return (
    <div className="bg-slate-200 h-screen relative  ">
      {/* chat header  */}
      <ChatHeader />

      {/* chat content  */}
      <div className="px-10   ">
        {/* chat for receiver  */}
        <ReceiverMessageCard />

        {/* chat for sender  */}
        <SenderMessageCard />
      </div>
    </div>
  );
}
