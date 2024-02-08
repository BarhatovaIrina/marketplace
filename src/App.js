import './App.css';
import Error from './components/Error/Error';
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
          <Route path="/marketplace/" element={<ProductTable filterLike={false} filterBrand={false} />}></Route>
          <Route path="/marketplace/brand" element={<ProductTable filterLike={false} filterBrand={true} />}></Route>
          <Route path="/marketplace/liked" element={<ProductTable filterLike={true} filterBrand={false} />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
