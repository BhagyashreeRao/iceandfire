myApp.directive("bookCard",function(){

	
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/book-card.html",


	};

});

myApp.directive("houseCard",function(){

	
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/house-card.html",

	};

});// end post preview card directive


myApp.directive("charCard",function(){

	
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/char-card.html",

	};

});