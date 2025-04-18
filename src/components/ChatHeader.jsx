import React from "react";

function ChatHeader() {
  return (
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
  );
}

export default ChatHeader;
