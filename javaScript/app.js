const inputValue = document.querySelector('.input-value');
const btn = document.querySelector('.submit-btn');
const grocerayList = document.querySelector('.groceray-list');


function appendList(event) {
    event.preventDefault();

    
    //inputValue.value = "";
}

btn.addEventListener('click', function (event) {
    event.preventDefault();

    let items = JSON.parse(localStorage.getItem('list-item')) || []; // Get existing items or initialize an empty array
    items.push(inputValue.value); // Add the new value to the array
    localStorage.setItem('list-item', JSON.stringify(items)); // Store updated array

    grocerayList.innerHTML += `<li class="li">${inputValue.value}
    <button class="delete-btn" > X </button>
    </li>
    `; // Display on screen
    inputValue.value = ''; // Clear input field after submission
});
//localStorage.clear();
document.addEventListener('DOMContentLoaded', function () {
    let items = JSON.parse(localStorage.getItem('list-item')) || []; // Get stored items or initialize empty array

    const grocerayList = document.querySelector('.groceray-list');
    items.forEach(item => {
        grocerayList.innerHTML += `<li class="li">${item}
            
<button class="delete-btn"> X </button>
        </li>
        `; // Display each item
    });
});

