const express=require('express');

const cors=require('cors');

const app = express();


app.use(cors());
app.use(express.json());



app.set('port', process.env.PORT || 3000);




app.use('/api/notes', require('./routes/note'));

app.use('/api/users', require('./routes/users'));


module.exports = app ;


