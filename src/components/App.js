import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main';
import Card from './Card'
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false);
  
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({ link: "", title: "" });
    const [currentUser, setCurrentUser] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        api.getUserInfo()
            .then(currentUser => {
                setCurrentUser(currentUser)
            })
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then(res => {
                const custCardData = res.map((data) => ({
                    link: data.link,
                    name: data.name,
                    likes: data.likes,
                    _id: data._id,
                    ownerId: data.owner._id
                }))
                setCards(custCardData)
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
        setIsPicturePopupOpen(false);
        setSelectedCard({ link: "", title: "" });
    }

    function handleUpdateUser(userData) {
        setIsSaving(true)
        api.editUserInfo(userData)
            .then(newUserData => {
                setCurrentUser(newUserData);
                setIsSaving(false)
                closeAllPopups();
            });
    };

    function handleUpdateAvatar(link) {
        setIsSaving(true)
        api.uploadUserAvatar(link)
            .then(res => {
                setCurrentUser(res);
                setIsSaving(false);
                closeAllPopups();
            });
    };

    function handleAddPlaceSubmit(placeInfo) {
        setIsSaving(true)
        api.postNewCard(placeInfo)
            .then(res => {
                setCards([res, ...cards]);
                setIsSaving(false);
                closeAllPopups();
            });
    };

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then(newCard => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
    }

    return (
        <div className="page-container">

            <Header />
            <CurrentUserContext.Provider value={currentUser}>
                <Main
                    onEditAvatarClick={openEditAvatarPopup}
                    onEditProfileClick={openEditProfilePopup}
                    onAddPlaceClick={openAddPlacePopup}>
                    <div className="places">
                        {cards.map((data) => {
                            return (
                                <Card
                                    cardData={data}
                                    link={data.link}
                                    name={data.name}
                                    likesCounter={data.likes.length}
                                    ownerId={data.ownerId}
                                    likes={data.likes}
                                    key={data._id}
                                    cardId={data._id}
                                    onCardClick={() => {
                                        setSelectedCard({
                                            link: data.link,
                                            title: data.name
                                        })
                                        openPicturePopup()
                                    }
                                    }
                                    onCardLike={handleCardLike}
                                    onCardDelete={() =>
                                        api.deleteCard(data._id)
                                            .then(() => {
                                                setCards(cards.filter((item) => item._id !== data._id));
                                            })
                                    }
                                />
                            )
                        })}
                    </div>
                </Main>

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isSaving={isSaving} />

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isSaving={isSaving} />

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} isSaving={isSaving} />

                <ImagePopup
                    isOpen={isPicturePopupOpen}
                    onClose={closeAllPopups}
                    fullViewLink={selectedCard.link}
                    fullViewTitle={selectedCard.title} />

                <Footer />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;