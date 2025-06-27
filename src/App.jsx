import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Home from './component/Home';
import About from './component/About'
import Certificate from './component/Certificate'
import Contact from './component/Contact'
import Project from './component/Project'
import View from './assets/View';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certif" element={<Certificate />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/view_image' element={<View/>}/>
        </Route>
      </Routes>
    </Router>
  )


}
export default App;
