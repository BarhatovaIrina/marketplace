import './App.css';
import Error from './components/Error/Error';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import Header from './components/Header/Header';
import ProductTable from './components/ProductTable/ProductTable';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductTable />}></Route>
          <Route path="/filter" element={<FilterableProductTable />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
