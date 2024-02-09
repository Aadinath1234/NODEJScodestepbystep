const dbConnect = require('./mongodb');

const deleteData = async()=>{
    let data = await dbConnect();
    // to delete only one element use deleteOne.
    let result = await data.deleteMany({name:'raju'})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("record deleted")
    }
}

deleteData();