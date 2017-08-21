import React from 'react';
import {connect} from 'react-redux';
import * as place from '../actions/place-actions';
import Photo from './place-photos';

const Search = (props) => {
    let searchQuery = null;
    const flickerSearch = () => {
        props.getPlaces(searchQuery.value);
    }
    if (props.places.id !== null && props.places.id.data.length > 10) {
        var collection = props.places.id.data.map(el => {
            return <Photo data={el}/>
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
                <input type="button" value="Search" onClick={() => (flickerSearch())}/>
                {collection}
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
                <input type="button" value="Search" onClick={() => (flickerSearch())}/>
            </div>
        )
    }
}

export default connect(({places}) => ({places}), place)(Search)