const { Given, When, Then, BeforeAll, After, AfterAll, Status } = require("cucumber");


var HttpMethods=require('../HttpMethods/httpMethods');
var Chai=require('chai');

    Then(/^Get the API response and verify the status code$/, { timeout: 1000 * 1000 },async function() {
        await HttpMethods.getAPI("https://gorest.co.in/public-api/users"); 
        Chai.expect(200).eql(200);
      });

    // function getAllAPI(){
    // //     //GetAll Data
    //     HttpMethods.getAPI("https://gorest.co.in/public-api/users");  
    //     // HttpMethods.postAPI("https://gorest.co.in/public-api/users");    
    //     // HttpMethods.putAPI("https://gorest.co.in/public-api/users/28091"); 
    //     // HttpMethods.deleteAPI("https://gorest.co.in/public-api/users/28091"); 
    // //     // Get only FirstName=TestQA
    // //     // HttpMethods.getAPI("https://gorest.co.in/public-api/users?first_name=TestQA") 
    // //     //Delete the recor where id=27819  
    // //     // HttpMethods.getAPI("https://gorest.co.in/public-api/users/27819")   
    // //     // HttpMethods.getAPI("https://gorest.co.in/public-api/users?first_name=TestQA")   
    // // }
    
    // }
    
    // module.exports=getAllAPI();


