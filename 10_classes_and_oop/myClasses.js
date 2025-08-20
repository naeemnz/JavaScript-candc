//ES6 k bad

//classes men bahir k variables asani se function k ander call hosakte hen aur same as an object . kark call karo 
//function keyword istemal nahin hota classes men function define karte waqt
// class User {//jese hi ek se ek object banaega ya initialized hoga wese hi constructor apne app call hojata he 
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
// //is men function likhne ki zarorat nahin he kuk ye class k ander he isliye hum direct likhen ge
//     encryptPassword(){//method of a class
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1 = new User("Henrie Hutton", "henriehutton@fb.com", "123")
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

//agr classes nahin hoti to ye kam kese hota, uper wale code ko dosri tarah likhne ka tariqa
function User22(username, email, password){
    this.username = username
    this.email =email
    this.password = password
}

User22.prototype.encryptPassword = function(){
    return `${this.username.toUpperCase()}`
}
User22.prototype.changeUsername = function(){
    return `${this.password}abc`
}

const user11 = new User22("Henrie", "henrie@fb.com", "123")
console.log(user11.encryptPassword());
console.log(user11.changeUsername());

