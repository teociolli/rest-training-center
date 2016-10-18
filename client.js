//Example POST method invocation 
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = { 
    data: { 'title': 'foo', 'body': 'bar', 'userId' : 1 },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://jsonplaceholder.typicode.com/posts", args, function (data, response) {
    // parsed response body as js object 
    console.log(data.id);
    // console.log(data.password);    
    // console.log(data.twitter);

    // raw response 
    //console.log(response);
});
 

/*

// registering remote methods 
client.registerMethod("postMethod", "http://localhost:3000/method", "POST");
 
client.methods.postMethod(args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});
*/