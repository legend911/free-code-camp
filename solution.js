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
*/

// MongoDB (Insert)
/*
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];
var jsonDoc = {
  firstName: firstName ,
  lastName: lastName
};

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('docs');
  
  // inserting document
  collection.insert(jsonDoc, function(err, data) {
    // handle error
    if (err) throw err;
    console.log(JSON.stringify(jsonDoc));
    // other operations
    db.close();
  })
})
*/

// MongoDB (Update)
/*
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('users');
  
  collection.update({
    username: "tinatime"
  }, {
    $set: {
      age: 40
    }
  }, function(err, data) {
    // handle error
    if (err) throw err;
    // other operations
    db.close();
  })
})
*/

// MongoDB (Remove)
/*
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
var colName = process.argv[3];
var id = process.argv[4];

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection(colName);
  
  collection.remove({
      _id: id
  },function(err, data) {
    // handle error
    if (err) throw err;
    // other operations
    db.close();
  });
})
*/

// MongoDB (Count)
/*
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var arg1 = process.argv[2];

mongo.connect(url, function(err, db) {
  // db gives access to the database
  if (err) throw err;
  var collection = db.collection('parrots');
  
  collection.count({
      age: {
        $gt: +arg1
      }
  }, function(err, count) {
    // handle error
    if (err) throw err;
    // other operations
    console.log(count);
    db.close();
  });
})
*/

// MongoDB (Aggregate)
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var arg1 = process.argv[2];

mongo.connect(url, function(err, db) {
  // db gives access to the database
  if (err) throw err;
  var collection = db.collection('prices');
  
  collection.aggregate([
      { $match: {size: arg1} }
    , { $group: {
        _id: 'total' // This can be an arbitrary string in this case
      , total: {
          // $avg is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, results) {
      // handle error
      if (err) throw err;
      console.log(Number(results[0].total).toFixed(2));
      // => [
      // =>   { _id: 'total', total: 11 }
      // => ]
      db.close();
    });
})