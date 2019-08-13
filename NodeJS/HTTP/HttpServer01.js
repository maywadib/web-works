const http = require("http");
const server = http.createServer((req,res) => {

    // res.write("Hello world from NodeJs");
    // res.end();


    //if you are using root domain
    if(req.url==="/") {
        res.write("Hello world from NodeJs");
        res.end();    
    } else {
        res.write("You are looking for sub-domain data");
        res.end();
    
    }

});

server.listen(3000);