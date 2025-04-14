import React from "react";

function Login() {
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

        <h2 className="text-center text-3xl font-bold mb-8">Login</h2>

        <form
          action=""
          className="mb-7"
          onClick={(e) => {
            e.preventDefault();
            console.log("working");
          }}
        >
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
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-3 appearance-none border rounded "
            />
          </div>

          {/* login btn  */}
          <div className="flex flex-col mb-5">
            <input
              type="submit"
              value="Login"
              className="p-3 appearance-none bg-blue-400 text-white rounded hover:cursor-pointer "
            />
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <a href="/signup" className="text-blue-400 font-medium">
            Signup
          </a>
        </p>
      </div>
    </section>
  );
}

export default Login;
