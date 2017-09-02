var mongoHost = process.env.MONGO_PORT_27017_TCP_ADDR || 'admin:admin@ds111204.mlab.com';
var mongPort = process.env.MONGO_PORT_27017_TCP_PORT || '11204';

var serverAddress = 'mongodb://' + mongoHost + ':' + mongPort;
var connectionString = serverAddress + "/ggtg-base-test";

module.exports = {
	secret: 'developmentSecret',
	mongodb: {
		uri: connectionString,
		options: { }		
	}
};


// mongodb://<dbuser>:<dbpassword>@ds111204.mlab.com:11204/ggtg-base-test