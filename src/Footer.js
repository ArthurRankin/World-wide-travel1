import React from 'react';
import './footer.css';


let Footer = (props) => {
    return(
        <div className="container">
            <div className="footer d-flex justify-content-center mt-5 pt-5 mb-5 pb-5">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link " href={props.trip}>Scotland</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.trip}>Paris</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.trip}>Egypt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href={props.trip}>Tennessee</a>
                    </li>
                </ul>
            </div>
            <div className="text-center mt-5">
                <p>&copy 2018 Arthur Smith</p>
            </div>
        </div>
    );
}


export default Footer;