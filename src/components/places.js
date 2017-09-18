import React from 'react';

const Places = (props) => {
    return (
        <div id = 'place'>
            <img id = 'place-image' src={props.data.image_url} alt="" height='200px' width='200px'/>
            <div id = 'info-left'>
                <h3 id='location-name'>{props.data.name}</h3>
                <p id='rating'>{props.data.rating}</p>
                <p id='category'>{props.data.price + ' - ' + props.data.categories.map(t => (t.title)).join(',')}</p>
            </div>
            <div id = 'info-right'>
                <p id='location'>{props.data.location.display_address[0]}</p>
                <p id='location'>{props.data.location.display_address[1]}</p>
                <p id='phone-number'>{props.data.display_phone}</p>
            </div>
        </div>
    )
}

export default Places;