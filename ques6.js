let a=require("readline-sync")
let b=a.questionInt("enter the prime number...")
let i=1
let sum=0
while(i<=b){
    if(b%i===0)
    sum=sum+1
    i++
}
if(sum===2){
    console.log("prime")
}
else{
    console.log("not prime")
    
}
