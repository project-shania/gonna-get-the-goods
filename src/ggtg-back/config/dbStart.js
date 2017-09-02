var mongoose = require('mongoose');
var config   = require('./config');

mongoose.Promise = global.Promise;
var mongoConnection = mongoose.connect(config.mongodb.uri, config.mongodb.options);

mongoConnection.connection.on('error', (err) => { console.log('Error while connecting to mongodb: ', err); });
mongoConnection.connection.on('connected', () => { console.log('MongoDB successfully connected'); });

module.exports = {
  MongoConnection: mongoConnection
};