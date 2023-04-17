import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
