// here we have used two files index.js and app.js : 
// file index.js

var x = 20;
if(x===20){
    console.log("matched ")
}




var x = '20';
if(x==20)
{
    console.log('matched ')
}


var x = '20';
if(x===20){
    console.log("matched ")
}




var x = '20'
for(i=0;i<=10;i++){
    console.log(i);
}




var x = '20';
const arr=[2,4,7,1,3,8,3];
console.log(arr[0])
console.log(arr);




const app = require('./app.js')
const arr=[2,4,7,1,3,8,3];
console.log(app.x)
console.log(app.y)
console.log(app)
console.log(app.z())
let result = arr.filter((item)=>{
    return item=== 3
})
console.log(result)



// app.js code : 
module.exports={
    x:10,
    y:20,
    z:function(){
        return 10;
    }
}












