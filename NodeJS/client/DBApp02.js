const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, conn) => {
    if(err)
    throw err;
    
    const db = conn.db("sapientdb");
    const emps = db.collection("emps");

    emps.findOne((err,e1) => {
        if(err) {
            throw err;
        }
            console.log(e1);
            conn.close();
            
        
    })
})