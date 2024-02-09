
const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    // to update only one use updateOne.
    let result = await data.updateMany(
        {name:'note 5'},{
            $set: {name: 'i phone 13', price:65000}
        }
    );
    console.log(result)
}
updateData();