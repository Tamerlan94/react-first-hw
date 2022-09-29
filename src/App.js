import logo from './logo.svg';
import './App.css';
import ProductClass from './components/ProductClass';
import ProductFunction from './components/ProductFunction';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('default');

  const show = (e) => {
    setText(e);

  }

  const alertSummon = () =>{
    alert(text);
  }

  return (
    <div>   
      <button onClick={alertSummon}>alert!</button>
      <ProductClass name="apple" description="default apple" count="10" showAlert={show}></ProductClass>
      <ProductFunction name="apple juice" description="very smooth" showAlert={show}></ProductFunction>
    </div>
  );
}

export default App;
