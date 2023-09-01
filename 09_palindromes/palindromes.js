const palindromes = function (palindrome) {
    palindrome = palindrome.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    palindrome = palindrome.toLowerCase();
    let reversedStr = palindrome.split("").reverse().join("");
    return palindrome === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
