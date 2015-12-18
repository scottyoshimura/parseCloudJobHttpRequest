//lets define the job. we will use a promise scheme, and just print the response to the log.
Parse.Cloud.job('seattleGovDataGetRequest', function(request, response) {
    var date = new Date()
    console.log(date)
    //note that in the above, it is outputting dates in ISO 8601 format.
        //so the below httpRequest is not really needed.
    Parse.Cloud.httpRequest(
        {
          //lets create a get request to log a user in and get a tokens
            url: 'https://api.parse.com/1/login?username=addyourusername&password=addyourpassword',
            headers: {
    'X-Parse-Application-Id': 'addyourappid',
    'Content-Type': 'application/json',
    'X-Parse-REST-API-Key': 'addyourrestapikey',
    'X-Parse-Revocable-Session': '1' },
            success: function(httpResponse) {
                //lets just see if we can get the console to do anyting
                console.log("Below is the response from the REST API")
                console.log(date)
                console.log(httpResponse.text)
                //now we need to extract hte sessoin from this.
                //when we used response.success twice in this program we got an error, so we will comment out the response.success below and use it in a later closure.
               //response.success("the http request was succesful")
            },
            error: function(httpResponse) {
                response.error('the first request failed with response code ' + httpResponse)
            }
        }   
        )



Parse.Cloud.httpRequest(
        {
            url: "http://www.cnn.com",
            success: function(httpResponse) {
                console.log("Below is the response from the SODA api");
                //when we used response.success twice in this program we got an error, so we will comment out the response.success below and use it in a later closure.
               //response.success("the http request was succesful")
               var objects = httpResponse;
               console.log(httpResponse);
 
            },
            error: function(httpResponse) {
                response.error('request failed with response code ' + httpResponse);
            }
        }   
        ).then(function(httpResponse) {
        response.success("The seattleGovDataGetRequest job was a success");
        }, function(httpResponse) {
        response.error('request failed with response code ' + httpResponse);
    });
});
