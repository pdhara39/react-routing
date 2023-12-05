import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Navgateprogramaticaly from './components/Navgateprogramaticaly';
import Nomatch from './components/Nomatch';
import Product from './components/Product';
import Phone from './components/Phone';
import Lepi from './components/Lepi';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path='/click me' element={<Navgateprogramaticaly/>}></Route>
          <Route path='/product' element={<Product/>}>
              <Route index element={<Phone/>}/>
              <Route path='phone' element={<Phone/>}/>
              <Route path='lepi' element={<Lepi/>}/>
          </Route>
          <Route path='users' element={<Users/>}>
            <Route path=':userId' element={<UserDetails/>}/>
            <Route path='admin' element={<Admin/>}/>
          </Route>
          <Route path='*' element={<Nomatch/>}/>
        </Routes>
         </div>
  );
}

export default App;
