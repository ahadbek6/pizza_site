// Hamir tanlash bosqichi
const selectElement = document.getElementById('mySelect');
const spanElement = document.getElementById('selectedValue');

selectElement.addEventListener('change', function() {
    const selectedValue = selectElement.options[selectElement.selectedIndex].text;
    spanElement.textContent = selectedValue;
});

// Kattaligini tanlash bosqichi
const radioInputs = document.querySelectorAll('.label_input');
const elspanElement = document.getElementById('selectedSize');

radioInputs.forEach(input => {
    input.addEventListener('change', function() {
        if (input.checked) {
            elspanElement.textContent = input.value;
        }
    });
});

// Ustiga qo'shimcha tanlaymiz
const checkboxInputs = document.querySelectorAll('.checkbox-input input');
const ulElement = document.querySelector('.listt');

checkboxInputs.forEach(input => {
    input.addEventListener('change', function() {
        const value = input.value;
        const liToRemove = Array.from(ulElement.children).find(li => li.textContent.includes(value));
        if (input.checked) {
            if (!liToRemove) {
                const liElement = document.createElement('li');
                liElement.className = 'list-group-item';
                liElement.textContent = value;
                ulElement.appendChild(liElement);
            }
        } else if (liToRemove) {
            ulElement.removeChild(liToRemove);
        }
    });
});

// Tanlanmagan checkboxlarni o'chirish uchun funksiya
function removeUncheckedCheckboxes() {
    checkboxInputs.forEach(input => {
        if (!input.checked) {
            const value = input.value;
            const liToRemove = Array.from(ulElement.children).find(li => li.textContent.includes(value));
            if (liToRemove) {
                ulElement.removeChild(liToRemove);
            }
        }
    });
}

// Sahifani yuklashda tanlanmagan checkboxlarni o'chirish
removeUncheckedCheckboxes();
// Qo'shimcha tanlaymiz
const checkInputs = document.querySelectorAll('.qoshimcha .checkbox-input input');
const spanQoshimcha = document.getElementById('selectedAdditions');

checkInputs.forEach(input => {
    input.addEventListener('change', function() {
        const selectedAdditions = Array.from(checkInputs)
            .filter(input => input.checked)
            .map(input => input.value)
            .join(', ');
            spanQoshimcha.textContent = selectedAdditions;
    });
});