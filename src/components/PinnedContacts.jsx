import React from "react";
import ContactCard from "./ContactCard";

function PinnedContacts() {
  return (
    <div className="mt-5">
      <div className="flex gap-2 px-5">
        <img src="/assets/tabler_pin-filled.png" alt="new chat icon" />
        <p className="text-slate-400">PINNED CHATS</p>
      </div>

      {/* contact card  */}
      <ContactCard />
    </div>
  );
}

export default PinnedContacts;
