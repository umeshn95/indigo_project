import React from 'react'
import campaignimg from '../images/welcome__indigo.png';
import {Link} from 'react-router-dom';
import Navbardata from './Navbardata';
import Footer from './Footer';
function Startcampaign() {
    return (
        <div className='start__campaign'>
            <div className='navbar__data'><Navbardata></Navbardata></div>
        <div className='start__campaign__image'><img src={campaignimg}></img></div>
        <Footer></Footer>
    </div>
    )
}

export default Startcampaign





