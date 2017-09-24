import React from 'react';
import {connect} from 'react-redux';
import * as place from '../actions/place-actions';
import * as pages from '../actions/page-actions'
import Places from './places';
import Pages from './pages';

const Search = (props) => {
    let searchQuery = null;
    console.log('my props', props);
    const searchTelp = () => {
        props.getPlaces(searchQuery.value);
    }
    if (props.places !== null && props.places.photoIds.data.length > 0) {
        console.log(props);
        var collection = props.places.photoIds.data.map(el => {
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
                <input type="text" name="" id="" ref={sq => (searchQuery = sq)}/>
                <input type="button" value="Search" onClick={() => (searchTelp())}/>
                {collection}
                <Pages page={{
                    nextPage: props.nextPage,
                    previousPage: props.previousPage,
                    toPage: props.toPage,
                    page: props.page,
                    setSearch: props.setSearch,
                    searchTerm: props.places.searchTerm,
                    places: props.places.photoIds.data,
                    back: props.back                
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
                <input type="text" name="" id="" ref={sq => (searchQuery = sq)}/>
                <input type="button" value="Search" onClick={() => (searchTelp())}/>
            </div>
        )
    }
}

export default connect(({places, page}) => ({places,page}), {...place, ...pages})(Search)