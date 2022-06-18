
let myArray =[5,3,15,2,'12',12, '12',3,10,2];


let  uniqueArray=myArray.filter((value,index,array)=>{
return array.indexOf(value)===index;
});
console.log(uniqueArray)