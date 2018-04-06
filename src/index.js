import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import PrettyPic from './components/BodyImage.js';
import Footer from './components/Footer.js';
import pic from './images/pretty_picture.jpg';




class Application extends React.Component {
    render() {

        let trips = {
            trip1:"https://www.tripadvisor.com/Tourism-g186485-Scotland-Vacations.html", 
            trip2:"https://www.go-today.com/paris.aspx", 
            trip3:"http://www.sunnylandtours.com/middle-east-and-africa/egypt", 
            trip4:"https://www.travelchannel.com/destinations/us/tn"
        }
        
        return(
            <div>
                <Header title="World Wide Travel, Inc"/>
                <PrettyPic pic={pic}/>
                <Footer trips={trips} />
            </div>
        
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('dom-updater'));



