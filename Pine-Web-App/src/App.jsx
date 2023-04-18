import React from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Home, About, Service, OurTeam, Contact, Blog } from './pages'
import './App.css';
import { Footer, Navbar } from './components';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className=" h-16">
          <Navbar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
