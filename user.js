const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relationship');

}

const userSchema = new Schema({
    username: {
        type: String,
    },
    addresses: [{
        _id:false,
        location:{
            type:String
        },
        city:{
            type:String
        },
    }],
});

const User = mongoose.model("User",userSchema);

const addUsers = async()=>{
    let user1 = new User({
        username:"ram saloke",
        addresses:[{
            
            location:"new urban colony vmd",
            city:"karimnagar",
        }],
    });

    user1.addresses.push({location:"basheerbhag", city:"hyderabad"});
    let result = await user1.save();
    console.log(result)
}

addUsers();