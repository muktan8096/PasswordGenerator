
function generatePassword() {
    // Define the character sets
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!#$%&()*+';

    // Get user input values
    const nrLetters = parseInt(document.getElementById('letters').value) || 0;
    const nrSymbols = parseInt(document.getElementById('symbols').value) || 0;
    const nrNumbers = parseInt(document.getElementById('numbers').value) || 0;

    let passwordList = [];

    // Add random letters
    for (let i = 0; i < nrLetters; i++) {
        passwordList.push(letters[Math.floor(Math.random() * letters.length)]);
    }

    // Add random symbols
    for (let i = 0; i < nrSymbols; i++) {
        passwordList.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    // Add random numbers
    for (let i = 0; i < nrNumbers; i++) {
        passwordList.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    // Shuffle the password list
    for (let i = passwordList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordList[i], passwordList[j]] = [passwordList[j], passwordList[i]];
    }

    // Convert list to a single string
    const password = passwordList.join('');

    // Display the password output
    document.getElementById('output').textContent = `Your password is: ${password}`;

    // Clear the input fields after generating
    document.getElementById('letters').value = "";
    document.getElementById('symbols').value = "";
    document.getElementById('numbers').value = "";
}
