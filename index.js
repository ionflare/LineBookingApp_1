//console.log("Kuy");

/*
//====================================================Check Await Async =============================================

var message = "";

var promise1 =() => new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "Val";
        //console.log(message);
        resolve(message);
    }, 300)
})

function promise2() {

   return new Promise( ( resolve, reject ) => {
      message += "77777777";
      resolve('gg');
  } );
}

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";



const blah = async function (){
    // See the order of promises. Final result will be according to it
    //Promise.all([promise1, promise2, promise3]).then(printResult);
    //Promise.all([promise1, promise2]).then(printResult);
    //Promise.all([promise1]).then(console.log(message));
   await promise1();
   await promise2();
   await promise1();
   await promise2();
   await console.log(message);

}

blah();
*/
//====================================================End Check Await Async =============================================






//====================================================Test  Await Async & MongpDB ==========================================
const http = require('http');
const PORT = process.env.PORT || 5000;




var MongoClient = require('mongodb').MongoClient
//var url = "mongodb://localhost:27017";
var url = "mongodb://chanon:chanon1234@ds135552.mlab.com:35552/mlabtest";

var message = "";
var promise1 =(inputText) => new Promise((resolve, reject) => {
    setTimeout(() => {
        message += inputText;
        //console.log(message);
        resolve(message);
    }, 300)
})

function promise2(inputText) {

   return new Promise( ( resolve, reject ) => {
      message += inputText;
      resolve('gg');
  } );
}


function promise3() {

   return new Promise( ( resolve, reject ) => {
       http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
    });
      resolve('gg');
  } );
}

/*
function mongoQuery() {
    
    return new Promise( ( resolve, reject ) => {
   
     MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    //var dbo = db.db("mydb");
    var dbo = db.db("mlabtest");
    //dbo.collection("customers").findOne({}, function(err, result) {
    dbo.collection("customers").findOne({}, function(err, result) {
      
       if ( err )
       return reject( err );
        else
                {
                 resolve(result);
                }
        //if (err) throw err;
        //console.log(result.name + " " +result.address);
        db.close();
        });
    });
   
  });
  
}    
*/
function mongoQuery() {
    
    return new Promise( ( resolve, reject ) => {
   
     MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    //var dbo = db.db("mydb");
    var dbo = db.db("mlabtest");
    var query = { name: "Test ja"};
    //dbo.collection("customers").findOne({}, function(err, result) {
    dbo.collection("customers").find(query).toArray(function(err, result)
    {
    if (err) { return reject( err );}
    else{
        resolve(result);
  
    }

    db.close();
    });
    });
   
  });
  
}    

function mongoInsert() {
    
    return new Promise( ( resolve, reject ) => {
   
     MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    //var dbo = db.db("mydb");
    var dbo = db.db("mlabtest");
    var myobj = { name: "Company Inc", address: "Test Insert Heroku" };
    dbo.collection("customers").insertOne(myobj, function(err, result) {
      
       if ( err )
       return reject( err );
        else
                {
                 resolve(result);
                }
        //if (err) throw err;
        //console.log(result.name + " " +result.address);
        db.close();
        });
    });
   
  });
  
}    
 
/*
const blah = async function (){
    
    var xxx = await mongoQuery();
   await promise1(xxx.name);
   await promise2(xxx.address);
  //await promise3();
    
    //await console.log(message); 
}

*/
const blah = async function (){
    
    var xxx = await mongoQuery();
    //var yyy = await mongoInsert();
    
    
    for(var idx =0; idx<xxx.length; idx++ )
    {
        await promise1(xxx[idx].name);
        await promise2(xxx[idx].address);
    }
  
   await promise2(" Testing from Cloud9");
  //await promise3();
   await server();
   await server_begin();
    //await console.log(message); 
}
//=============================================================================================================================================================

const server =   http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end(message);
})


const server_begin =  server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
})

blah();    

/*

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
*/