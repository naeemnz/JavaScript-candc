//object literal: apka koi bhi object, object literal he 
// const user = {
//     userName: "Thijs Blom",
//     loginCount: 9,
//     signedIn: true,

//     /*** kisis bhi object ki properties ko usk khud k function men istemal karne liye tmhe this. keyword use karna hoga ***/
//     //object k ander properties aur methods ek dosre ko direct access nahin karsakte chahe wo ek hi k ku na ho

//     //agr bahar se saman lena he to this se batana parega k men apne saman ki baat karraha hun
//     getUserDetails: function name() {
//         console.log('Got user details from the database');
//         // console.log(`Username: ${userName}`);//ye refrence error dega k username not defined, ye ek ghalat code he
//         console.log(`Username: ${this.userName}`);//ye ek sahi tariqa he jo error free he ek tarah se
//         console.log(this);//yahan is function men this men is object ki sari properties aur methods ayenge agr check karna chaho to        
        
//     }
// }
//object ki properties ko access karne k 2 tariqe, pehla dot notation he aur dosra square brackets he, han yad rahe k har hal men object ki property ko access karne k liye [] k ander "" use karna
// console.log(user.userName);
// console.log(user["loginCount"]);

//yahan function ka refrence nahin bulk direct function pass hota he
// console.log(user["getUserDetails"]());//(): method ko invoke karne k liye
// console.log(user.getUserDetails());//(): method ko invoke karne k liye

//agr yahan this ko log karoge to jawab men ek {} object ayega
//agr browser men karoge to jawab men ek window object {} ayegi, matlb ye apne environment k hisab se badalta he
// console.log(this);

//agr const user2 = {....} banana he to pora uper ka code copy karna parega mtlb bar bar har user k liye likhna parega, to isse bachne k liye hamare pas constructor hote hen
//yahan par ye new keyword asal men ek constructor function he jo k apko allow karta he k 
// const promiseOne = new Promise()//ap ek hi object literal se multiple instances banasakte ho,
// const date = new Date()//ye apko ek naya context banae k kam ata he aur isi ko hum constructor bolte hen

function User(username, loginCount, isLoggedIn){
    // myUsername = username //yhan easily patachal raha he k dono alag alag hen
    // username = username //coding practises men hum ziada taer istarh kam karte hen lekin is men humen pata nahin chalta he k humara kis wale se matlab he 
    //left variable he = right jo ap pass kark de rahe ho arguments
    this.username = username//properties
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //agr ap chaho 
    // return this //ye karne se ap ne pore opbject ko pass kardiya he aur us k pas sari values ka access he
    //agr return this yahan likho ya nahin likho ye by default return hota hi he har haal men, isliye humen likhne ki zarorat nahin he khas tor par

    //method he ye
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        //yahan pe same object wale rules lag rahe hen  bahar se saman ander lane k liye this ko use karo
    }

}

// const userOne = User("Danielle Temmink", 4, false)
// console.log(userOne);
//agr ap ko is ki properties ko access karna he to
// console.log(userOne.isLoggedIn);

//is tarah likhne se purani values hut jayngi aur naya user matlb user two k values rahen ghi sirf
//mtlab last given values show hongi isse bachne k liye hum new ka istemal karte hen
// const userTwo = User("Henrie Hutten", 16, true)//overwrite kardi values is ne 
// console.log(userTwo);

//constructor function yani new humen harbar ek naya instance deta he
const userOne = new User("Danielle Temmink", 4, false)
// console.log(userOne);
// console.log(userOne.constructor);// [Function: User]: output men aye ga kuk constructor property ek refrence he ap khudhi k bare men jo k yahan function User he 
const userTwo = new User("Henrie Hutten", 16, true)
// console.log(userTwo);

console.log(userOne instanceof User);//true
console.log(userOne instanceof Object);//true


/*
 * New Keyword
 * 1. Ek empty object create hota he jisko instance kaha jata he
 * 2. Isk bad apka ek constructor function new keyword ki badolat ya wajah se call hota he, is men sare arguments pack hote hen aur apko wapas diye jate hen
 * 3. Is step men sare arguments apk this keyword men inject ya ajate hen 
 * 4. apko phir function men miljate hen jese k humen mile uper wale function men
 */