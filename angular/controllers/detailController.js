myApp.controller('detailController',['$http','detailService','linkService',function($http,detailService,linkService){
var main=this;
this.category=detailService.category;
this.data={};
this.linkData={};
this.linkCategory='';
this.linkValue='';
this.charName='';
this.charNames=[];
this.povNames=[];
this.allegiances=[];
this.povBookNames=[];
this.bookNames=[];
this.cadetBranchNames=[];
this.swornMemberNames=[];
this.overLord='';
this.currentLord='';
this.founder='';
this.heir='';

this.loadDetails = function(){
                detailService.getDetails()  
				.then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                //console.log(response);
                main.data=response.data;
              

   if(main.category=='books')
   {             
        for(var i in response.data.characters)
      {
        linkService.setLinkUrl(response.data.characters[i])
            .then(function successCallback(response1){

               // console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.charNames.push(response1.data.name);
             });   
       }

        for(var j in response.data.povCharacters)
      {
        linkService.setLinkUrl(response.data.povCharacters[j])
            .then(function successCallback(response1){

                //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.povNames.push(response1.data.name);
             });   
       }

    }      

    if(main.category=='characters')
    {
        for(var x in response.data.allegiances)
        {
            linkService.setLinkUrl(response.data.allegiances[x])
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.allegiances.push(response1.data.name);
            });   
        }
        for(var y in response.data.povBooks)
        {
            linkService.setLinkUrl(response.data.povBooks[y])
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.povBookNames.push(response1.data.name);
            });   
        }
        for(var z in response.data.books)
        {
            linkService.setLinkUrl(response.data.books[z])
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.bookNames.push(response1.data.name);
            });   
        }
    }
    if(main.category=='houses')
    {
        for(var a in response.data.cadetBranches)
        {
            linkService.setLinkUrl(response.data.cadetBranches[a])
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.cadetBranchNames.push(response1.data.name);
            });   
        }
        for(var b in response.data.swornMembers)
        {
            linkService.setLinkUrl(response.data.swornMembers[b])
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.swornMemberNames.push(response1.data.name);
            });   
        }
            linkSe//rvice.setLinkUrl(response.data.currentLord)
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.currentLord=response1.data.name;
            });
            linkService.setLinkUrl(response.data.overlord)
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.overLord=response1.data.name;
            });
        linkService.setLinkUrl(response.data.heir)
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.heir=response1.data.name;
            });
        linkService.setLinkUrl(response.data.founder)
            .then(function successCallback(response1)
            {   //console.log(response1);
                //console.log(response1.data);
                //console.log(response1.data.name);
                main.founder=response1.data.name;
            });                

    }
 },
        function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);

        });
	};

}]); 