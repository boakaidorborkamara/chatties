import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chats from "./pages/Chats";
let counter = 0;

const Database = {
  init() {
    console.log("inilizing db");

    // setup db
    if (!localStorage.getItem("users")) {
      console.log("Didn't find users in local storage, creating...");

      localStorage.setItem("users", "[]");

      console.log("User created...");
    }

    console.log("Users exist");
  },
  clearDB() {
    localStorage.removeItem("users");
  },
  getUsers() {
    let users = JSON.parse(localStorage.getItem("users"));
    // let users = localStorage.getItem("users");

    return users;
  },
  addUser(user_obj) {
    let new_user = { ...user_obj, isActive: false };

    // get data from local storage
    let users = this.getUsers();

    // add new user to existing data
    users.push(new_user);

    // clear local storage
    this.clearDB();

    // add update data to local storage
    localStorage.setItem("users", JSON.stringify(users));

    console.log("got update value", JSON.parse(localStorage.getItem("users")));
  },
};

// Database.clearDB();
function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    Database.init();
  }, []);

  function addUser(new_user) {
    // setUser([...users, new_user]);
    Database.addUser(new_user);
  }

  function login(user) {
    let users = Database.getUsers();

    let existingUser = users.filter((user_details) => {
      return user_details.username === user.username;
    });

    if (!existingUser.length) {
      alert("invalid username");
      return;
    }

    if (existingUser[0].password != user.password) {
      alert("password is incorrect");
      return;
    }

    // log user in
    existingUser[0].isActive = true;

    // update local storage
    Database.clearDB();
    localStorage.setItem("users", JSON.stringify(users));
    let update_v = localStorage.getItem("users");
    console.log("444", update_v);
  }

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Chats />} />
        <Route path="signup" element={<Signup addUser={addUser} />} />
        <Route path="login" element={<Login login={login} />} />
        <Route path="/*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
