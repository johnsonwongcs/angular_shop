app.service('productService',ProductService);

function ProductService(api){
	//services
	this.api = api;
	this.cart = JSON.parse(localStorage.getItem('Cart'));
	this.products = localStorage.getItem('products');
}


ProductService.prototype.retrieveProducts = function(){
	var self = this;
	return this.api.request('/retrieve_products/team2',{},'GET');
}

ProductService.prototype.setProducts = function(products){
	//store the products in local storage so you don't have to make an API
	//request each time you are on this page.
	localStorage.setItem('products',JSON.stringify(products));
	this.products = products;
}

ProductService.prototype.getProducts = function(){
	var self = this;
	//if there are no products stored in localStorage
	//grab them from the API,store them in localStorage
	//and pass back the products as a promise
	if(this.products == null){
		return this.retrieveProducts().then(function(response){
				self.setProducts(response.data.products);
				return response.data.products;
		   });
	}
	else{
		if (typeof(self.products) == "object"){
			return self.products;
		} else {
		return JSON.parse(self.products);
		}
	}
}
ProductService.prototype.addProduct = function(product){
 	//TODO: add the new product to the current product list and
 	//return the updated list
	return this.api.request('/newproduct',product,'POST')
			.then(function(response){
				var entry = response.data;
				console.log(entry);
				var existingEntries = [];

				existingEntries = JSON.parse(localStorage.getItem("products"));
				console.log(existingEntries);
	 			existingEntries.push(entry);
	 			
	 			localStorage.setItem('products', JSON.stringify(existingEntries));
			});
}
ProductService.prototype.getProduct = function(productId){
	if (typeof(this.products) !== "object"){
		this.products = JSON.parse(this.products);
	}
	return this.products.filter(function(product) {return product.productId == productId})[0];
}
// ProductService.prototype.verifyCart = function(){

// }
