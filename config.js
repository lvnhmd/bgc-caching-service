require('dotenv').config({ path: './.env' });

module.exports = {
  port: process.env.PORT || 8080,
};
