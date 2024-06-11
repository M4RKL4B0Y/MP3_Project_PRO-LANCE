require('dotenv').config();

module.exports = {
    secret: process.env.SECRET_KEY //used for signing and verifying the tokens to ensure integrity and authenticity
};