import React from "react";
import ContactCard from "./ContactCard";

function AllContacts() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 px-5">
        <img src="/assets/icon-park-solid_message.png" alt="message icon" />
        <p className="text-slate-400">ALL MESSAGES</p>
      </div>

      <ContactCard />
    </div>
  );
}

export default AllContacts;
