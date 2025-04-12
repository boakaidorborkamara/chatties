import React from "react";

function ContactCard() {
  return (
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
  );
}

export default ContactCard;
