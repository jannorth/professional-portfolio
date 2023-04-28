import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Colors from './colors';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header style={{backgroundColor: Colors.primaryColor}}></Header>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer style={{backgroundColor: Colors.primaryColor}}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;