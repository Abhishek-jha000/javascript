//For
for (let i = 0; i <= 10; i++) {
    const element =  i;
    if (element == 5) {
      //  console.log("5 is the best numaber in the world ");
        
    }
//console.log(element);


    
}


for (let i = 1; i <= 20; i++) {
//console.log(`outer loop value; ${i}`);       
       for (let j = 1; j <=20; j++) {
       // console.log(`inner loop value; $(j)and inner loop ${i}`);  
     //  console.log(i + '*' + j + ' = ' + i*j);
       
    }
    
}


let myArray = ["flsh","batman", "suberman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}
// brek and countinue 
 for (let i = 1; i <=20; i++) {
    if (i == 5){
       console.log(`dected 5`);
       continue
        
    }
   console.log(`value of i is ${i}`);
   
    
 }