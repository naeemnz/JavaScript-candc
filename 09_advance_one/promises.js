/**
 * 
//Bluebird or Q library thi pehle use hoti thi ab nahin kuk ab native promises builtin ate hen is liye zarorat nahin he 
//Promise One
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task, 
    //DB calls, cryptography, network related calls 
    setTimeout(function() {
        console.log("Async task is complete.");
        resolve()//ye function then aur resolve ko connect karta he 
    }, 1000);
})
//.then() ek call back milta he matlab is men ek function milta he ,ka taluq resolve k sath hota he aur ye automatically ek argument receive karta he 
//aur then me ek value return hoti he jo promise function se ati he  
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

//Promise Two
//baghair varaible men store kiye, uper wala code ko likhne ka dosra traiqa
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//Promise Three 
let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //ye resove data ko is function se then men pas karne ka kam bhi karta he, hum is resolve men data/funtion bhi pass karsakte hen 
        resolve({username: "Thijs Blob", email: "thijsblob@example.com", postcode: "8108CP"})//ye resolve bhi use hoga data ko pass karne k liye ziada tar ek object hota he ap array ya function bhi pas karsakte ho  
    },1000)
})//hum yahan mann rahe hen k hum us ya uper wale object ko user bula rahe hen
promiseThree.then(function(user){
    console.log(user);
})

//Promise Four
let promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log();
        // let error = true //Error: something went wrong!
        //agr error nahin he to
        // let error = false
        let error = true
        if (!error) {
            resolve({username: "Thijs BLob", password: "1234"});
        } else {
            reject('Error: something went wrong!')
    }
    
}, 3000)
})//then laga k values lelenge aur catch laga k error kuk dono men function jane hen
// let username = promiseFour.then(()=> { ye ek ghalat tariqa he isse error ayega 
promiseFour.then((user) => { //.then() ki hum yahan further chaning karsakte hen chaho to aur mazid .then laga sakte ho multiple 
console.log(user);
return user.username   
}).then((username) => {//is men uper wale function se return value ayegi jo k username he he
console.log(username);//username ek variable he hum ise koi bhi naam desakte hen aur is men wo value hogi jo uper wale function ne return ki hogi is case men wo ek username he is liye humne iska naam username rakh diya he 
}).catch(function(error){ 
    console.log(error);
}).finally(() => {console.log("The promise is either resolved or rejected");//matlab hamesha hi execute hoga ya iski default condition he chahe rejected ho ya resolve ho
})
*/

//Promise Five
let promiseFive = new Promise(function(resolve, reject){
    setTimeout( function(){
        //agr ye false ho aur yahan koi error nai aye to 
        // let error = false
        let error = true//is pe error ayega
        if (!error){
            resolve({username: "Henrie Hutten", password: "henrie2374"})
        } else {
            reject('Error: JS went wrong! :-(')
    }
}, 1000)
});

//promise ka alternatie async await bhi he sirf farq ye he k is men catch handle nahin hota otherwise same he ye 
//async await men hum ziada tar db ko handle karne k kam ata he kuk tabhi age barhte hen jub hamara kam hojata he ya db connection hojata he 
// promiseFive.then()
//value .then ya phir .catch se ayegi 
// async function consumePromiseFive(){ //async await errors ko directly handle nahin karsakte
//     const response = await promiseFive//promiseFive ek object he
//     console.log(response);//is pore code ko run karne k bad error ayega kuk system khud refer karega k tumne try catch apply nahin kiya he is liye error aya he ya ayega 
// }
// consumePromiseFive()

async function consumePromiseFive(){
    try { //consol log reponse 
        const response = await promiseFive
        console.log(response);  
    } catch (error) { //agr error ho to wo yahan ajaye
        console.log(error); //ise log karne se system ka error nahin balke tumhara error text direct show hoga 
        //is tarah hum error ko gracefully handle karenge
    }
}
consumePromiseFive()
//ye try catch format me he
// //https://jsonplaceholder.typicode.com/users
// async function getAllUsers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')//fetch ek promise wapus dega, aur ye fetch pehle ek libraray thi lekin ab ye ek object he 
//     // console.log(response);  
    
//     //response.json ko bhi await karwana parega warna ye error dega aur yehi issue tha error ka idhar 
//     const data = await response.json()//a method on the response object return by fetch in web APIs, you use it to read and parse the body of a response from a network request, it returns a promise that resolves to a JavaScript object  
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);//42 
//     }
// }
// getAllUsers()

//agr uper wale code ko .then wale format men likhe to niche wala code he
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {//yahan achi bat ye he k humen wait karna nahin parta aur yahan jub ek then khatam hota he aur us se reponse ata he to uskbadhi dosra run hona shoro hota he 
    return response.json()//return to kardia he yahan response ko lekin ise handle karne k liye ek aur then lagega 
})//kuk iska response type ek promise he 
.then((data) => {
    console.log(data);
    
})

.catch((error) => {
    console.log((error));
    
})//error bhi asakta he isliye, kuk ye fail bhi hosakta he 


//Fetch queue/ Micro task queue or priority queue ye sir fetch() k liye alg se create ji gayi he 
//Fetch() sub se pehle run hoga aur iska result return hoga , call stack men fetch hamesha pehle jayega 
