/////perform CRUD operations with mongo
const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb://localhost:27017"


const requiredFields = ["empid","empname","contact","city"]

module.exports.getEmployeeById = async(id) => {
    if(!id||typeof id!== 'string') {
        throw  "sorry Id supplied is not a string"
    }

    try{
        const _id = ObjectId(id);
        const conn = await MongoClient.connect(url, {useNewUrlParser: true})
        const emps = conn.db("sapientdb").collection("emps")
        const emp =await emps.findOne({_id})
        conn.close();
        return emp;

    }catch(err) {
        throw err;
    }
}

module.exports.addNewEmp = async(emp) => {
    const conn = await MongoClient.connect(url, {useNewUrlParser: true})
    const emps = conn.db("sapientdb").collection("emps")
    const response = await emps.insertOne(emp);
    conn.close();
    emp._id = response.insertedId;
    return emp;
}
module.exports.updateNewEmp = async(id,data) => {
    const conn = await MongoClient.connect(url, {useNewUrlParser: true});
    const emps = conn.db("sapientdb").collection("emps");
    const _id = ObjectId(id);
    const response = await emps.updateOne({_id},{$set: data });
    conn.close();
    return data;
}
module.exports.deleteEmp = async(id) => {
    if(!id||typeof id!== 'string') {
        throw  "sorry Id supplied is not a string"
    }

    try{
        const _id = ObjectId(id);
        const conn = await MongoClient.connect(url, {useNewUrlParser: true})
        const emps = conn.db("sapientdb").collection("emps")
        const emp =await emps.deleteOne({_id})
        conn.close();
        return emp;

    }catch(err) {
        throw err;
    }


}

//sort by city, desc
module.exports.getSortedRecords = async() => {


        const conn = await MongoClient.connect(url, {useNewUrlParser: true})
        const emps = conn.db("sapientdb").collection("emps")
        const emp =await emps.find().sort({empid:1}).toArray()
        
        conn.close();
        return emp;
        
    }
    