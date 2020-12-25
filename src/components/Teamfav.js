import React from 'react'
import "./Teamfav.css"


function Teamfav(props) {
    return (
        <div className="teamfav">
            <div className="teamfav__component">
             <img src={props.imgsrc}></img>
            <div className="see__collection">SEE COLLECTION</div>
            </div>
            <p>Our roundup of standout projects</p>
    
        </div>

        
    )
}

export default Teamfav
