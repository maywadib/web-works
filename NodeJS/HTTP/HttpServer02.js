const http = require("http");
const fs = require("fs")


http.createServer((req,res) => {
    const readStream = fs.createReadStream("./json/employee.json");

    //its the responsibility of the header to tell what kind of file
    res.writeHead(200, {'content-type' : "application/json"});
    readStream.pipe(res);
}).listen(3000);