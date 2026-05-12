const userCardsContainer = document.querySelector('[data-user-cards-container]');
const userCardTemplate = document.querySelector('[data-user-template]');

   // SEARCH FUNCTIONALITY
 const searchInput = document.querySelector('[data-search]');

 let users = [];

    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
            user.element.classList.toggle('hide', !isVisible);
        });
    });

    
// GETTING USER INFORMATION FROM API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector('[data-header]');
            const body = card.querySelector('[data-body]');
            header.textContent = user.name;
            body.textContent = user.email;
            userCardsContainer.append(card)
            return { name: user.name, email: user.email, element: card };
        });
    });


    // MODAL POPUP
const popup = document.getElementById('myModal');
function openPopup() {
        popup.style.display = "block";
};

window.addEventListener('load', openPopup());

function closePopup() {
    popup.style.display = "none";
};
  
