// Snack 1
const getInitials = fullname => {
  const initials = fullname.split(" ");
  return initials[0].slice(0, 1) + initials[1].slice(0, 1);
}

// Snack 2/4
const createSlug = string => string.toLowerCase().replaceAll(" ", "-");

// Snack 3
const average = numbers => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length
}

// Snack 5
const isPalindrome = string => {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome
}