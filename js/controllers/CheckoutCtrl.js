app.controller('CheckoutCtrl',CheckoutCtrl);

function CheckoutCtrl($location){
	
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
	console.log(this.sendCart);
	localStorage.setItem('sendCart', JSON.stringify(this.sendCart));

}

CheckoutCtrl.prototype.gotoConfirmation = function(){
	this.location.path(/confirmation/);
}