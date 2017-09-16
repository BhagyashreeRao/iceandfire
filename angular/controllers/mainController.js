myApp.controller('mainController',['$http','$filter','dataService','detailService',function($http,$filter,dataService,detailService){
var main=this;
this.allData=[];
this.allBooks=[];
this.allHouses=[];
this.allCharacters=[];
this.category='';
this.value='';
this.show='showAll';
  
this.loadAllData = function(){

               	dataService.getBooks()  
				.then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                //console.log(response);
                //console.log(response.data);
                for(var i in response.data){
                main.allBooks.push(response.data[i]);
    
                }
                main.allData=main.allData.concat(main.allBooks);
        //      console.log(main.allBooks);

                },
        function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
        });
//        console.log(main.allBooks);	

    for(var j=1; j<10; j++)
    {    
        dataService.getHouses(j)
        	   .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                //console.log(response);
                //console.log(response.data);
                
                main.allHouses=main.allHouses.concat(response.data);
                main.allData=main.allData.concat(response.data);
  //              console.log(main.allHouses);
                },
            function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         if(j==9){
        alert("some error occurred. Check the console.");
        console.log(response);
    }
        });
    }
    
        for(var k=1; k<44; k++)
      {
        dataService.getCharacters(k)
        		.then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available

                //console.log(response);
                //console.log(response.data);
                main.allCharacters=main.allCharacters.concat(response.data);
                main.allData=main.allData.concat(response.data);
    //          console.log(main.allCharacters);
    //          console.log(main.allData);
          },
        function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         if(k==43){
        alert("some error occurred. Check the console.");
        console.log(response);
        }
        });
    }  	
    //      console.log(main.allCharacters);
    };
    this.loadAllData();
    this.getUrl=function(url)
    {
        detailService.setUrl(url);
        //console.log(detailService.baseUrl);
        //console.log(detailService.res1);
        console.log(detailService.category);
        console.log(detailService.value);
        main.category=detailService.category;
        main.value=detailService.value;
        detailService.getDetails()  
                .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response);
            });
    };

    this.currentPage = 0;
    this.pageSize = 20;
    this.q = '';
    
    this.getData1 = function () {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
     
  
       // manual filter
       // if u used this, remove the filter from html, remove above line and replace data with getData()
       /*
        var arr = [];
        if(main.q == '') {
            arr = main.allData;
        } else {
            for(var ea in main.allData) {
                if(main.allData[ea].indexOf(main.q) > -1) {
                    arr.push( main.allData[ea] );
                }
            }
        }
        return arr;
        */
      //  console.log(main.allData);
        var arr = [];
        if(main.q=='')
        { 
            if(main.show == 'showAll') 
            {
                arr = main.allData;
            } 
            else if(main.show == 'showBooks') 
            {
                arr = main.allBooks;
            }
            else if(main.show == 'showHouses')
            {
                arr = main.allHouses;
            }
            else if(main.show == 'showChars') 
            {
                arr = main.allCharacters;
            }
        /*  if(main.q !== '') {
            for(var ea in main.allData) {
                if(main.allData[ea].name.indexOf(main.q) > -1) 
                {
                arr.push( main.allData[ea] );
                }
            }
           } 
        */
        return arr;
    }
    else
    {
         if(main.show == 'showAll') 
        {   arr=main.allData;
            return $filter('filter')(arr, main.q);
        }
          if(main.show == 'showBooks') 
        {   arr=main.allBooks;
            return $filter('filter')(arr, main.q);
        }
          if(main.show == 'showHouses') 
        {   arr=main.allHouses;
            return $filter('filter')(arr, main.q);
        }
          if(main.show == 'showChars') 
        {   arr=main.allCharacters;
            return $filter('filter')(arr, main.q);
        }
    }
};
    
    this.numberOfPages=function(){
        console.log();
        return Math.ceil( main.getData1().length / main.pageSize );                
    };
}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});  





