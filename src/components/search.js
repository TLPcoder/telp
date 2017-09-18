import React from 'react';
import {connect} from 'react-redux';
import * as place from '../actions/place-actions';
import Places from './places';
import Pages from './pages';

const Search = (props) => {
    let searchQuery = null;
    const flickerSearch = () => {
        props.getPlaces(searchQuery.value);
    }
    console.log('look here', props);
    if (props.places !== null && props.places.data.length > 0) {
        console.log(props);
        var collection = props.places.data.map(el => {
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
                <input type="button" value="Search" onClick={() => (flickerSearch())}/>
                {collection}
                <Pages store={props}/>
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