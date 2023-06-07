const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Mongodb Atlas Connected Sucessfully');
}).catch((error)=>{
    console.log("Mongobd connection error:"+error);

})