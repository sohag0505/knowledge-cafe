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
      <div className="question-answer">
        <div className="question-1">
          <h2>Props VS state in React?</h2>
          <p>
            Props is the way of passing data from parent component to child
            component. It's read only .Used sending array,function,variable to
            the child component On the other hand , state used to manage
            internal component data. State cann't change directly . It can
            change using setState() function which is coming with the state.
          </p>
        </div>
        <div className="question-2">
          <h2>How useState() Work in react?</h2>
          <p>
            UseState is React that allows us to add state to a functional
            component. It returns an array with two values.The current state and
            a function to update it. The Hook takes an initial state value as an
            argument and returns an updated state value whenever the setState
            function is called.
          </p>
        </div>
        <div className="question-3">
          <h2>What useEffect() do except dataLoad from api ?</h2>
          <p>
            useEffect() has two parameter , one is a function and another is an
            array. on this array we can give difendency. Whenever defendency
            change the useEffect() Function will call again . This way we can
            observe variable, loaded data, and other thing. We can valid our
            input from data from useEffect, We can use live filtering.
          </p>
        </div>
        <div className="question-4">
          <h2>How does React Work ?</h2>
          <p>
            React Created Virtual DOM. whenever Dom changes . React used diff
            algorithm to check which side of it's change . And make minimal
            change possible on actual dom React is component based library. It
            can use minimum our work as we can use our component endlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
