var express = require('express');
var app = new express();

app.set('port', (process.env.PORT || 3005));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), ()=>{
    console.log('server is running on port 3005');
});