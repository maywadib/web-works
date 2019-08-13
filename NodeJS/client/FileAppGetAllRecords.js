const {getAllContact} = require("../services/File-contact-service")

let options = {pageNum : 2, pageSize : 4};

getAllContact(options, (err, data) =>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        
    }
})