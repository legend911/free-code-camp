/*
var total = 0;

for (var i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);
*/

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