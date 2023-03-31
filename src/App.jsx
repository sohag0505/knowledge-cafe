import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
