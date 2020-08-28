const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;




mongoose.connect(URI,{
  useUnifiedTopology:true,
  useNewUrlParser:true,
  useFindAndModify:false,
  useCreateIndex: true
})
.then(db=> console.log('Database is connect'))







module.exports = mongoose;