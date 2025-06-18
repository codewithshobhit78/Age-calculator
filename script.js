const btnELement = document.getElementById('button');
const inputElement = document.getElementById('birthday');
const resultElement = document.getElementById('result');

function calculateAge() {
    const birthDate = new Date(inputElement.value);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    resultElement.textContent = `Your age is ${age} years old`;
}

btnELement.addEventListener('click', calculateAge);
