'use strict';
import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery:null,
            searchLocation:false
        }
    }
    searchTelp = () => {
        this.props.search.getPlaces({term: this.searchQuery.value, location: this.props.search.places.currenLocation});
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setCurrentPosition);
        } else {
            console.log('didnt work')
        }
    }

    setCurrentPosition = (position) => {
        this.props.search.currentLocation({currenLocation:{lat: position.coords.latitude, lng: position.coords.longitude}});
    }
    render(){
        if(!this.state.searchLocation){
            return (
                <form action="">
                    <input required type="text" name="" id="" ref={sq => (this.searchQuery = sq)}/>
                    Use Current Location<input type="checkbox" onClick={() => (this.getLocation)}/>
                    Search Location<input type="checkbox" onClick={() => {
                        this.setState({searchLocation: !this.state.searchLocation})
                    }}/>
                    <input type="button" value="Search" onClick={() => (this.searchTelp())}/>
                </form>
            )
        }else {
            return(
                <form action="">
                    <input type="text" name="" id="" ref={sq => (this.searchQuery = sq)}/>
                    <br/>
                    <input type="text" placeholder = 'address, neighborhood, city, state or zip' ref={sq => (this.searchQuery = sq)}/>
                    Use Current Location<input type="checkbox" onClick={() => (this.getLocation)}/>
                    Search Location<input type="checkbox" onClick={() => {
                        this.setState({searchLocation: !this.state.searchLocation})
                    }}/>
                    <input type="button" value="Search" onClick={() => (this.searchTelp())}/>
                </form>
            )
        }
    }
}

export default Search;