import React from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {Home, About, Service, OurTeam, Contact} from './pages'
import './App.css';

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
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<OurTeam />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
