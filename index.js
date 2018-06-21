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
  

// import modules



const lineBot = require('@line/bot-sdk');
const Client = require('@line/bot-sdk').Client;



const clientBot_2 = new Client({
  channelAccessToken:  '+Z00sQIfBQjVouvA+bFr9LpyYi5pErdfu0hejVGhtzlEmw3RJRyV0V5tohj832ykJqb2S+6mcIRvWhw7V7PDpFNWzRZlVNLg59J8PU+71rxjCqPJxfSIET6QcCoU1Vcb6UnJSMb/I5qVtwr4XpIhKQdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'cb7cdb67c6a8f02f2b7119365518108b'
});




const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

// create a new express server
const app = express()


var MongoClient = require('mongodb').MongoClient
//var url = "mongodb://localhost:27017";
//var url = "mongodb://chanon:chanon1234@ds135552.mlab.com:35552/mlabtest";


var message = "";

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





function replyCoro(client,replyToken) {
    
   return new Promise( ( resolve, reject ) => {
        client.replyMessage(replyToken, 
      {
"type": "template",
  "altText": "this is a carousel template",
  "template": {
      "type": "carousel",
      "columns": [
          {
            "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
            "imageBackgroundColor": "#FFFFFF",
            "title": "this is test menu",
            "text": "test description",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/123"
            },
            "actions": [
                {
                      "type": "uri",
                    "label": "Open QR Code reader",
                    "uri": "line://nv/QRCodeReader"
               
                },
                {
                     "type": "uri",
                    "label": "Liff",
                    "uri": "line://app/1550488155-wlm6pyJk"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://test-liff-1.herokuapp.com"
                }
            ]
          },
          {
            "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
            "imageBackgroundColor": "#000000",
            "title": "this is menu",
            "text": "description",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
            },
            "actions": [
                {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=222"
                },
                {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=222"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/222"
                }
            ]
          }
      ],
      "imageAspectRatio": "rectangle",
      "imageSize": "cover"
  }
 }
 );
        
  } );

       
       
       
       
       
       /*
       let repText ="";
       let col = [];
       let act =[];
       
       act.push({"type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=111"});
                    
       for(var id = 0;id <10; id ++)
       {
           
           
           if(id%2==0)
           {
                let newObj = {   
            thumbnailImageUrl: "https://example.com/bot/images/item1.jpg",
            imageBackgroundColor: "#FFFFFF",
            title: "this is menu "+ id,
            text: "description",
            defaultAction: {
                type: "uri",
                label: "View detail",
               // uri: "http://example.com/page/123"
                uri: "line://nv/p[[/"
            },
          actions: act,
          imageAspectRatio: "rectangle",
            imageSize: "cover"
           };
           
          col.push(newObj);
           }
           else
           {
                 let newObj = {   
            thumbnailImageUrl: "https://example.com/bot/images/item1.jpg",
            imageBackgroundColor: "#FFFFFF",
            title: "this is menu "+ id,
            text: "description",
            defaultAction: {
                type: "uri",
                label: "View detail",
               // uri: "http://example.com/page/123"
                uri: "line://nv/p[[/"
            },
          actions: act,
          imageAspectRatio: "rectangle",
            imageSize: "cover"
           };
           
          col.push(newObj);
           }
          
       }

       
       let Repmessage =  {
        type: "template",
        altText: "this is a carousel template",
        template: {
        type: "carousel",
        columns: col
        }
       };
       
       
       client.replyMessage(replyToken, Repmessage);
        resolve('gg');
   
    });
    */
}
       
       
       
       
       
  /*     
       
      client.replyMessage(replyToken, 
      {
            for(var i =0; i< 10;i++)
            {
                
            }
"type": "template",
  "altText": "this is a carousel template",
  "template": {
      "type": "carousel",
      "columns": [
          {
            "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
            "imageBackgroundColor": "#FFFFFF",
            "title": "this is menu",
            "text": "description",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/123"
            },
            "actions": [
                {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=111"
                },
                {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=111"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/111"
                }
            ]
          },
          {
            "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
            "imageBackgroundColor": "#000000",
            "title": "this is menu",
            "text": "description",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
            },
            "actions": [
                {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=222"
                },
                {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=222"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/222"
                }
            ]
          }
      ],
      "imageAspectRatio": "rectangle",
      "imageSize": "cover"
  }
  
 }
 );
        
  } );

}
*/




function replyMap(client,replyToken, lati,long) {

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


    type: "location",
    title: "my location",
    address: "SWP",
    latitude: lati,
    longitude: long


  
 }
 );
        
  } );
}

var url = "mongodb://chanon:chanon1234@ds259620.mlab.com:59620/location-line";

function mongoQueryGetLocation() {
    
    return new Promise( ( resolve, reject ) => {
   
     MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    //var dbo = db.db("mydb");
    var dbo = db.db("location-line");
    
    //dbo.collection("customers").findOne({}, function(err, result) {
    dbo.collection("location").find({}).toArray(function(err, result)
    {
    if (err) { return reject( err );}
    else{
        
        //getDistanceFromLatLonInKm(lati,long, 13.904381, 100.529984);
        resolve(result);
  
    }

    db.close();
    });
    });
   
  });
  
}    


function replyText(client,replyToken, returnStr,postBackStr) {

   return new Promise( ( resolve, reject ) => {
      client.replyMessage(replyToken, 
      {

    type: "text",
    text: returnStr

 }
 );
        
  } );
}





