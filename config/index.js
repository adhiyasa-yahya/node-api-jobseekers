require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_DBNAME: process.env.MONGO_DBNAME,
    MONGODB_REMOTE_URI: process.env.MONGODB_REMOTE_URI,
    JWT_KEY: process.env.JWT_KEY,
    JWT_EXPIRED: process.env.JWT_EXPIRED || 60
}