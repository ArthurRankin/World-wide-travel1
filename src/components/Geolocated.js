import React from 'react';
import {geolocated} from 'react-geolocated';
import GeolocatedTemp from './GeolocatedTemp';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            resultLoaded: false,
            mounted: false,
            objResult: {},
            showResult: false,
            value:'',
        }
    }

    componentDidMount = () => {
        console.log('we made it here');
        setTimeout(() => {
            console.log('what about here');
            let lat = this.props.coords.latitude;
            let long = this.props.coords.longitude;
            this.getWeather(lat, long);
            

        }, 5000);
    }

    getWeather = (lat, long) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&APPID=aeace81c0d72e15b17ad94207544e2f8`)
        .then(data => data.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    resultLoaded: true,
                    objResult: result,
                });
            },
            (error) => {
                this.setState ({
                    showResult:true,
                    error: error,
                });
            })
        }

    render() {
        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.state.resultLoaded
            ? <div>
                <GeolocatedTemp
                resultLoaded={this.state.resultLoaded}
                name={this.state.objResult.city.name} 
                temp={this.state.objResult.list[0].main.temp} />
                </div>
            : <div className="d-flex justify-content-center text-light">Getting your location data&hellip; </div>;
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 4000,
})(Demo);