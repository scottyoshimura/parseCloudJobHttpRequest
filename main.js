//lets define the job. we will use a promise scheme, and just print the response to the log.
Parse.Cloud.job('simpleGetRequest', function(request, response) {
    Parse.Cloud.httpRequest(
        {
            url: "www.cnn.com",
            success: function(httpResponse) {
                //lets just see if we can get the console to do anyting
                console.log("we made it to this line in the http Request")
                //when we used response.success twice in this program we got an error, so we will comment out the response.success below and use it in a later closure.
               //response.success("the http request was succesful")
            },
            error: function(httpResponse) {
                response.error('request failed with response code ' + httpResponse)
            }
        }   
        ).then(function(httpResponse) {
        console.log(httpResponse);
        //lets just see if we can get the console to do anyting
        console.log('we made it to this line in the job')
        response.success("the http response was succeful")
        }, function(httpResponse) {
        response.error('request failed with response code ' + httpResponse)
    });
});
