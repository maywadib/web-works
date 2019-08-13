//to create a file and keep the daa for exception

const fs = require('fs');

fs.writeFile("./files/sample.txt", "This is sample data", (err) => {
    if (err) {
        console.log("file not saved ", err);
    } else {
        console.log("data stored successfully");
    }
})



fs.readFile("./files/sample.txt", 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

    }
})



