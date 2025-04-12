import React from "react";
import Logo from "../components/Logo";

function Signup() {
  return (
    <section className="bg-blue-400 h-lvh flex justify-center items-center">
      {/* signup form container  */}
      <div className="bg-white p-10 w-2/6 rounded-2xl">
        {/* logo  */}
        <div className="pb-3 gap-1 justify-center items-center flex">
          <div className="flex items-center">
            <img src="/assets/mingcute_chat-4-fill.png" alt="Chatties logo" />
            <img src="/assets/Chatties.png" alt="Chatties logo" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-8">
          Create an Account
        </h2>

        <form action="" className="mb-7">
          <div className="flex flex-col mb-5">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="appearance-none border rounded p-3 "
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 appearance-none border rounded "
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-3 appearance-none border rounded "
            />
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 font-medium">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
