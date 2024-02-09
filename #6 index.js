const fs = require('fs');
console.log("code step by step ");
fs.writeFileSync("hello.txt", "code step by step ");
console.log("this is the directory name : ",__dirname);
console.log("file name: ", __filename )


const gs = require("fs").writeFileSync;
gs("xyz.txt","abc");
