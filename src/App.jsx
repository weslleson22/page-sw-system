import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
//import NotFound01 from "./pages/notfound/NotFound01";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <BrowserRouter basename={'/'}>
                <Navbar/>
                <Routes>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='gallery' element={<Gallery/>}/>
                    <Route path='plans' element={<Plans/>}/>
                    <Route path='trainers' element={<Trainers/>}/>
                   {/* <Route path='/*' element={<NotFound01/>}/>*/}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default App;
