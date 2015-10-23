app.controller('MainCtrl',MainCtrl);

function MainCtrl(){
	
	this.productService = productService;
	this.products = products;
}