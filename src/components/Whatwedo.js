import React from 'react';
import gettech from '../images/get__tech.png';
import {Link} from 'react-router-dom';
import "./Whatwedo.css";
import './Navbar.css';
import Navbardata from './Navbardata';
import Footer from './Footer';

function whatwedo() {
    return (
        <Link to="whatwe"><div className="main__do">
    <div className='whatwedo__navbar'>   <Navbardata/></div>
        <div className="whatwedo__img"><img src={gettech}></img></div>
        <iframe className='youtube__why__indigo' width="808" height="455" src="https://www.youtube.com/embed/2Tz_C14M6z0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className='footer__whatwedo'><Footer/></div>
    </div></Link>
    )
}

export default whatwedo
