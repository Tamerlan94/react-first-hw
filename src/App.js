import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import ProductClass from './components/ProductClass';
import ProductFunction from './components/ProductFunction';
import { useState } from 'react';
import Home from "./components/Home";
import Parent from "./components/Parent";
import Child from "./components/child";

function App() {
  const [text, setText] = useState('default');

  const show = (e) => {
    setText(e);

  }

  const alertSummon = () => {
    alert(text);
  }

  return (
    <div>
      <Router>
        <Link to="/">Home </Link>
        <Link to="/parent">parent </Link>
        <Link to="/parent/child">child </Link>
        <Link to="/productClass">class </Link>
        <Link to="/productFunction">function </Link>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/parent" element={<Parent />}>
              <Route path="child" element={<Child />}></Route>
            </Route>
            <Route path="/productClass" element={<ProductClass name="apple" description="default apple" count="10" showAlert={show} />}></Route>
            <Route path="/productFunction" element={<ProductFunction name="apple juice" description="very smooth" showAlert={show} />}></Route>
          </Routes>
        </div>
      </Router>

      <button onClick={alertSummon}>alert!</button>

    </div>
  );
}

export default App;
