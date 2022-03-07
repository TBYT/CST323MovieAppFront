const express = require('express');
const path = require('path');
const port = (process.env.PORT || 8080);
const app = express();

//app.use(express.static(__dirname));
app.use(express.static('/dist/cst323movieappfrontend'));

app.get('/*', function(req,res) 
{
    res.sendFile(path.join('/dist/cst323movieappfrontend/index.html'));
});

app.listen(port, function() 
{
    console.info("Angular App is listening!");
});