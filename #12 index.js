console.log(process.argv)



console.log(process.argv[2])
console.log(process.argv[3])







const fs = require('fs');
const input = process.argv;
fs.writeFileSync(input[2],input[3]);
by writtig command in the terminal : node filename filenamewith.txt "content that should be in the file" 









const fs = require('fs');
const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}

else{
    console.log("invalid input")
}
// node index.js add data.txt "this is the creation of file "
// node index.js remove data.txt "this is the deletion of file "
// node index.js abc data.txt "this is invalid input  "












