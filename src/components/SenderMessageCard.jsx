import React from "react";

function SenderMessageCard() {
  return (
    <div className="flex justify-end p-0 ">
      <div className="flex justify-end  my-10  gap-3 w-7/12">
        {/* username and message  */}
        <div>
          <div className="flex gap-10 items-center justify-end ">
            <small className="text-slate-400">10:30 AM</small>
            <h4 className="font-bold">Boakai Kamara</h4>
          </div>
          <p className="text-white bg-blue-400  p-5 mt-2 rounded-b-lg rounded-tr-lg shadow-md">
            I a coming at your house. what do you want us to do for you this
            morning? I a coming at your house. what do you want us to do for you
            this morning?
          </p>
        </div>

        {/* profile image  */}
        <div>
          <img src="/assets/Ellipse1.png" alt="" className="w-20" />
        </div>
      </div>
    </div>
  );
}

export default SenderMessageCard;
