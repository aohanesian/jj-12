`use strict`;

let questionOne = +prompt(`Введи год рождения`);
let messageOne;
const age = 2022 - questionOne;

if (questionOne !== 0) {
    messageOne = `Твой возраст ${age}.`;
} else {
    alert(`Жаль что ты не ввел дату рождения`)
}
let questionTwo = prompt(`В каком городе ты живешь? (Киев, Москва или Минск)`);
let messageTwo;

switch (questionTwo) {
    case null:
        alert(`Жаль что ты не ввел свой город.`);
        break;
    case `Киев`:
        messageTwo = `Ты живешь в столице Украины, ${questionTwo}.`;
        break;
    case `Москва`:
        messageTwo = `Ты живешь в столице рф, ${questionTwo}.`;
        break;
    case `Минск`:
        messageTwo = `Ты живешь в столице Беларуси, ${questionTwo}.`;
        break;
    default:
        messageTwo = `Ты живешь в городе ${questionTwo}.`;
}

let questionThree = prompt(`Любимый спорт?(Футобол, Бокс, F1)`);
let messageThree;
let sportMessage = `Круто! Хочешь стать как`;

switch (questionThree) {
    case null:
        alert(`Жаль что ты не ввел свой любимый вид спорта.`);
        break;
    case `Футбол`:
        messageThree = `${sportMessage} Криштиану Роналду`;
        break;
    case `Бокс`:
        messageThree = `${sportMessage} Александр Усик`;
        break;
    case `F1`:
        messageThree = `${sportMessage} Макс Ферстаппен`;
        break;
    default:
        messageThree = `Твой любимый спорт - ${questionThree}`;
}

console.log(`${messageOne} ${messageTwo} ${messageThree}`);