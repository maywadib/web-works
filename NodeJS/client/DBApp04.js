
// getEmployeeById

const {getEmployeeById} = require("../services/mongo-emps-service")
const id = "5d43cd23a6d183f707172496"

getEmployeeById(id)
    .then(data => console.log(data))
    .catch(err => console.log(err))