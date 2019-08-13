const fs = require('fs')

const zlib = require('zlib');

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();


const readStream = fs.createReadStream("./files/employees.txt", "UTF-8");
const writeStream = fs.createWriteStream("./files/newemployees.txt.gz", "UTF-8");

//this is the shorter version of what we had done
//zip and then write
readStream.pipe(gzip).pipe(writeStream);

