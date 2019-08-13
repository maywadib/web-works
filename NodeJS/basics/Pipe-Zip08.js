const fs = require('fs')

const zlib = require('zlib');

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();



const newReadStream = fs.createReadStream('./files/newemployees.txt.gz');
const newWriteStream = fs.createWriteStream('./files/uncompress.txt');



newReadStream.pipe(gunzip).pipe(newWriteStream);

