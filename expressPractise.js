let express = require('express');
let app = express();
var bodyParser = require('body-parser');  
app.get("/",function(req,res){
    res.send('Read text check');
})

//http://localhost:8080/ReadJSON?checkVal=true
app.get("/ReadJSON",function(req,res){
    if(req && req.query && req.query.checkVal=="true")
    {
    let json = {
        "response":{
            "message": "Successfully posted the get request"
        }
    }
    res.status(201).json(json);
}
else
{
    let error = {
        "error": "checkVal is False"
    }
    res.status(401).send(error)
}
})

app.post("/postPayload",bodyParser.json({extended: false}),function(req,res){
    let response = {};
    console.log(req.body)
    if(req && req.body && req.body.validation)
    {
        console.log(JSON.stringify(req.body))
        let inputpayload = req.body;
        if(inputpayload && inputpayload.validation == "true")
        {
            response.acceptance = "true";
        }
        else
        {
            response.acceptance = "false";
        }

        response.data = inputpayload;
        res.status(203)
    }
    else
    {
        response = {
            "errorMessage": "Payload in invalid",
            "errorInfo" : "POST check"
        }
        res.status(403);
    }
    res.send(response);
})

let server = app.listen(8080,function(){
    console.log("Server started: ")
    console.log(server.address().port)
})