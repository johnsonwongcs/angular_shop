app.controller('MainCtrl',MainCtrl);

function MainCtrl(productService, products){
	this.productService = productService;
	this.products = products;
}