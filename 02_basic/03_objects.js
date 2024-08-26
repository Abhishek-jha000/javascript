


const mySym = Symbol("key1")

const JsUser = {
name : "abhishek",
"full name": "abhishek kumar jha",
[mySym]: "mykey1",
reg : 220101120016,
location :"Darbhanga",
email : "adnfufncwe@gmail.com",
isLoggedIn : false,
lastLoggin:["Monday","Sunday"]         




}
//console.log(jsuser.email)
//console.log(jsuser["email"])
//console.log(jsuser["full name"])
//console.log((typeof [mySym]));



JsUser.email =" abhsiehkjah@gmail.com"
//Object.freeze(jsuser)
JsUser.email =" momfd@gmail.com"
//console.log(jsuser);

JsUser.greetingTwo = function(){
    console.log('Hello JS user,${this.name}');
}

console.log(JsUser.greeting ());
 