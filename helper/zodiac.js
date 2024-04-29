function getChineseZodiac(birthdate) {
    const date = new Date(birthdate);
    const birthYear = date.getFullYear()
    const startYear = 1900;
    const animalSigns = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig"
    ];

    const zodiacIndex = (birthYear - startYear) % 12;
    return animalSigns[zodiacIndex];
}

module.exports = getChineseZodiac
