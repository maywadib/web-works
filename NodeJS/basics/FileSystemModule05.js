//RENAME 
//append
//delete

const fs = require('fs');

//---------write-----------
/*
fs.writeFile("./files/sample.txt", "This is sample data", (err) => {
    if (err) {
        console.log("file not saved ", err);
    } else {
        console.log("data stored successfully");
    }
}) 
*/

//-----------------read-------------
/*
fs.readFile("./files/sample.txt", 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

    }
})
*/

//-----------------rename-------------
/*
fs.rename('./files/sample.txt', './files/renamedSample.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
*/

//-----------------append-------------
/*  
    fs.appendFile('./files/renamedSample.txt', ' data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
*/

//-----------------delete-------------
/*
fs.unlink('./files/delete.txt', (err) => {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello');
});*/

//-----------------delete folder-------------

fs.readdir("files", (err, files) =>{
   if(err) {
       console.log(err)
   } else{
        for(let file of files) {
            fs.unlink("./files/" + file, (err) => {
                if(err) {
                    console.log(err);
                } else{
                    console.log("All files deleted")
                }
            })
        }
   }
})