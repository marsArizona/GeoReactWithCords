import React, {Component} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng , geocodeByPlaceId} from 'react-google-places-autocomplete';

class CompUno extends Component {

    constructor(props){
        super(props);

        this.state ={ addres: "some"
        }
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect = (event) =>{

        this.setState((state, props)=>{
            state.addres = event
        },()=>{
            console.log(this.state.addres)
            geocodeByAddress(this.state.addres.description)
                .then(results => getLatLng(results[0]))
                .then(({ lat, lng }) =>
                    console.log('Successfully got latitude and longitude', { lat, lng })
                );


        });

    };

    render() {
        const {addres} = this.state;

        console.log(addres);
        //console.log(this.props);
        return (


            <div>
                <GooglePlacesAutocomplete
                    onSelect={this.onSelect}

                />

            </div>
        );
    }
}

export default CompUno;