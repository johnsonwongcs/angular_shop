app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl(api,productService,$location,products){
	var self = this;
	this.api = api;

	//services
	this.productService = productService;
	this.products = products;
	console.log(this.products);
	this.api.request('/retrieve_orders',{},'GET')
		.then(function(response){
			console.log(response);
		});

}
