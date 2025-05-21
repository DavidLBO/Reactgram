const mongoose = require("mongoose");

// connection
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://player1:3DbxURM5Ons4YQj6@reactgram.i946dsa.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectou ao banco!");
        return dbConn;
    } catch (error) {
        console.log(error);
    }
};
conn();

module.exports = conn;