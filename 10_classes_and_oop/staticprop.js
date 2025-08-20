class User{
    constructor(username){
        this.username = username        
    }

    logMe(){
        console.log(`Username: ${this.username}`);   
    }
    //us method ya property ka access sab ko nahin dena chahte, child ko bhi access karne ki permission nahin milti he
    static createId(){//kai dafa hum is method ka access har us object ko nahin dena chahte jo is class se istantiate hua he
        return `123`
    }
}

let user1 = new User("Thijs Blom")
// console.log(user1.createId());//access nahin mila he
 
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email

    }
}
let testClass = new Teacher("Arnold Roolvink", "arnold@fb.com")
console.log(testClass.logMe());
// testClass.createId()//access nahi milega static ki wajah se
