// Завдання 1: Підрахунок літер у рядку
function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const firstCount = countLetter(firstRow, letter);
    const secondCount = countLetter(secondRow, letter);
    
    if (firstCount > secondCount) {
        return firstRow;
    } else if (secondCount > firstCount) {
        return secondRow;
    } else {
        return 'Both rows have equal numbers of the letter';
    }
}

// Завдання 1 *
const firstRow = prompt('Enter the first row: ', 'Slow and steady wins the race');
const secondRow = prompt('Enter the second row: ', 'You can say that again');
const letter = prompt('Enter the letter to count: ', 'a');
alert(`The row with more letters '${letter}': ${getRow(firstRow, secondRow, letter)}`);

// Завдання 2: Форматування номера телефону
function formattedPhone(phone) {
    let cleanedPhone = phone.replace(/[^\d]/g, ''); 

    if (cleanedPhone.length === 10) {
        cleanedPhone = '38' + cleanedPhone;
    } else if (cleanedPhone.length === 11 && cleanedPhone.startsWith('8')) {
        cleanedPhone = '3' + cleanedPhone;
    }

    if (cleanedPhone.length !== 12 || !cleanedPhone.startsWith('38')) {
        return 'Неправильний формат телефону';
    }

    return `+${cleanedPhone.slice(0, 2)} (${cleanedPhone.slice(2, 5)}) ${cleanedPhone.slice(5, 8)}-${cleanedPhone.slice(8, 10)}-${cleanedPhone.slice(10)}`;
}

// Завдання 2 *
const phone = prompt('Enter the phone number: ', '+380664567890');
alert(`Formatted phone: ${formattedPhone(phone)}`);
