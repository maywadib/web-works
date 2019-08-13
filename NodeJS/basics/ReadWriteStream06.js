const fs = require('fs');

//to read and write files in the form of chunks


const readstream = fs.createReadStream("./files/sample.txt", "UTF-8");
const writeStream = fs.createWriteStream("./files/newsample.txt", "UTF-8");

//of this is it doesnt read the entire file in 1 go rather it
//will be taken in chunks

readstream.on("data", (chunk) =>{
    console.log(chunk);
    writeStream.write(chunk);
})


//zlib is to compress