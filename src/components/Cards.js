import React from 'react';

function Cards(props) {
    return (
        <div className='card' style={{margin: "auto"}}>
            <img className='card__image' src={props.img} alt="{props.location}" />
            <div className="card__body">
                <div className="card__body--top card-top">
                    <i class="fa-solid fa-location-dot"></i>
                    <span className='card-top__country'>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card__body--title">{props.title}</div>
                <div className="card__body--date">{props.startDate} - {props.endDate}</div>
                <div className="card__body--description">{props.description}</div>
            </div>
        </div>
    )
}

export default Cards