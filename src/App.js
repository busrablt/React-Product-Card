import Navi from "./layout/Navi"
import Footer from "./layout/Footer";
import ProductList from "./pages/ProductList";
import { Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <ProductList/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
