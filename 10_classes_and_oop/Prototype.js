// let myName = "Marcel Haarman"
// console.log(myName.length);//kuk ye ek string he //14

// let myNameWithSpaces = "Marcel Haarman     "
// console.log(myNameWithSpaces.length);//19 characters long he ye naam

//men chahti hun k ye mjhe true length de is liye ek custom function banaungi ta k ye problem solve hosake, me chahti to trim bhi use karsakti th
// console.log(myNameWithSpaces.truelength); // k men har string ka sath kahin par bhi istemaal karsakun
//ye bhi sahi lekin hum sikh rahe hen isliye ye sahi nahin he console.log(myNameWithSpaces.trim().length),sari strings k stah ek method ajaye

//property nahin humen ek method banana he
let myHeroes = ["Spiderman", "Iron Man"]
let heroPower = {
    Spiderman: "sling",
    Iron_Man: "advanced suit",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);//yahan this ka matlab isi object men jo variable he use access karna he
    }
}

Object.prototype.jolande = function (){//isse harr object men power jayegi
    // console.log(`jolande is present in all objects`);
    
}
Array.prototype.hoiJolande = function(){
    // console.log(`Jolande zegt Hallo`);    
}

// heroPower.jolande()
// myHeroes.jolande()//har string men, array men function men ye property milrahi he kuk ise hum ne iske parent men add karwaduya he yani k ek Object men

myHeroes.hoiJolande()//array k pas power he lekin object k pas nahi he
// heroPower.hoiJolande()

// Inheritance
//yahan par hum ek object ki propertie kisi dosre object ko available karwainge __proto__ ko use karke aur ye purane zamane men hota tha
const User = {
    name: "Jolande Veldwijk",
    email: "jolandeveldwijk@example.com"
}
let Teacher = {
    makeVideo: true,
}

let TeachingSupport = {
    isAvailable: false
}

let TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //niche wali purani approach he
    __proto__: TeachingSupport //is men teaching suuport ki properties bhi dedo yani iski khud ki + dosre ki bhi, iska access ander aur bahar dono jagah se lesakte ho
}

//niche wali purani approach he
Teacher.__proto__ = User //iska matlab teacher bhi user ki sari properties ko access karsakta he 

//nayi approach ya access karne ka current ya modern ya new tariqa
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//TeachingSupport sari properties access karlo Teacher ki

let anotherUsername = "Henrie Hutton    "
String.prototype.trueLength = function(){
    console.log(`${this}`);//ye this har wo he string ko refer karega jo ise call karrah he 
    console.log(`True length is: ${this.trim().length}`);//yahan ye this har us string ka this hoga jo ise call karega
    //matlb humne har string ko ye custom function de diya he jiski waja se koi bhi ise call karega to this usi ko include karega jo is call katrega 
    //pehle this String ki jagah wo khas function hota tha jise hum refrence karte the 

}

anotherUsername.trueLength()
"Marja Harman   ".trueLength()
"M. Harman".trueLength()