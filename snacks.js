// Snack 1
const getInitials = fullname => {
  const initials = fullname.split(" ");
  return initials[0].slice(0, 1) + initials[1].slice(0, 1);
}

// Snack 2
const createSlug = string => string.toLowerCase();

module.exports = {
  getInitials,
  createSlug
}