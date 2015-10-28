app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(productService, products, $location){
	this.productService = productService;
	this.products = products;
	this.location = $location;
	this.randomProducts = this.products.slice(0,3);
	console.log(this.randomProducts);
}
ShopCtrl.prototype.goToProduct = function(product){
    this.location.path('product/'+product.productId);
}