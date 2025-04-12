import React from "react";

function MessageInputArea() {
  return (
    <div className="bg-white p-5 sticky bottom-0 flex items-center gap-3">
      {/* message input  */}
      <input type="text" placeholder="Type message..." className="p-3 w-4/5" />

      {/* voice icon  */}
      <div>
        {" "}
        <img src="/assets/icon-park-solid_voice.png" alt="mic icon" />
      </div>

      {/* attach files icon  */}
      <div>
        <img src="/assets/akar-icons_attach.png" alt="attach file icon" />
      </div>

      <button className="bg-blue-500 text-white flex justify-center items-center py-3 px-5 rounded-lg">
        <img src="/assets/bxl_telegram.png" alt="" />
        Send
      </button>
    </div>
  );
}

export default MessageInputArea;
