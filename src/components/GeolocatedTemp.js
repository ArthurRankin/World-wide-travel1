import React from 'react';


let GeolocatedTemplate = (props) => {
    return(
        props.resultLoaded ?
        <div className="container text-center text-light">
            <h4>Temperature for your area:</h4>
            <p key={props.name}>
                {props.name}: {props.temp}
            </p>
        </div>
        :
        <div>
        </div>
    )
}


export default GeolocatedTemplate;