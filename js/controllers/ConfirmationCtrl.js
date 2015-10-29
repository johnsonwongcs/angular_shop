app.controller('ConfirmationCtrl',ConfirmationCtrl);

function ConfirmationCtrl(api){
	this.api = api;
	this.sendCart = {};
	this.sendCart = JSON.parse(localStorage.getItem('sendCart'));

}

ConfirmationCtrl.prototype.sendOrder = function(){
	this.api.request('/record_order',this.sendCart,'POST')
		.then(function(response){
			console.log(response);
		});
}

function confirmation() {
    alert("Thanks for you order! Your items are on their way");
}