//agr mjhe kisi object ki property k bare men jann he to mjhe pata he k men naam likhunga
// Object.getOwnPropertyDescriptor(Math)// ye ap ko mazid aur properties deta he jo ziada tar hissen hoti hen
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI")//Math module he, us men property he PI aur uski ek value he jo 3,14 he
// console.log(descriptor);

//const myNewObj = Object.create(null) // hum ese bhi bana sakte hen

let product = {
    name: "Henrie Hutten",
    price: 250 ,
    isAvailable: true,

    //enumerable ko check karne k liye hum ye function bana rahe hen kuk loop men sirf properties list honi chahiye agr function bhi he to matlab code phat gaya he apka! :(
    orderProduct: function(){
        console.log("The product is not available.");
        
    }
}
//kia properties set karsakta hun ya nahi agr han to kese
// console.log(product);
// console.log(Object.getOwnPropertyDescriptor(product));//undefined : ye ghalat he kuk hum yahan sirf object de rahehen jub k ye ek property ka descriptor he

//isliye jo sahi he wo niche he
console.log(Object.getOwnPropertyDescriptor(product, "name"));
//{ 
    //   value: 'Henrie Hutten',
    //   writable: true,
//   enumerable: false,
//   configurable: true
// }

//Object k ander hum apni properties ko define bhi karsakte hen kuk code hamara he to hume is change karne ka access bhi kuch js kcode hard coded rakha gaya he jise hum change nahin karsakte jese math.pi wali example ise hum overwrite nahi karsakte hen kuch bhi karlen hum
// Object.getOwnPropertyDescriptor(product, "name", Object) //ye syntax he ek tarah ka
Object.defineProperty(product, "name", { //ya 'name' ese likho to bhi sahe yahan
    // writable: false,
    //enumerable: false,
    enumerable: true//agr ye prope false ho name nahi ayega output men kuk hum ne use iterable ya enumerable nahin rakha he is liye list wo yani name pro show nahin hoge
    //agr enumrable true he to list men name property bhi show hogi kuk hum ne enumerable true set kiyta he,itrate hone ko allow karne k liye true ko use karenge
    })
    console.log(Object.getOwnPropertyDescriptor(product, "name"));//age chal k koi bhi iski properties ko chnage nahin karsakta kuk hum ne set ki hen
    /* 

for (let [key, value] of product) {
    console.log(`${key} : ${value}`);//product is not iterable
    
}

//kuk humen sirf key values chaiye hoti hen to isliye function ka include hona list men ghalat mana jata he
for (let [key, value] of Object.entries(product)) {
    console.log(`${key} : ${value}`); //output he niche hamara
    // name : Henrie Hutten
    // price : 250
    // isAvailable : true
    // orderProduct : function(){
        //     console.log("The product is not available.");
        
        */
        
//hum yahan additional check lagayenge kuk humen function ko print hone se rokna he
for (let [key, value] of Object.entries(product)) {
    if(typeof value !== "function"){ //'function' bhi lik sakte hen
        console.log(`${key} : ${value}`);        
    }
    //output men sirf properties ayengi koi function nahin hoga check lagane k bad
}

//kuch object ki jo properties hen wo apk loop k part hi nabane to isliye humne enumerable true / false use kiya he
