import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Home from './pages/Home';
import About from './pages/About'
import Certificate from './pages/Certificate'
import Project from './pages/Project'
import View from './assets/View';
import Footer from './pages/Footer';
import Details from './pages/details';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />}>
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certif" element={<Certificate />} />
          <Route path="/project" element={<Project />} />
          <Route path="/details" element={<Details />} />
          <Route path='/view_image' element={<View />} />
          <Route path='/Footer' element={<Footer />} />
        </Route>
      </Routes>
    </Router>
  )


}
export default App;
