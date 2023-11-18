import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Shared/Home';
import SearchResult from './Components/Results/SearchResult';
import Results from './Components/Results/Results';
import About from './Components/Shared/About';
import Error from './Components/Shared/Error';
import Footer from './Components/Shared/Footer';
import './app.css'

const App = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-16'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/result/:id' element={<Results />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
};

export default App;