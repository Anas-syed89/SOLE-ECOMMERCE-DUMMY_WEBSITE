import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/common/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact";
import ProductsCards from "./components/pages/Products/ProductsCards";
import ProductDetail from "./components/pages/Products/ProductDetail";
import AddToCart from "./components/pages/AddToCart";
import DemoVideo from "./components/pages/DemoVideo";
import NotFound from "./components/pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductsCards />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/addToCart/:id" element={<AddToCart />} />
            <Route path="/watchDemo" element={<DemoVideo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
