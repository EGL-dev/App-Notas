const {Schema , model} = require('mongoose');

const userSchema=new Schema({
    username: {
     
type:String,
unique:true,
required:true,
trim:true


    }
},{
        timestamps:true
});


module.exports = model('User', userSchema);