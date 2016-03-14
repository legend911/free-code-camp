// my new module
module.exports = function (allFiles, myExts, callback) { 
    var fs = require("fs");
    fs.readdir(allFiles, callback);
} 