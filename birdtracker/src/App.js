import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Homepage from './pages/Homepage/Homepage.js';
import BirdTracker from './pages/BirdTracker/BirdTracker.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/birdtracker' element={<BirdTracker />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
