import React, {Component} from 'react';

const Photo = (props) => {
    const photoInfo = props.data
    return (
        <div>
            <img
                src={`http://farm${photoInfo.farm}.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}.jpg`}
                alt="No Image Sorry"/>
        </div>
    )
}
export default Photo