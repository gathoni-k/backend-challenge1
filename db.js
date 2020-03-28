const mongoose = require('mongoose')
const { dbURI } = require('./dbConfig')

// Connect to database
mongoose.Promise = global.Promise
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
// upon successful connection
mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ", dbURI);
});
// upon errors
mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

