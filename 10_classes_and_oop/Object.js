/* 
//humne yahan ek function ko use kia he ek object ko banane k liye
function multiplyBy5(num){
    return num*5    
}
multiplyBy5.power = 2
//function function bhi he aur object bhi he lekin agar ap chahe to ap ek function ko ek object ki tarah bhi behave karwasakte hen 
console.log(multiplyBy5(10))//50//2
console.log((multiplyBy5.power))
console.log(multiplyBy5.prototype);//{} bij default kuch context set hote hen JS men, aur ye jo object aya he ye asal men us method ka this he yani us method ka object he 
*/
let score
function createUser(username, score){
    // console.log();
    this.username = username
    this.score = score
}

// createUser()
//ek function akhir kar ek object he aur us men men apni khud ki banai hui properties inject karsakti hun jis men phir se koi function hosakta he
createUser.prototype.increment= function(){//yahan this is custom function ko uper wale function se connection ka kam karraha he, sirf naam createUser istemal karne se kam nahin hoga ya chalega
    this.score++ 
    //is this ka maqsad yahan sirf ye he k jis ne bhi bulaya he usi ki value increase karega, yani jisne bhi createUser ko call kia he ya istemal kia he wahan par increment hogi
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`);//jisne bhi score pocha he use batado matlab creat user ko use karte hue jisne pocha he 
    
}

//hum uper wale function k multiple users banayenge, yahan jub apne functions se values ek variable men transfer kari tab ap ko batana parega ek new keyword se tak run karne k bad koi error na aye
const user1 = new createUser("Marcel Haarman", 200)
const user2 = new createUser("Marya Haarman", 30)

user1.printMe()
user2.increment()//increment hone k bad printMe ka func call karo kuk yehi dikhane ka kam karrha he agr sirf increment karoge to +1 hoga lekin show nahi hoga
user2.printMe()

//new kyword -> new JS object create hota he -> refrence milta he k matlb ye kiska instance he kiss se refrence liye gaya he isk liye->
//new kyword -> new JS object create hota he aur iska koi refrence hona chahiye jo k yahan ye createUser wala function he->

//new keyword-> new object-> refrence bana-> object prototype se link hoga + uski apni properties-> ye constructor function call hota he with specified arguments aur newly created object k sath link hota he aur ye assume karta he k wo koi value return karega