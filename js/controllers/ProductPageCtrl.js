app.controller('ProductPageCtrl',ProductPageCtrl);

function ProductPageCtrl(productService, $routeParams){
	this.productService = productService;
	console.log($routeParams.productId);
	this.productId = $routeParams.productId;
	console.log(this.productId);
	this.product = productService.getProduct(this.productId);
}
