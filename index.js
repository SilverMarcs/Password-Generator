
let passLength = 8

let firstPass = document.getElementById("first-pass");
let secondPass = document.getElementById("second-pass");

populatePass()

function generatePassword(length = 15) {
    let password = '';
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = length;

    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }

    for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }

    const msg = `Your new password is: "${password}"`
    console.log(msg);
    return password;
}

function populatePass() {
    firstPass.textContent = generatePassword();
    secondPass.textContent = generatePassword();
}