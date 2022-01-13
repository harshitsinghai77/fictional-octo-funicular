const bcrypt = require("bcryptjs");

function get_hash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

console.log(get_hash(""));
