import React from "react";

function ReceiverMessageCard() {
  return (
    <div className="flex my-10  gap-3 w-7/12">
      {/* profile image  */}
      <div>
        <img src="/assets/Ellipse1.png" alt="" className="w-20" />
      </div>

      {/* username and message  */}
      <div>
        <div className="flex gap-10 items-center">
          <h4 className="font-bold">Boakai Kamara</h4>
          <small className="text-slate-400">10:30 AM</small>
        </div>
        <p className="text-slate-400 bg-white  p-5 mt-2 rounded-b-lg rounded-tr-lg shadow-md">
          I a coming at your house. what do you want us to do for you this
          morning? I a coming at your house. what do you want us to do for you
          this morning?
        </p>
      </div>
    </div>
  );
}

export default ReceiverMessageCard;
