import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Brand from './pages/Brand/Brand';
import Likes from './pages/Likes/Likes';
import Club from './pages/Club/Club';

export default function App() {
    return (
        <div className='min-h-screen mx-auto w-screen max-w-[1440px]'>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Brand />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/likes" element={<Likes />} />
                        <Route path="/club" element={<Club />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    )
};