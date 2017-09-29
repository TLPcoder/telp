import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as place from '../actions/place-actions';
import * as pages from '../actions/page-actions'
import Places from './places';
import Pages from './pages';

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchQuery = null;
    }
    componentDidMount = () =>{
        this.getLocation();
    }
    searchTelp = () => {
        this.props.getPlaces({term: this.searchQuery.value, location: this.props.places.currenLocation});
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log('didnt work')
        }
    }
    showPosition = (position) => {
        this.props.currentLocation({currenLocation:{lat: position.coords.latitude, lng: position.coords.longitude}});
        console.log(this.props);
    }
    render() {
        if (this.props.places !== null && this.props.places.photoIds && this.props.places.photoIds.data.length > 0) {
            console.log(this.props);
            var collection = this.props.places.photoIds.data.map(el => {
                    return <Places data={el}/>
                })
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        search for something bro
                    </p>
                    <input type="text" name="" id="" ref={sq => (this.searchQuery = sq)}/>
                    <input type="button" value="Search" onClick={() => (this.searchTelp())}/> {collection}
                    <Pages
                        page={{
                        nextPage: this.props.nextPage,
                        previousPage: this.props.previousPage,
                        toPage: this.props.toPage,
                        page: this.props.page,
                        setSearch: this.props.setSearch,
                        searchTerm: this.props.places.searchTerm,
                        places: this.props.places.photoIds.data,
                        back: this.props.back,
                        location: this.props.places.currenLocation
                    }}/>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        search for something bro
                    </p>
                    <input type="text" name="" id="" ref={sq => (this.searchQuery = sq)}/>
                    <input type="button" value="Search" onClick={() => (this.searchTelp())}/>
                </div>
            )
        }
    }
}

export default connect(({places, page}) => ({places, page}), {...place, ...pages})(Search)