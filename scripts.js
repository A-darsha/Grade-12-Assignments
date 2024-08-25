document.addEventListener('DOMContentLoaded', () => {
    const aboutMeLink = document.getElementById('about-me-link');
    const contactsLink = document.getElementById('contacts-link');
    const popupAboutMe = document.getElementById('popup-about-me');
    const popupContacts = document.getElementById('popup-contacts');
    const closeAboutMe = document.getElementById('close-about-me');
    const closeContacts = document.getElementById('close-contacts');

    function showPopup(popup) {
        popup.style.display = 'flex';
    }

    function hidePopup(popup) {
        popup.style.display = 'none';
    }

    aboutMeLink.addEventListener('click', (event) => {
        event.preventDefault();
        showPopup(popupAboutMe);
    });

    contactsLink.addEventListener('click', (event) => {
        event.preventDefault();
        showPopup(popupContacts);
    });

    closeAboutMe.addEventListener('click', () => {
        hidePopup(popupAboutMe);
    });

    closeContacts.addEventListener('click', () => {
        hidePopup(popupContacts);
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupAboutMe) {
            hidePopup(popupAboutMe);
        }
        if (event.target === popupContacts) {
            hidePopup(popupContacts);
        }
    });
});