function CalDistanceKm(inputArrayLocation,userLa,userLong) {

   return new Promise( ( resolve, reject ) => {
       
       let res  ="";
       for(var idx =0; idx<inputArrayLocation.length; idx++ )
        {    let R = 6371; // Radius of the earth in km
            let dLat = deg2rad(inputArrayLocation[idx].latitude - userLa);  // deg2rad below
            let dLon = deg2rad(inputArrayLocation[idx].longtitude - userLong); 
            let a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(userLa)) * Math.cos(deg2rad(inputArrayLocation[idx].latitude)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            let d = R * c; 
            if(d < 1000)
            {
             res = res + inputArrayLocation[idx].name +", d : " + d +"km . "; 
            }
        }
        if(res == "")
        {
           res = "No Location was set within 1,000km radius."
        }
     
         resolve(res);
  } );
}



function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}




function getLIFF(){
      return new Promise( ( resolve, reject ) => {
        var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + '+Z00sQIfBQjVouvA+bFr9LpyYi5pErdfu0hejVGhtzlEmw3RJRyV0V5tohj832ykJqb2S+6mcIRvWhw7V7PDpFNWzRZlVNLg59J8PU+71rxjCqPJxfSIET6QcCoU1Vcb6UnJSMb/I5qVtwr4XpIhKQdB04t89/1O/w1cDnyilFU='
            }
            
            var body = {
            }
            var url = 'https://api.line.me/liff/v1/apps';
            request({
                url: url,
                method: 'GET',
                headers: headers,
                body: body,
                json: true
            },function (error, response, body){
               if (!error) {
                   resolve(body);
                   
               }
            });
      });
}


function delLIFF(LiffID){
      return new Promise( ( resolve, reject ) => {
        var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + '+Z00sQIfBQjVouvA+bFr9LpyYi5pErdfu0hejVGhtzlEmw3RJRyV0V5tohj832ykJqb2S+6mcIRvWhw7V7PDpFNWzRZlVNLg59J8PU+71rxjCqPJxfSIET6QcCoU1Vcb6UnJSMb/I5qVtwr4XpIhKQdB04t89/1O/w1cDnyilFU='
            }
            
            var body = {
            }
            var url = 'https://api.line.me/liff/v1/apps/'+LiffID ;
            request({
                url: url,
                method: 'DELETE',
                headers: headers,
                body: body,
                json: true
            },function (error, response, body){
               if (!error) {
                  resolve(response.statusCode);
                   
               }
            });
      });
}







function deployLIFF(){
    
       return new Promise( ( resolve, reject ) => {

             var stro ="sss";
             
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + '+Z00sQIfBQjVouvA+bFr9LpyYi5pErdfu0hejVGhtzlEmw3RJRyV0V5tohj832ykJqb2S+6mcIRvWhw7V7PDpFNWzRZlVNLg59J8PU+71rxjCqPJxfSIET6QcCoU1Vcb6UnJSMb/I5qVtwr4XpIhKQdB04t89/1O/w1cDnyilFU='
            }
            
            var body = {
              
                view: {
                    type: 'tall',
                    url: 'https://test-liff-1.herokuapp.com/'
                }
            }
            var url = 'https://api.line.me/liff/v1/apps';
            request({
                url: url,
                method: 'POST',
                headers: headers,
                body: body,
                json: true
            },function (error, response, body){
                if (!error) {
                   resolve(response.statusCode);
                   
               }
            });
      
  });
 
  

}







app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded

app.post('/callback', async (req, res) => {
 
   if(req.body.events[0].message.type == "text")
   {
       if(req.body.events[0].message.text == "Creliff")
       {
           
           var testliff = await deployLIFF();
           await replyText(clientBot_2, req.body.events[0].replyToken,  testliff, "qq");
          
       }
       
       else if(req.body.events[0].message.text == "Liff")
       {
           
          var Liffbody = await getLIFF();
          var listLiff = "";
          for(var liff_idx =0; liff_idx < Liffbody.apps.length; liff_idx++ )
          {
             listLiff = listLiff + " - " + Liffbody.apps[liff_idx].liffId;
          }
         
        await replyText(clientBot_2, req.body.events[0].replyToken,  listLiff, "qq");
            
       }
       else
       {
           var res = "";
           res = req.body.events[0].message.text.split(" ");
           if( res[0] == "del")
           {
                var resDelLiff = await  delLIFF(res[1]);
                 await replyText(clientBot_2, req.body.events[0].replyToken,  resDelLiff, "qq");
           }
           else
           {
                await replyCoro(clientBot_2,req.body.events[0].replyToken);
           }
           
       }
   
    
   }
   else if(req.body.events[0].message.type == "location")
   {
         var all_Location = await mongoQueryGetLocation();
   var ss = await CalDistanceKm(all_Location , req.body.events[0].message.latitude, req.body.events[0].message.longitude);
   
   //await CalDistanceKm( req.body.events[0].message.latitude, req.body.events[0].message.longitude);
   await replyText(clientBot_2,req.body.events[0].replyToken, ss , "qq");
   //await replyMap(clientBot_2, req.body.events[0].replyToken, req.body.events[0].message.latitude, req.body.events[0].message.longitude );
   //await replyText(clientBot_2, req.body.events[0].replyToken, req.body.events[0].message.latitude + "  " +req.body.events[0].message.longitude , "qq");
 
   ss ="";
   }
  
 
  
  
  
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server starting on PORT:' + process.env.PORT)
})

