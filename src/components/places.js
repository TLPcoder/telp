import React from 'react';
import ReactStars from 'react-stars';

const Places = (props) => {
    return (
        <div id='card'>
            <div id = 'place'>
                <img
                    id='place-image' src={props.data.image_url.length === 0
                    ? 'https://i.giphy.com/media/k61nOBRRBMxva/200_s.gif' : props.data.image_url}
                    alt="" height='200px' width='200px'/>
                <div id='info-left'>
                    <h3 id='location-name'>{props.data.name}</h3>
                    <ReactStars id='rating' count={props.data.rating} edit='false' color1='red' size='24'/>
                    <p id='category'>{(props.data.price === undefined ? '' : 
                    props.data.price + ' - ') + props.data.categories.map(t => (t.title)).join(',')}</p>
                </div>
                <div id='info-right'>
                    <p id='location'>{props.data.location.display_address[0]}</p>
                    <p id='location'>{props.data.location.display_address[1]}</p>
                    <p id='phone-number'>{props.data.display_phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Places;