function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

//sayMyName()
//function addTwoNumbers(number1, number2){

//addTwoNumbers(4,5)
function addTwoNumbers(number1, number2){
   // let result =number1 + number2
//return result
return number1 + number2

}
const result = addTwoNumbers(4,5)
//console.log("Result:", result  );

function loginUserMessage(username = "abhi"){
    if(!username){
console.log("please enter a username");
return
    }
    return `${username}just logged in`
}

// console.log(loginUserMessage("abhishek"));
// console.log(loginUserMessage("vikash"));

function calculateCardprice(...num1){
    return num1
}
//console.log(calculateCardprice(400,200,500));

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username:"abhi",
    price:108
})

 const myNewArray = [200,400,100,600]

 function returnThirdValue(getArray){
    return getArray[2]

 }
console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue(myNewArray));
