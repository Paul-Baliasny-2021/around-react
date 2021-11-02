import React from 'react';
import pen from '../images/VectorPen.svg';
import plus from '../images/VectorPlus.svg';

function Main(props) {
    return (
        <div className="main-content">
            <section className="profile">
                <button className="profile__avatar-container" onClick={props.onEditAvatarClick}>
                    <img src={`${props.userAvatar}`} alt="Avatar" className="profile__image" />
                    <div className="profile__avatar-overlay">
                        <img src={pen} alt="pen" className="profile__avatar-pen" />
                    </div>
                </button>
                <div className="profile__info">
                    <div className="profile__name-line">
                        <h1 className="profile__name">{props.userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfileClick}>
                            <img src={pen} alt="pen" className="profile__edit-pen" />
                        </button>
                    </div>
                    <p className="profile__about">{props.userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlaceClick}>
                    <img src={plus} alt="plus" className="profile__plus" />
                </button>
            </section>
            {props.children}
        </div>
    )
}

export default Main;