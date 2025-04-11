import React from "react";

export function ChatArea() {
  return (
    <div className="bg-slate-200 h-screen">
      {/* chat header  */}
      <div className="bg-white  py-5 px-10 flex justify-between items-center">
        <div className="flex items-center gap-5">
          {/* profile image  */}
          <div className="relative">
            <img src="/assets/Ellipse1.png" alt="" />

            {/* user active icon  */}
            <img
              src="/assets/Rectangle 6.png"
              alt="user active icon"
              className="absolute bottom-1 left-12 "
            />
          </div>

          {/* username and message  */}
          <div>
            <h4 className="font-bold">Boakai Kamara</h4>
            <small className="text-blue-400">Online</small>
          </div>
        </div>

        {/* action section  */}
        <div className="flex items-center gap-10">
          <img src="/assets/ri_phone-fill.png" alt="phone icon" />

          <img src="/assets/majesticons_video.png" alt="video icon" />

          <img src="/assets/ri_more-2-fill.png" alt="more icon" />
        </div>
      </div>

      {/* chat content  */}
      <div className="px-10 my-10 ">
        {/* chat for person with the account  */}
        <div className="flex  gap-3 w-1/2">
          {/* profile image  */}
          <div>
            <img src="/assets/Ellipse1.png" alt="" className="w-50" />
          </div>

          {/* username and message  */}
          <div>
            <div className="flex gap-10 items-center">
              <h4 className="font-bold">Boakai Kamara</h4>
              <small className="text-slate-400">10:30 AM</small>
            </div>
            <p className="text-slate-400 bg-white  p-5 mt-2 rounded-b-lg rounded-tr-lg shadow-md">
              I a coming at your house. what do you want us to do for you this
              morning? I a coming at your house. what do you want us to do for
              you this morning? I a coming at your house. what do you want us to
              do for you this morning?I a coming at your house. what do you want
              us to do for you this morning?
            </p>
          </div>
        </div>

        {/* chat for person communicating with account owner  */}
      </div>
    </div>
  );
}
