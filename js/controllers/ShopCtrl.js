app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(productService, products, $location){
	this.productService = productService;
	this.products = products;
	this.location = $location;
	this.randomProducts = this.products.slice(0,3);
	console.log(this.products);
}
ShopCtrl.prototype.displayRandom = function(){
    
}