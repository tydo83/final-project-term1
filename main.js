//memo part
const memoBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const clearBtn = document.querySelector(".clear-btn")

memoBtn.addEventListener('click', () => {
    const memoItem = document.createElement('li');
    const memoDisplay = document.querySelector('.memo-item')
    const memo = document.querySelector('.memo-input')
    memoItem.innerText = memo.value 
    memoDisplay.appendChild(memoItem);
})

removeBtn.addEventListener('click', () => {
    
})


// search part
const xhr = new XMLHttpRequest();
const app_id = config.app_id;
const app_key = config.app_key;

xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    const output = document.querySelector('.output');
    console.log(data);
    output.innerText = data.foods[0].nf_calories;
})

const searchBtn = document.querySelector('.search-button')
searchBtn.addEventListener('click', () => {
    
    const userInput = JSON.stringify({
        query: document.querySelector(".search-box").value,
    })
    
    xhr.open("POST", "https://trackapi.nutritionix.com/v2/natural/nutrients");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-app-id", app_id);
    xhr.setRequestHeader("x-app-key", app_key);
    xhr.send(userInput);
})

