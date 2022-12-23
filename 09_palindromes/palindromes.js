const palindromes = function (str) {
let processedString = str.toLowerCase().replace(/[^A-Za-z]/g, "");

return (
    processedString
    .split("")
    .reverse()
    .join("") === processedString
);
};

// Do not edit below this line
module.exports = palindromes;
