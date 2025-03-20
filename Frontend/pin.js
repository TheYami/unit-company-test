const validPin = '147369';
let enteredPin = '';
const pinButtons = document.querySelectorAll('.keypad .key');
const pinDisplay = document.querySelectorAll('.pin-box .pin');
const backButton = document.querySelector('.back-button-box');


backButton.addEventListener('click', () => {
    window.location.href = 'tel.html';
});

pinButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('delete')) {
            enteredPin = enteredPin.slice(0, -1);
        } else if (enteredPin.length < 6) {
            enteredPin += button.textContent.trim();
        }

        updatePinDisplay();

        if (enteredPin.length === 6) {
            verifyPin();
        }
    });
});

function updatePinDisplay() {
    pinDisplay.forEach((pin, index) => {
        if (index < enteredPin.length) {
            pin.classList.add('filled');
        } else {
            pin.classList.remove('filled');
        }
    });
}

function verifyPin() {
    if (enteredPin === validPin) {
        window.location.href = 'homePage.html';
    } else {
        alert('PIN ไม่ถูกต้อง');
        enteredPin = '';
        updatePinDisplay();
    }
}