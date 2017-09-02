module.exports = (app) => {	
	require('../api/routes/product.route')(app);
	
	return app;
};