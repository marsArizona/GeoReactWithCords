import React from 'react';
import Geocode from 'react-geocode';

class Home extends  React.Component{

    constructor(props){
        super(props);
        this.state ={
            long: '48.8583701,',
            lat: '2.2922926'
        }

    }

    componentDidMount() {

        Geocode.setApiKey('AIzaSyBbWXD5bRP7HQlhQlK6pqoz6UKqK-cmwdY');
        Geocode.enableDebug();
        Geocode.fromAddress('Palacio de los Deportes').then(
            response => {
                console.log(response.results);
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
        return(
            <h1>niggas</h1>
        );
    }

}
export default Home;