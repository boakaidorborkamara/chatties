import React from "react";

export function ChatArea() {
  return (
    <div className="bg-slate-200 h-screen relative  ">
      {/* chat header  */}
      <div className="bg-white  py-5 px-10 flex justify-between items-center sticky top-0">
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
      <div className="px-10   ">
        {/* chat for person with the account  */}
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
              morning? I a coming at your house. what do you want us to do for
              you this morning?
            </p>
          </div>
        </div>

        {/* chat for person communicating with account owner  */}
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
                morning? I a coming at your house. what do you want us to do for
                you this morning?
              </p>
            </div>

            {/* profile image  */}
            <div>
              <img src="/assets/Ellipse1.png" alt="" className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
