import React from 'react';
import './weather.css';





function WeatherComponent (props) {
    return (
        <div className="text-center">
            <h4>Temperature for your area:</h4>
            <p key={props.name}>
                {props.name}: {props.temp}
            </p>
        </div>
    )
} 




class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            weatherLoaded: false,
            objResult: {},
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getWeather();
    }

    getWeather() {
        console.log("getWeather");
        fetch("http://api.openweathermap.org/data/2.5/forecast?zip=37210,us&units=imperial&APPID=aeace81c0d72e15b17ad94207544e2f8")
        .then(data => data.json())
        .then(
            (result) => {
                console.log('result from promise', result);
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
        <div>

            <WeatherComponent
            name={objResult.city.name}
            temp={objResult.list[0].main.temp} />

        </div>
            )
        }
    }
}

export default Weather;