app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(productService, products, $location){
	this.productService = productService;
	this.products = products;
	this.location = $location;
}
ShopCtrl.prototype.goToProduct = function(){

}