import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import BlogCard from './components/BlogCard';
import FunCard from './components/FunCard';
import blogs from './data/blogs';
import fun from './data/fun';
import Home from './pages/Home';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Fun from './pages/Fun';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/fun' element={<Fun/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
