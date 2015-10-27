app.controller('CheckoutCtrl',CheckoutCtrl);

function CheckoutCtrl(){
	
	this.Cart = JSON.parse(localStorage.getItem('Cart'));
	console.log(this.Cart);
	this.subtotal = 0;
	for (i=0;i<this.Cart.products.length;i++){
		this.subtotal += this.Cart.products[i].price * this.Cart.products[i].orderQuantity;
		console.log(this.Cart.products[i].price);
	}
	console.log(this.subtotal);
	this.tax = this.subtotal * 0.13;
	this.total = this.subtotal + this.tax;
}