import React from 'react';
import './bodyimage.css';


let PrettyPic = (props) => {
    return(
        <div className="pretty-pic">
            <img src={props.pic} className="img-fluid" alt="Responsive" />
        </div>
    );
}


export default PrettyPic;