const bcrtypt = require("bcrypt");
const saltRounds = 10;

const rawPassword = "password";

bcrtypt.genSalt(saltRounds, (err, salt) => {
  if (err) return console.log(err);

  bcrtypt.hash(rawPassword, salt, (err, hash) => {
    if (err) return console.log(err);

    const bcrtyptPassword = hash;
    console.log(bcrtyptPassword);

    bcrtypt.compare(rawPassword, bcrtyptPassword, (err, compare) => {
      console.log(compare);
    });
  });
});
