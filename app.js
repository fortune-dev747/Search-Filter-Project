// MODAL POPUP
const popup = document.getElementById('myModal');


function openPopup() {
    popup.style.display = 'block';
}
function closePopup() {
    popup.style.display = 'none';
}

window.addEventListener('load', openPopup);



// Search Functionality
const searchInput = document.querySelector('[data-search]');
let users = [];

// Listening to what you typed 
searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();

    users.forEach(user => {
        const isAvailable = user.name.value.toLowerCase(value) || user.email.value.toLowerCase(value);

        user.element.classList('hide', !isAvailable);

    });
});


// RESULTS OF THE CONTAINERS
const userCardsContainer = document.querySelector('[data-user-cards-container]');
const userCardTemplate = document.querySelector('[data-user-template]');

// GET THE INFO FROM THE API
fetch ('https://jsonplaceholder.typicode.com/users')
// convert the data into readable data 
.then(response => response.json())
.then (data => {

    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector('[data-header]');
        const body = card.querySelector('[data-body]');


        header.textContent = user.name;
        body.textContent = user.email;
        userCardsContainer.append(card);

        return { name: user.name, email:user.email, element:card}
    })
})

