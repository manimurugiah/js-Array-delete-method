let array=[1,2,3,4,5,6,7,8,9,10];
let delArray=[];
let a=0;
let b=parseInt(prompt("Enter the index"));
for(i=0;i<array.length;i++){
    if(array[i]!=b){
        delArray[a]=array[i];
        a++
    }
}
console.log(delArray);