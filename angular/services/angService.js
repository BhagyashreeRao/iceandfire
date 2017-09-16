myApp.service('dataService',function($http)
{
	var baseUrl='https://www.anapioficeandfire.com/api';
	
	this.getBooks = function(){

		return $http.get(baseUrl+'/books?page=1&&pageSize=50');
	};
	this.getCharacters =function(y){

		return $http.get(baseUrl+'/characters?page='+y+'&&pageSize=50');
	};
	this.getHouses =function(z){
			
		return $http.get(baseUrl+'/houses?page='+z+'&&pageSize=50');
		
	};
});

myApp.service('detailService',function($http)
{
	this.baseUrl='';
	this.res1=[];
	this.setUrl = function(urlValue){
		this.baseUrl = urlValue;
		this.res1=this.baseUrl.split("/");
		this.category=this.res1[this.res1.length-2];
		this.value=this.res1[this.res1.length-1];
	};
	
	this.getDetails = function()
	{	
		return $http.get(this.baseUrl);
	};
	
});

myApp.service('linkService',function($http)
{
	this.linkUrl='';
	this.res1=[];
	this.setLinkUrl = function(urlValue){
		this.linkUrl = urlValue;
		this.res1=this.linkUrl.split("/");
		this.category=this.res1[this.res1.length-2];
		this.value=this.res1[this.res1.length-1];
		return $http.get(this.linkUrl);
	};
/*	this.getLinkDetails = function()
	{	
		return $http.get(this.linkUrl);
	};
*/	
});
