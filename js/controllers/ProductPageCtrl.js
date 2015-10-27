app.controller('ProductPageCtrl',ProductPageCtrl);

function ProductPageCtrl(productService, $routeParams){
	this.productService = productService;
	this.productId = $routeParams.productId;
	this.cart = JSON.parse(localStorage.getItem('Cart'));
	if(this.cart == null){
		this.cart = [];
	}

	this.product = productService.getProduct(this.productId);

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
	localStorage.setItem('Cart', JSON.stringify(this.cart));
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
