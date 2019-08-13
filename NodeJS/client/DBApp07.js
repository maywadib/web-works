//update


const {updateNewEmp} = require("../services/mongo-emps-service")
const id = "5d43cd30a6d183f707172497"

// const query = { empname : "Kartik" };
const emp = {
    "empname": "Karteek",
    "empid": 999
};

updateNewEmp(id,emp)
.then(data => console.log(data))
.catch(err => console.log(err)
)