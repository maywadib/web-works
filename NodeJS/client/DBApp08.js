//sort
const {getSortedRecords} = require("../services/mongo-emps-service")

// let options = {pageNum : 2, pageSize : 4};


getSortedRecords()
.then(data => console.log(data))
.catch(err => console.log(err))