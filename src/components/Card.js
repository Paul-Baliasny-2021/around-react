import React from 'react';
import bin from '../images/Trash.svg'

function Card(props) {

    return (
        <div className="place">
            <button type="button" className="place__delete"><img src={bin} alt="trash bin" /></button>
            <img className="place__image" src={`${props.cardLink}`} alt="user content cards" onClick={props.onCardClick} />
            <div className="place__description">
                <h2 className="place__title">{props.cardTitle}</h2>
                <div className="place__like-box">
                    <button type="button" className="place__like place__like_active"></button>
                    <span className="place__like-counter">{props.cardLikes}</span>
                </div>
            </div>
        </div>
    )
}

export default Card