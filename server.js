//Install express 
const express = require('express');const path = require('path'); 
const app = express();
//Serve only the static files form 
 directoryapp.use(express.static(__dirname + '/dist'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/index.html'));
}); 
//Start the app by listening on the default Heroku 
portapp.listen(process.env.PORT || 8080);
