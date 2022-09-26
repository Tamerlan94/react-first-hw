import logo from './logo.svg';
import './App.css';
import ProductClass from './components/ProductClass';
import ProductFunction from './components/ProductFunction';

function App() {
  return (
    <div>
      <ProductClass name="apple" description="default apple" count="10"></ProductClass>
      <ProductFunction name="apple juice" description="very smooth"></ProductFunction>
    </div>
  );
}

export default App;
