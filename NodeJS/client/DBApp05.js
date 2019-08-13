//addNewEmployee

const { addNewEmp } = require("../services/mongo-emps-service")


const emp = {
    "empname": "mahesh",
    "empid": 222,
    "contact": "2312323",
    "city": "Bengaluru"

};

addNewEmp(emp)
    .then(id => console.log("Id generated " + id))
    .catch(err => console.log(err)
    )