const nameInput = document.getElementById('nameInput');
const displayHeading = document.getElementById('displayHeading');

nameInput.addEventListener('input', function (event) {
    const enteredText = event.target.value;
    const filteredText = enteredText.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and space

    displayHeading.textContent = filteredText;
});
