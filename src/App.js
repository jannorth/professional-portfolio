// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>



      </Routes>

      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
