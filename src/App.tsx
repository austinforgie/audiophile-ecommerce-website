import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Products, ProductDetail, Checkout } from "./pages";
import { CartProvider, NavbarProvider } from "./context";

const App = () => (
  <Router>
    <NavbarProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Products />} />
          <Route path="/speakers" element={<Products />} />
          <Route path="/earphones" element={<Products />} />
          <Route
            path="/headphones/xx99-mark-two-headphones"
            element={<ProductDetail />}
          />
          <Route
            path="/headphones/xx99-mark-one-headphones"
            element={<ProductDetail />}
          />
          <Route
            path="/headphones/xx59-headphones"
            element={<ProductDetail />}
          />
          <Route path="/speakers/zx9-speaker" element={<ProductDetail />} />
          <Route path="/speakers/zx7-speaker" element={<ProductDetail />} />
          <Route path="/earphones/yx1-earphones" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </NavbarProvider>
  </Router>
);

export default App;
