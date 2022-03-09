const express = require('express');
const app = express();
const port = 4000;
app.get('*', function(req, res){
    res.end('Hello World');
});
app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});