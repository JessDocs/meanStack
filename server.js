'use strict'

//**************************************
//            Dependencies            **
//**************************************

var express = require('express');
// var mongojs = require('mongojs'); //remove and add mongoose
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//*************************************
//          Local Imports            **
//*************************************

var SightingCtrl = require('./api/controllers/SightingCtrl');


//*************************************
//              Server               **
//*************************************

var app = express();


//*************************************
//            Port                   **
//*************************************

var port = 5050;

var data = {'message': 'These birds are cool!'}; 
//message shows in postman

//*************************************
//      MondoDB Connection           **
//*************************************

var port = (process.env.port, process.env.IP) || 5050;
var mongoUri = 'mongodb://localhost:27017/miniBirds';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('MongoDB connected at: ', mongoUri);
})


 
//**************************************
//            Middleware              
//   ***************************       
//every request goes through middleware 
//first before it hits the endpoints   
//**************************************

app.use(cors());
app.use(bodyParser.json()); 

//do bodyParser.json when you get
//body-parser deprecated bodyParser in 
//command line

app.use(express.static('public'));

//**************************************    
//            Endpoints/Routing       
//        *************************
//            with controllers
//**************************************
app.get('/api/birds', SightingCtrl.read);
app.post('/api/birds', SightingCtrl.create);
app.put('/api/birds/:id', SightingCtrl.update);
app.delete('/api/birds/:id', SightingCtrl.delete);


//**************************************
//    without contollers and mongoose 
//**************************************
// app.get('/api/birds', function(req, res){
   
    // console.log('*********** req',req.body); //added .body makes it into an object
   
    //  console.log('*********** res',res);
//look for the *** to show info in command line
//use postman to get it running 
     
 // res.end();  not sending data just means done
//       res.json(data);
// });

// app.post('/api/birds', function(req, res){
   
//     console.log('*********** req',req.body); 
   
    //  console.log('*********** res',res);

//       res.json(data);
// });

//app.get === read
//app.post === create
//app.delete === update
//app.put === destroy




//*************************************
//           Start Server            **
//*************************************

app.listen(port, function(){
    console.log('Aplication running on port: ' + port);
});;