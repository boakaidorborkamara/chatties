import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chats from "./pages/Chats";

function App() {
  console.log("adding new user");
  const [users, setUser] = useState([]);

  function addUser(new_user) {
    setUser([...users, new_user]);
  }

  console.log("uuu", users);

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Chats />} />
        <Route path="signup" element={<Signup addUser={addUser} />} />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
