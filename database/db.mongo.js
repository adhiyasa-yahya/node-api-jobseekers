const mongoose = require("mongoose");

const connectdb = async function (url, options) {
    await mongoose.connect(url, options)
}

const connecting = function () {
    console.log('connecting to MongoDB...');
}

const onError = function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
};

const connected = function () {
    console.log('MongoDB connected!');
};

const open = function () {
    console.log('MongoDB connection opened!');
};

const reconnected = function () {
    console.log('MongoDB reconnected!');
};

const disconnected = async function (url, options) {
    console.log('MongoDB disconnected!');
    await mongoose.connect(url, options);
};

module.exports = { connectdb, connecting, onError, connected, open, reconnected, disconnected }