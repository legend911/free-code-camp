<<<<<<< HEAD
// Hello World
/*
console.log("HELLO WORLD");
*/

// Baby Steps
=======
>>>>>>> 805a1f41d797535dd6bee3efdac603d1d76532d0
/*
var total = 0;

for (var i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);
*/

<<<<<<< HEAD

// My First I/O
=======
>>>>>>> 805a1f41d797535dd6bee3efdac603d1d76532d0
/*
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var fileString = file.toString();
var newLine = fileString.split('\n');
var newLineTotal = 0;

for (var j = 1; j < newLine.length; j++) {
   newLineTotal = j; 
}
console.log(newLineTotal);
*/

<<<<<<< HEAD
=======

>>>>>>> 805a1f41d797535dd6bee3efdac603d1d76532d0
// This is the callback version
/*
var newLineTotal = 0;

getData(process.argv[2], writeData);

function getData (myData, callback) {
    var fs = require('fs');
    fs.readFile(myData, 'utf8', callback);         
}

function writeData (err, myFile) {
    if (err) throw err;
    var newLine = myFile.split('\n');
    newLineTotal = newLine.length - 1;
    
    console.log(newLineTotal);
}
*/

// list of files by extension (asynchronous)
// I didn't use myExts..... my fault
/*
getData(process.argv[2], process.argv[3], writeData);

function getData(allFiles, myExts, callback) {
    var fs = require("fs");
    fs.readdir(allFiles, callback);
}

function writeData(err, myFiles) {
    if (err) throw err;
    var path = require("path");
    for (var i = 0; i < myFiles.length; i++) {
        var ext = path.extname(myFiles[i]);
        if (ext == "." + process.argv[3]) {
            console.log(myFiles[i]);
        }
    }
}
*/


// list of files by extension (asynchronous) with modules
// my file mymodule contains my function and then I require
// it and use it as a function to save space
/*
var mymodule = require('./mymodule.js');
mymodule(process.argv[2], process.argv[3], writeData);

function writeData(err, myFiles) {
    if (err) {
        return writeData(err);
    }
    var path = require("path");
    for (var i = 0; i < myFiles.length; i++) {
        var ext = path.extname(myFiles[i]);
        if (ext == "." + process.argv[3]) {
            console.log(myFiles[i]);
        }
    }
}
*/


// HTTP Get Request
<<<<<<< HEAD
/*
=======
>>>>>>> 805a1f41d797535dd6bee3efdac603d1d76532d0
getData(process.argv[2], writeData);

function getData(data, callback) {
    const http = require("http");
    var contents = http.get(process.argv[2], callback);
}

function writeData(myData) {
    myData.setEncoding('utf8');
    myData.on("data", function (myData) { 
        console.log(myData); 
    });
<<<<<<< HEAD
}
*/

// HTTP Collect
/*
var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function (response) {
    response.pipe(bl (function (err, data) {
        if (err) {
            return console.log(err);
        }
        
        data = data.toString();
        console.log(data.length)
        console.log(data);
    }));
});
*/

// Juggling Async
/*
var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function (response) {
    response.pipe(bl (function (err, data) {
        if (err) {
            return console.log(err);
        }
        
        data = data.toString();
        console.log(data);
    }));
});

http.get(process.argv[3], function (response) {
    response.pipe(bl (function (err, data) {
        if (err) {
            return console.log(err);
        }
        
        data = data.toString();
        console.log(data);
    }));
});

http.get(process.argv[4], function (response) {
    response.pipe(bl (function (err, data) {
        if (err) {
            return console.log(err);
        }
        
        data = data.toString();
        console.log(data);
    }));
});
*/

// Time Server
