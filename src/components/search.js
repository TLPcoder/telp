'use strict';
import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery: null,
            addressLocation: false
        }
        this.addressLocation = null;
        this.searchQuery = null;
    }
    searchTelp = () => {
        console.log('hello there bro', this.addressLocation.value);
        if(!!this.addressLocation){
            console.log('hello', this.addressLocation.value);
            this.props.search.getPlaces({term: this.searchQuery.value, location: this.addressLocation.value});
        }else{
            this.props.search.getPlaces({term: this.searchQuery.value, location: this.props.search.places.currenLocation});
        }
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
        if(!this.state.addressLocation){
            return (
                <form action="">
                    <input required type="text" name="" id="" ref={sq => (this.searchQuery = sq)}/>
                    <br/>
                    Use Current Location<input type="checkbox" onClick={() => (this.getLocation)}/>
                    <br/>
                    Search Location<input type="checkbox" onClick={() => {
                        this.setState({addressLocation: !this.state.addressLocation})
                    }}/>
                    <input type="button" value="Search" onClick={() => (this.searchTelp())}/>
                </form>
            )
        }else {
            return(
                <form action="">
                    <input type="text" placeholder = 'address, neighborhood, city, state or zip' name="" id="" ref={sq => (this.addressLocation = sq)}/>
                    <br/>
                    <input type="text" placeholder = 'search term' ref={sq => (this.searchQuery = sq)}/>
                    <br/>
                    Use Current Location<input type="checkbox" onClick={() => {
                        this.setState({addressLocation: !this.state.addressLocation})
                        this.getLocation
                    }}/>
                    <br/>
                    Search Location<input checked type="checkbox" onClick={() => {
                        this.setState({addressLocation: !this.state.addressLocation})
                    }}/>
                    <input type="button" value="Search" onClick={() => (this.searchTelp())}/>
                </form>
            )
        }
    }
}

export default Search;