const user = {
    username: 'Shamsia',
    price: 800,
    
    welcomeMessage: function (){ // is variable ko humdirect bhi istemal karsakte hen${usernaem} kark lekin ye sahi tariqa nahin he, humen this istemal karna he current context ({} jo braces hen is object k wo he sirf) ko batane k liye 
        console.log(`${this.username}, welcome to website!`); // this.username se mtlb he isi object ka username varible se murad he meri ya mjhe chahiye 
        // console.log(this); // ye this ko console.log karne se pore object ki keys aur values print horahi hen aur humen context bata raha he k is object men kia he
        
    }
}
// user.welcomeMessage(); // Shamsia, welcome to website!
// user.username = 'Joost'
// user.welcomeMessage()// Joost, welcome to website!

// console.log(this);//{} ye ek empty object dega ya ko refer karega kuk ye ek engine he, hum node env men he isk liye this alag maine rakhta he aur this alag chiz ya object ko kehta he jub k console men this se murad windows hogi ko kehte hen

// function one(){
//     let username = 'Shamsia'
//     console.log(this.username); // ye ghalat he kuk this sirf objects k liye kam karta hen functions k liye nahi, ye undefined dega, functions men ak this istemal nahin karsakte
// }
// one()
    
//hum functions ko aur kese declare karsakte hen khas arrow functions k zariye
//is function ko bhi nahi pata k this kia chiz he output: undefined araha he, ye function ek const variable men he
// const shai = function() {
//     let username = 'Shamsia'
//     console.log(this.username);
// }
// shai()

//arrow function men this ko karke dekh rahe hen k hosakta he ya nahin
// const shais = () => {
//     let username = 'Shamsia'
//     console.log(this.username);// undefined dega
//     console.log(this);// {} dega kuk global scope men kuch nahin he
// }
// shais()

//this regular functions men undefined dega aur this arrow functions men ek empty object de ga node men karo to

//arrow functions basic syntax ese he () = > {} aur ap is ek naam variable men bhi store karsakte hen 
// const addThree = (num1, num2) => {
// return num1 + num2 + 3;
// }
// console.log(addThree(5,6))

// ek aur tariqa arrow function ko likhne ka, implicit return me ap ko parenthesis {} istemal karne ki zarorat nahi he aur return ki bhi nahin he, kuk node maan leta he a pki statement ek hi line ki he
// const addtwo = (num1, num2) => { 
//     return num1 + num2
//  }  
//  const addTwo = (num3, num4) => num3 + num4 // ye num purane num se ya kisi bhi num se same hone/ match nahin karne chahiye chahe wo kisi dosre variblae k ander hi ku na ho error denge
// console.log(addTwo(55, 10))

// {} curly braces men wrap kia to return likhna parega aur agr () parenthesis men kia to return ki zarorat nahi he likhne ki 
//() iska istemal react men ziada hota he
// explicit men hum return keyword likhte hen aur implicit men hum nahin likhte  he 
// const addition = (num5, num6) => (num5 + num6)
// console.log(addTwo(2, 9))

//agr apko same function men agr ek object return karna he to kese karenge
// const addition = (num5, num6) => {username: 'Klein'} //is tariqe se ap ek object ko return hi nahi karsakte, ye output: undefined dega agr () ye na hote to humen ek object ese dena parta {username: 'hell'} jo k ghalat tariqa he aur undefined output men deta he
const addition = (num5, num6) => ({usernames: 'Klein'})// kuch bhi
console.log(addition(2, 5))