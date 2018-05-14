import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import pic from './images/body-pic3.jpg';
import Guides from './components/Guides';
import Weather from './components/Weather.js';
import { BrowserRouter } from 'react-router-dom';
import Geolocatd from './components/Geolocated';
import './components/application.css'






class Application extends React.Component {
    
    render() {

          


        let trips = {
            trip1:"https://www.tripadvisor.com/Tourism-g186485-Scotland-Vacations.html", 
            trip2:"https://www.go-today.com/paris.aspx", 
            trip3:"http://www.sunnylandtours.com/middle-east-and-africa/egypt", 
            trip4:"https://www.travelchannel.com/destinations/us/tn"
        }
        
        return(
            <BrowserRouter>
                <div>
                    <Header title="World Wide Travel, Inc"/>
                    <Geolocatd />
                    <Weather />
                    <Guides />
                    <Footer trips={trips} />
                </div>
            </BrowserRouter>
        
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('dom-updater'));



