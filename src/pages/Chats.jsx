import React from "react";
import { SideBar } from "../components/SideBar";
import { ChatArea } from "../components/ChatArea";
import MessageInputArea from "../components/MessageInputArea";

function Chats() {
  return (
    <div className="flex">
      <section className="basis-2/5">
        <SideBar />
      </section>

      <section className="basis-5/5 ">
        <ChatArea />
        <MessageInputArea />
      </section>
    </div>
  );
}

export default Chats;
