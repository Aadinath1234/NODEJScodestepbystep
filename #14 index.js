const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath, 'This is a simple text file ');
// node filename.js 










const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;
fs.readFile(filePath, 'utf8',(err,item)=>{
    console.log(item)
})












const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
fs.appendFile(filePath, 'and the file name is apple.txt', (err)=>{
    if(!err) console.log('file is updated ')
})
// node filename.js 
















const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath= `${dirPath}/apple.txt`;
fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
   if(!err) console.log("file name is  updated ");
})
// node index.js         















const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
fs.unlinkSync(`${dirPath}/fruit.txt`)















