// set the variable update button to our button

var updateBtns = document.getElementsByClassName('update-cart')


for (var i = 0; i<updateBtns.length; i++){
	updateBtns[i].addEventListener('click', function(){
		var productId= this.dataset.product
		var action= this.dataset.action
		console.log('productId:',productId,'action:',action)
		

		console.log('User:',user)
		if (user == 'AnonymousUser'){
			console.log('User is not authenticated/not logged')
		}else{
			updateUserOrder(productId, action)
		}



	})
}

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

	var url = '/update_item/'

	fetch(url, {
		method: 'POST',
		headers:{
			'Content-Type':'application/json',
			'X-CSRFToken' : csrftoken,
			// need to add csrf token through django docs to get csrf within js file 
			//itself- by adding csrf in the basic.html
		}, 
		body:JSON.stringify({'productId': productId, 'action':action})
	} )
	.then((response) =>{
		return response.json()
	})
	.then((data) =>{
		console.log('data:', data)
		location.reload() 
	})

}