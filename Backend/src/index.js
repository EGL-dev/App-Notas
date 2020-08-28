require('dotenv').config();


const app=require('./app.js');


require('./database.js');




app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto', app.get('port'))
});