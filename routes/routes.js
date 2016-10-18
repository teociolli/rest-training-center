var appRouter = function(app) {


// Handle the request from outside (parse the body)	

    app.post("/account", function(req, res) {

    	console.log(req.body);
    	console.log(req.body.username);
    	console.log(req.body.password);
    	console.log(req.body.twitter);

        req.body.username = "pass__: " + req.body.username;
        req.body.password = "pass__: " + req.body.password;
        req.body.twitter = "pass__: " + req.body.twitter;


        if(!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({"status": "error", "message": "missing parameters"});
            //return res.send(req.body);
        } else {
         // call the BPM API!!!   
            return res.send(req.body);
        }
    });

}
 
module.exports = appRouter;