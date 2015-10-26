app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl($routeParams,productService){
	this.productService = productService;
}
ProductCtrl.prototype.addProduct = function(name,description,image,price,category,quantity,status){
	//create the api request that makes the product on the backend
	//as part of your response you need to add it to your current
	//product array using the product service
	var request_body = {
		name:name,
		image:image,
		description:description,
		price:price,
		category:category,
		quantity:quantity,
		status:status
	}
	console.log(request_body);
	console.log(this.productService.getProducts());

	this.productService.addProduct(request_body);

}
ProductCtrl.prototype.findEditProduct = function(productID){

}