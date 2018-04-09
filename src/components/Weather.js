import React from 'react';
import './weather.css';

class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            weatherLoaded: false,
            weather: {},
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getWeather();
    }

    getWeather() {
        console.log("getWeather");
        fetch("http://api.openweathermap.org/data/2.5/forecast?zip=37129,us&units=imperial&APPID=aeace81c0d72e15b17ad94207544e2f8")
        .then(data => data.json())
        .then(
            (result) => {
                console.log('result', result);
                this.setState({
                    weatherLoaded: true,
                    objResult: result,
                });
            },
            (error) => {
                this.state ({
                    error: error,
                });
            })
        }

    render() {
        const { error, weatherLoaded, objResult } = this.state;

        if (error) {
        return( 
            <div>
                Error: {error.message}
            </div>
        )
        } 
        else if (!weatherLoaded) { 
        return ( 
            <div className="text-center">
                Loading...
            </div>
        )
        } else {
        return(
            <div className="text-center">
                <h4>Temperature for your area:</h4>
                <p key={objResult.city.name}>
                    {objResult.list[0].main.temp}
                </p>
            </div>
                
            )
        }
    }
}

export default Weather;