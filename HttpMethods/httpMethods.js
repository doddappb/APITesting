
var Request=require('request');
var Chai=require('chai');
 var httpMethods=function(){
  var _getAPI=function(uri){
    Request.get(uri,{auth:{bearer:'leUxJtKw8d-bn7Rat-1NXcDR0cN2a8ZVl5RM'}},function(error,response,body){
        // Request.arguments
    //  var bod=JSON.parse(body)
    // console.log(response.statusCode);
     console.log(JSON.parse(body));
     console.log(body);
    Chai.expect(200).eql(response.statusCode);

    
    
    });
};
var _postAPI=function(uri){
    Request.post(uri,{"headers": { "content-type": "application/json" },auth:{bearer:'leUxJtKw8d-bn7Rat-1NXcDR0cN2a8ZVl5RM'},
    "body": JSON.stringify({
        "first_name":"TestQA",
        "last_name":"Biradar1",
        "gender":"male",
        "email":"testQA@gmail.com",
        "status":"active"
      })
    },function(error,response,body){
     console.log(body);
     console.log(response.statusCode);
     Chai.expect(200).eql(response.statusCode);
    
    });
};
var _putAPI=function(uri){
    Request.put(uri,{"headers": { "content-type": "application/json" },auth:{bearer:'leUxJtKw8d-bn7Rat-1NXcDR0cN2a8ZVl5RM'},
    "body": JSON.stringify({
        "first_name":"DMB",
        "last_name":"Biradar."
        
      })
    },function(error,response,body){
     console.log(body);
     console.log(response.statusCode);
      Chai.expect(200).eql(response.statusCode);
    
    });
};
var _deleteAPI=function(uri){
       Request.delete(uri,{auth:{bearer:'leUxJtKw8d-bn7Rat-1NXcDR0cN2a8ZVl5RM'}},function(error,response,body){
    //  var bod=JSON.parse(body)
    console.log(body);
     console.log(response.statusCode);
    Chai.expect(200).eql(response.statusCode);
    
    });
};
    
return{
    getAPI:_getAPI,
    postAPI:_postAPI,
    putAPI:_putAPI,
    deleteAPI:_deleteAPI
};
};

module.exports= httpMethods();