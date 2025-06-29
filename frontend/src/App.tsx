import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Specialities from './pages/Specialities';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/doctors" element={<div style={{paddingTop: '100px', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h2>Doctors Page - Coming Soon</h2></div>} />
          <Route path="/services" element={<div style={{paddingTop: '100px', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h2>24x7 Services Page - Coming Soon</h2></div>} />
          <Route path="/blogs" element={<div style={{paddingTop: '100px', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h2>Blogs Page - Coming Soon</h2></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;