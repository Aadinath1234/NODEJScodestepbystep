const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.log(dirPath);
// run the code by : node index.js
// output: E:\NOdejscodestepbystep\nodejscode\files 










const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "files");
for(i=0;i<=5;i++){
    fs.writeFileSync(dirPath + '/hello' + i + ".txt" ,"a simple text file ");

}
// files  get created in the files folder using command : node filename.js 









const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "files");
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is ", item)
    })
})

// in the output you can see the all the names of the files by using command : node index.js
















