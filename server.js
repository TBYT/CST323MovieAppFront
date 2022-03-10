const express = require('express');
const path = require('path');
const port = (process.env.PORT || 8080);
const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist/CST323MovieAppFrontend'));

app.get('/ping', function (req, res) {
    return res.send('pong port: '+port);
});

app.get('/*', function(req,res) 
{
    res.sendFile(path.join(__dirname+'/dist/CST323MovieAppFrontend/index.html'));
});

app.listen(port, function() 
{
    console.info("Angular App is listening!");
});