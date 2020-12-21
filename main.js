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
    
    const calories = document.querySelector(".calories");
    const totalfat = document.querySelector(".totalfat")
    const cholesterol = document.querySelector(".cholesterol")
    const fiber = document.querySelector(".fiber")
    const protein = document.querySelector(".protein")
    const sFat = document.querySelector(".sFat")
    const sodium = document.querySelector(".sodium")
    const sugar = document.querySelector(".sugar")
    const carbo = document.querySelector(".carbo")

    
    console.log(data.foods[0]);
    
    calories.innerText = `Calories: ${data.foods[0].nf_calories} kcal`;
    totalfat.innerText = `Total fat: ${data.foods[0].nf_total_fat} g`;
    cholesterol.innerText = `Cholesterol: ${data.foods[0].nf_cholesterol} mg`;
    fiber.innerText = `Fiber: ${data.foods[0].nf_dietary_fiber} g`;
    protein.innerText = `Protein: ${data.foods[0].nf_protein} g`;
    sFat.innerText = `Saturated fat: ${data.foods[0].nf_saturated_fat} g`;
    sodium.innerText = `Sodium: ${data.foods[0].nf_sodium} mg`;
    sugar.innerText = `Sugar: ${data.foods[0].nf_sugars} g`;
    carbo.innerText = `Carbohydrate: ${data.foods[0].nf_total_carbohydrate} g`;
    

    
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

