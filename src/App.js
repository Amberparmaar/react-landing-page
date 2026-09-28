import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Feature from './components/Feature';
import Categories from './components/Category';
import ProductCard from './components/ProductCard';
import PromoBanner from './components/PromoBanner';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Feature/>
    <Services/>
    <Categories/>
    <ProductCard/>
    <PromoBanner/>
    <BlogSection/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
