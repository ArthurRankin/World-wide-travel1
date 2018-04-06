import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import PrettyPic from './BodyImage.js';
import Footer from './Footer.js';
import pic from './images/pretty_picture.jpg';



class Application extends React.Component {
    render() {
        return(
            <div>
                <Header title="World Wide Travel, Inc"/>
                <PrettyPic pic={pic}/>
                <Footer trip="https://www.tripadvisor.com/Tourism-g186485-Scotland-Vacations.html 
                            https://www.go-today.com/paris.aspx 
                            http://www.sunnylandtours.com/middle-east-and-africa/egypt 
                            https://www.travelchannel.com/destinations/us/tn" />
            </div>
        
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('dom-updater'));



