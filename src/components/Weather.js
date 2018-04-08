import React from 'react';

class Weather extends React.Component {


    getWeather() {
        console.log("getJoke");
        fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
        .then(data => data.json())
        .then(
            (result) => {
                console.log('result', result);
                this.setState({
                    jokeLoaded: true,
                    objResult: result,
                });
            },
            (error) => {
                this.state ({
                    showResults: true,
                    error: error,
                });
            })
        }

}