import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main';
import Card from './Card'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false);
    const [customAvatarLink, setCustomAvatarLink] = useState({});
    const [customUserName, setCustomUserName] = useState("");
    const [customUserJob, setCustomUserJob] = useState("");
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({ link: "", title: "" });


    useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setCustomAvatarLink(res.avatar)
                setCustomUserName(res.name)
                setCustomUserJob(res.about)
            })
            .catch(res => {
                console.log("Server returned this error message:", res)
            })
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then(res => {
                const custCardData = res.map((data) => ({
                    cardLink: data.link,
                    cardTitle: data.name,
                    cardLikes: data.likes,
                    cardId: data._id
                }))
                setCards(custCardData)
            })
            .catch(res => {
                console.log("Server returned this error message:", res)
            })
    }, [])


    function openEditProfilePopup() {
        setIsEditProfilePopupOpen(true);
    };

    function openAddPlacePopup() {
        setIsAddPlacePopupOpen(true);
    };

    function openEditAvatarPopup() {
        setIsEditAvatarPopupOpen(true);
    };

    function openPicturePopup() {
        setIsPicturePopupOpen(true)
    }
  
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsPicturePopupOpen(false)
        setSelectedCard({ link: "", title: "" });;
    }

    return (
        <div className="page-container">
            <Header />

            <Main
                userAvatar={customAvatarLink}
                userName={customUserName}
                userDescription={customUserJob}
                onEditAvatarClick={openEditAvatarPopup}
                onEditProfileClick={openEditProfilePopup}
                onAddPlaceClick={openAddPlacePopup}>
                <div className="places">
                    {cards.map((data) => {
                        return (
                            <Card
                                cardLink={data.cardLink}
                                cardTitle={data.cardTitle}
                                cardLikes={data.cardLikes.length}
                                key={data.cardId}
                                onCardClick={() => {
                                    setSelectedCard({
                                        link: data.cardLink,
                                        title: data.cardTitle
                                    })
                                    openPicturePopup()
                                }
                                }
                            />
                        )
                    })}
                </div>
            </Main>

            <PopupWithForm name="edit" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="name-input" className="popup__input popup__input_text_name" type="text" name="name" placeholder="Jacques Cousteau" minLength="2" maxLength="40" required />
                <span id="name-input-error" className="popup__error-message"></span>
                <input id="profession-input" className="popup__input popup__input_text_profession" type="text" name="profession" placeholder="Explorer" minLength="2" maxLength="200" required />
                <span id="profession-input-error" className="popup__error-message"></span>
            </PopupWithForm>

            <PopupWithForm name="add" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input id="toponym-input" className="popup__input popup__input_text_toponym" type="text" name="name" placeholder="Title" minLength="1" maxLength="30" required />
                <span id="toponym-input-error" className="popup__error-message"></span>
                <input id="url-input" className="popup__input popup__input_text_link" type="url" name="link" placeholder="Image URL" required />
                <span id="url-input-error" className="popup__error-message"></span>
            </PopupWithForm>

            <PopupWithForm name="avatar" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="image-url-input" className="popup__input popup__input_text_link" type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                <span id="image-url-input-error" className="popup__error-message"></span>
            </PopupWithForm>

            <PopupWithForm name="sure" title="Are you sure?" />

            <ImagePopup
                isOpen={isPicturePopupOpen}
                onClose={closeAllPopups}
                fullViewLink={selectedCard.link}
                fullViewTitle={selectedCard.title} />
                
            <Footer />

        </div>
    );
}

export default App;