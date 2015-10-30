app.controller('CheckoutCtrl',CheckoutCtrl);

function CheckoutCtrl($location,api,productService){
	
	this.ProductService = productService;
	console.log(this.ProductService);
	this.api = api;
	this.location = $location
	this.Cart = JSON.parse(localStorage.getItem('Cart'));
	console.log(this.Cart);
	this.subtotal = 0;
	for (i=0;i<this.Cart.length;i++){
		this.subtotal += this.Cart[i].price * this.Cart[i].orderQuantity;
		console.log(this.Cart[i].price);
	}
	this.tax = this.subtotal * 0.13;
	this.total = this.subtotal + this.tax;

	this.sendCart = {};
	this.sendCart.cart = JSON.parse(localStorage.getItem('Cart'));
	this.sendCart.total = this.subtotal;
	this.sendCart.tax = this.tax;
	this.sendCart.final_total = this.total;
	this.products = JSON.parse(localStorage.getItem('products'));
	console.log(this.sendCart);
	localStorage.setItem('sendCart', JSON.stringify(this.sendCart));

}

CheckoutCtrl.prototype.gotoConfirmation = function(){
	this.location.path(/confirmation/);
}
CheckoutCtrl.prototype.sendOrder = function(){
	this.ProductService.verifyCart();
	this.api.request('/record_order',this.sendCart,'POST')
		.then(function(response){
			console.log(response);
		});
}

CheckoutCtrl.prototype.confirmation = function(){
    alert("Thanks for you order! Your items are on their way");
    // this.ProductService.updateLocalStorage();
		
}