import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Research from './pages/Research';
import Global from './pages/Global';
import Careers from './pages/Careers';
import Quality from './pages/Quality';
import Media from './pages/Media';
import Leadership from './pages/Leadership';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/research" element={<Research />} />
            <Route path="/global" element={<Global />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/media" element={<Media />} />
            <Route path="/leadership" element={<Leadership />} />
            {/* Future routes will be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
