//////perform CRUD operations with file

const fs = require('fs')
const path = require("path")

const fileName = path.join(__dirname, "../data/data.json");

let data = [];


const reqiredFields = ["firstname", "email", "phone", "city"];

if (fs.existsSync(fileName)) {
    data = JSON.parse(fs.readFileSync(fileName, "UTF-8"))

    // fs.readdir("", (err) => {
    //     if(err) {
    //         console.log(err);

    //     }
    // })
}

class ContactService {
    constructor() {

    }
    getContactById(id) {
        console.log("Get Contact By Id " + id);

      
    }

    ///splice
    deleteContactById(id) {
        console.log("Delete Contact By Id " + id);
    }
    
    //delete+add
    updateContact(contact) {
        console.log("Update Contact " + contact);

    }
    
    addNewContact(contact, callBackFn) {
        console.log("Add new Contact " + contact);
        if (!callBackFn || typeof callBackFn != 'function') {
            let err = { code: 1001, message: "Sorry please have callback Function" };
            callBackFn(err);
            return;
        }

        if (!contact || typeof contact != 'object') {
            let err = { code: 1002, message: "Sorry Please pass Object" };
            callBackFn(err);
            return;
        }

        //checking all the required fields
        const missingFields = [];
        reqiredFields.forEach(field => {
            if (!(field in contact)) {
                missingFields.push(field);
            }
        });

        if (missingFields.length) {
            let err = { code: 1003, message: "Please pass mandatory fields : " + missingFields.join(", ") };

            callBackFn(err);
            return;
        }

        if (data.length === 0) {
            contact._id = 1;
        } else {
            contact._id = data.length + 1;
        }

        console.log("Generated Contact ID " + contact._id);

        //the array is appended  with element contact
        data.push(contact);

        //write the data to file
        fs.writeFile(fileName, JSON.stringify(data), (err) => {
            if (err) {
                callBackFn(err);
                return;
            }

            //success
            callBackFn(null, { ...contact });
        })





    }

    getAllContact(options, callBackFn) {
        // console.log("Get All Contact");

        if (!callBackFn || typeof callBackFn !== 'function') {
            throw new "Sorry callBack is not supplied";
        }

        //if you are assigning with =  then it will be default value
        let { pageNum = 1, pageSize = 10 } = options;

        if (typeof pageNum !== 'number' || typeof pageSize !== 'number') {
            let err = { code: 1003, message: "Please enter page number in number format" };
            callBackFn(err);
            return;
        }

        //since array start from 0
        let begin = (pageNum - 1) * pageSize;
        let end = begin + pageSize;

        let newData = data.slice(begin, end);
        callBackFn(null, newData);

        
    }
}

module.exports = new ContactService