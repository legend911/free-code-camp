// MongoDB (Find)
/*
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var newArg = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
  // db gives access to the database
  if (err) throw err;
  var birds = db.collection('parrots');
  birds.find({
    age: { 
      $gt: +newArg
    }
  }).toArray(function(err, documents) {
    if (err) throw err;
    console.log(documents);
    db.close();
  })
})
*/

// MongoDB (Find Project)
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var newArg = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
  // db gives access to the database
  if (err) throw err;
  var birds = db.collection('parrots');
  birds.find({
      age: {
        $gt: +newArg
      }
    }, {
      name: 1
    , age: 1
    , _id: 0
  }).toArray(function(err, documents) {
    if (err) throw err;
    console.log(documents);
    db.close();
  })
})