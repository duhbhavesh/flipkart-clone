import './App.css';
import Nav from './components/Nav/Nav';
import ProductsListing from './pages/ProductsListing/ProductsListing';

function App() {
   return (
      <div className='App'>
         <Nav />
         <ProductsListing />
      </div>
   );
}

export default App;
