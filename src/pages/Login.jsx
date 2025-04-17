import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Login({ login }) {
  const [formdata, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  function validate(form_element) {
    let error = { field: "", message: "" };

    if (form_element.name === "username") {
      if (form_element.value === "") {
        error.field = "username";
        error.message = "Username is required";
        setErrors(error);
        return;
      }
    }

    if (form_element.name === "password") {
      console.log("setting password error");

      if (form_element.value === "") {
        error.field = "password";
        error.message = "Password is required";
        setErrors(error);
        return;
      }
    }

    setErrors({});
  }

  function handleSubmit(form) {
    if (formdata.username === "") {
      form[0].focus();
      return;
    } else if (formdata.password === "") {
      form[1].focus();
      return;
    }

    console.log(errors);

    // if error break
    if (errors.length > 0) {
      return;
    }

    let login_details = formdata;
    login(login_details);

    console.log("submitting", formdata);
    // clear form
    setFormData((prevState) => {
      prevState.password = "";
      prevState.username = "";
      return { ...prevState };
    });

    form.reset();
  }

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
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.target);
          }}
        >
          <div className="flex flex-col mb-5">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              autoComplete="off"
              className="appearance-none border rounded p-3 "
              onChange={(e) => {
                let username = e.target.value;

                setFormData((prevState) => {
                  let state = { ...prevState };
                  state.username = username;
                  return state;
                });

                validate(e.target);
              }}
            />
            <p className="text-red-600">
              {errors.field === "username" ? errors.message : ""}
            </p>
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="off"
              className="p-3 appearance-none border rounded "
              onChange={(e) => {
                let password = e.target.value;

                setFormData((prevState) => {
                  let state = { ...prevState };
                  state.password = password;
                  return state;
                });

                validate(e.target);
              }}
            />
            <p className="text-red-600">
              {errors.field === "password" ? errors.message : ""}
            </p>
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
          <Link to="/signup" className="text-blue-400 font-medium">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
