const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand"
}

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return numbers[number];
    }

    let numberString = number.toString();

    switch (numberString.length) {
        case 2:
            return getDoubleDigitNumber(numberString.split("")).trimEnd();
        case 3:
            return getThreeDigitNumber(numberString.split("")).trimEnd();
        case 4:
            return getFourDigitNumber(numberString.split("")).trimEnd();
        default:
            return new Error("Not implemented");
    }
}

function getDoubleDigitNumber(numberString) {
    let predefinedValue = numbers[parseInt(numberString.join(""))];

    if (predefinedValue != undefined) {
        return predefinedValue;
    }

    return getTens(parseInt(numberString[0])) + getUnits(parseInt(numberString[1]));
}

function getThreeDigitNumber(numberString) {
    return getHundreds(parseInt(numberString[0])) + getDoubleDigitNumber(numberString.slice(1));
}

function getFourDigitNumber(numberString) {
    return getThousands(parseInt(numberString[0])) + getThreeDigitNumber(numberString.slice(1));
}

function getUnits(number) {
    if (number == 0) {
        return "";
    }

    return numbers[number];
}

function getTens(number) {
    if (number == 0) {
        return "";
    }

    return numbers[number * 10] + " ";
}

function getHundreds(number) {
    if (number == 0) {
        return ""
    }

    return getUnits(number) + " " + numbers[100] + " ";
}

function getThousands(number) {
    return getUnits(number) + " " + numbers[1000] + " ";
}
