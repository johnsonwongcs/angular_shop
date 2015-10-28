app.controller('ProductPageCtrl',ProductPageCtrl);

function ProductPageCtrl(productService,$routeParams,$location){
	this.productService = productService;
	this.productId = $routeParams.productId;
	this.location = $location;
	this.cart = JSON.parse(localStorage.getItem('Cart'));
	if(this.cart == null){
		this.cart = [];
	}

	this.product = productService.getProduct(this.productId);
	console.log(this.product);

}

ProductPageCtrl.prototype.addToCart = function(product, orderQuantity){
	var duplicate = false;
	for (var i=0;i<this.cart.length;i++){
		if (this.cart[i].productId == product.productId){
			this.cart[i].orderQuantity += orderQuantity;
			duplicate = true;
		}
	};
	if (duplicate == false) {
		product.orderQuantity = orderQuantity;
		this.cart.push(product);
	}
	console.log(duplicate);
	localStorage.setItem('Cart', JSON.stringify(this.cart));
	console.log(this.cart);
	// this.location.path(/home/);
}

ProductPageCtrl.prototype.plus = function() {

	// console.log(this.orderAmount);
	this.orderAmount++;	

}
ProductPageCtrl.prototype.minus = function() {

	if (this.orderAmount > 1) {
		this.orderAmount--;	
	}

}
