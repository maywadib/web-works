const { addNewContact } = require("../services/File-contact-service")

const contact = {
    "firstname": "Mayur",
    "lastname": "Cadreman",
    "gender": "Male",
    "email": "wcadreman2b@t.co",
    "phone": "9139025355",
    "dob": "1970-11-28",
    "address": "1744 Beilfuss Circle",
    "city": "Kansas city",
    "state": "Kansas",

}

addNewContact(contact,(err, newContact) => {
    if(err) {
        console.log("Error "+JSON.stringify(err));
    } else {
        console.log(newContact);
        
    }
})