//memo section
const memoBtn = document.querySelector(".add-btn");
memoBtn.addEventListener('click', () => {
    const memoItem = document.createElement('li');
    const memoDisplay = document.querySelector('.memo-item')
    const memoUserInput = document.querySelector('.memo-input')
    memoItem.innerText = memoUserInput.value
    memoItem.id = memoItem.length
    memoDisplay.appendChild(memoItem);
})

const removeBtn = document.querySelector(".remove-btn");
removeBtn.addEventListener('click', () => {
    const lists = document.querySelectorAll('li');
    for (const item of lists) {
        item.addEventListener('click', (event) => {
            event.target.remove();
        })
    }
})

const clearBtn = document.querySelector(".clear-btn")
clearBtn.addEventListener('click', () => {
    const memoItem = document.querySelector('.memo-item');
    memoItem.innerText = "";
})

// search part
const xhr = new XMLHttpRequest();
const app_id = config.app_id;
const app_key = config.app_key;

xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    const output1 = document.querySelector('.photo');
    const output2 = document.querySelector(".info1");
    const output3 = document.querySelector(".info2")
    
    output1.src = data.foods[0].photo.thumb;
    output2.innerText = `calories: ${data.foods[0].nf_calories}`;
    output3.innerText = `fat: ${data.foods[0].nf_total_fat}`;
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

