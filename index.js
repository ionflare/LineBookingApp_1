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




/*
const lineBot = require('@line/bot-sdk');
const Client = require('@line/bot-sdk').Client;

const clientBot_1 = new Client({
  channelAccessToken:  "m81G1zHIiAVnjRzw8uaI5qmo67y52qDTFS/hbvlzZ2Rk+2duidmzb8BjBthXhSixTZNGTi+RcPVHA4swVQ6u7qny7mmOOQ1uOmoNQEmzn/v+KfOepBolIdQSWuaobWotiy+eujrcPRlRRwqL+o24BQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "63a9935f29b6291ad70f8338ba85d6a9"
});


const clientBot_2 = new Client({
  channelAccessToken: "MIUh7d76Z4iiNMs+JJ1pvAybjvYITjUIz049ReoemdIlIsE4dMT28BgXf25yYKbEGPzEln4VnY6/DlnSikKzB65DqlybhARgctZHpj67J2dkS3qVN1W1v10V/pD1M7q7uGCXbik5zBtOaxUtcpi59QdB04t89/1O/w1cDnyilFU=",
  channelSecret: "0f07f9ebcdc0ef6a56bd60500a20de47"
});


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
*/


// import modules





const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

// create a new express server
const app = express()


var MongoClient = require('mongodb').MongoClient
//var url = "mongodb://localhost:27017";
var url = "mongodb://chanon:chanon1234@ds135552.mlab.com:35552/mlabtest";

var message = "Init ";

var promise1 =(inputText) => new Promise((resolve, reject) => {
    setTimeout(() => {
        message += inputText;
        //console.log(message);
        resolve(message);
    }, 200)
})

function promise2(inputText) {

   return new Promise( ( resolve, reject ) => {
      message += inputText;
      resolve('gg');
  } );
}




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



function replyYesNoTemplate(client,replyToken, returnStr,postBackStr) {

   return new Promise( ( resolve, reject ) => {
      client.replyMessage(replyToken, 
      {
          /*
  type: 'template',
  altText: 'this is a confirm template',
  template: {
    type: 'confirm',
    text: returnStr,
    actions: [{
      type: 'postback',
      label: 'Yes',
      data: postBackStr
    }, {
      type: 'message',
      label: 'No',
      text: 'no'
    }]
  }
  */
  replyToken: replyToken,
  type: 'message',
  source: {
    type: 'user',
    userId: 'U6a0764890cdbb5393b84accb7b37c266'
  },
  message: {
    id: '325708',
    type: 'location',
    title: 'my location',
    address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
    latitude: 35.65910807942215,
    longitude: 139.70372892916203
  }
  
 }
 );
        
  } );
}



const lineBot = require('@line/bot-sdk');
const Client = require('@line/bot-sdk').Client;



const clientBot_2 = new Client({
  channelAccessToken:  '+Z00sQIfBQjVouvA+bFr9LpyYi5pErdfu0hejVGhtzlEmw3RJRyV0V5tohj832ykJqb2S+6mcIRvWhw7V7PDpFNWzRZlVNLg59J8PU+71rxjCqPJxfSIET6QcCoU1Vcb6UnJSMb/I5qVtwr4XpIhKQdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'cb7cdb67c6a8f02f2b7119365518108b'
});




app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded

app.post('/callback', async (req, res) => {
 
    var xxx = await mongoQuery();
    //var yyy = await mongoInsert();
    
    
    for(var idx =0; idx<xxx.length; idx++ )
    {
        await promise2(xxx[idx].name);
        await promise2(xxx[idx].address);
    }
  
  
  
  
   await replyYesNoTemplate(clientBot_2, req.body.events[0].replyToken, message, "qq");
  /*
  var xxx = await mongoQuery();
    //var yyy = await mongoInsert();
    
    
    for(var idx =0; idx<xxx.length; idx++ )
    {
        await promise2(xxx[idx].name);
        await promise2(xxx[idx].address);
    }
  
  
   const options = {
    method: 'POST',
    uri: 'https://api.line.me/v2/bot/message/reply',
    body: {
      replyToken: req.body.events[0].replyToken,
      messages: [{
        type: 'text',
        //text: req.body.events[0].message.text // ここに指定した文字列がボットの発言になる
        text: message // ここに指定した文字列がボットの発言になる
      }]
    },
    auth: {
      bearer: '+Z00sQIfBQjVouvA+bFr9LpyYi5pErdfu0hejVGhtzlEmw3RJRyV0V5tohj832ykJqb2S+6mcIRvWhw7V7PDpFNWzRZlVNLg59J8PU+71rxjCqPJxfSIET6QcCoU1Vcb6UnJSMb/I5qVtwr4XpIhKQdB04t89/1O/w1cDnyilFU=' // ここは自分のtokenに書き換える
    },
    json: true
  }
  
  await request(options, (err, response, body) => {
    console.log(JSON.stringify(response))
  })
  
  
  
  await res.send('OK')
  */
  
  
  
  
  
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server starting on PORT:' + process.env.PORT)
})

