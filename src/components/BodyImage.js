import React from 'react';
import './bodyimage.css';


let PrettyPic = (props) => {
    return(
        <div className="pretty-pic">
            <img src={props.pic} className="img-fluid rounded mx-auto d-block" alt="Responsive" />
        </div>
    );
}


export default PrettyPic;