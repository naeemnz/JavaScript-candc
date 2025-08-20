class User {
    constructor(username){
        this.username = username
    }
    //class men current context harjagah hota he ya milta he
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// is user ko humen kabhi admin banaparega ya pgir student ya phir koi dosra role dena parega to hum basic class ko extend katrenge aur us par further chizen lagayenge
class Teacher extends User{//humne ek nayi class teacher banayi aur use properties aur methods user k bhi diye hen, user ki sari functionality teacher ko available he
    //agr ap constructor ko overwrite karna chaho ge to kuk teacher ka ek alag constructor hona chahiye
    // constructor(username1, email, password ){ //ye bhi sahi he chnage kjarsakte ho naam
    constructor(username, email, password ){
        //username variable in teacher class constructor+super() same hone chahiye kuk ye call hone pe control wapas user class ki taraf jaraha he
        
        //yahan .call aur this ki zarorat nahin kuk yahan classes he aur kam asan hojata he is waja se
        //yahan this ye khud hi automatically karega behind the scene bol lo
        // super(username1)//change karsakte ho naam lekin uper constructor k according isi class k, ye dekhega k konsi class he phir usk bad jayega k us class k constructor men phir usk variable ko yahan include karega
        super(username)//ye dekhega k konsi class he phir usk bad jayega k us class k constructor men phir usk variable ko yahan include karega
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`); 
    }
}
let user1 = new Teacher("Henrie", "henrie@fb.com", "123")
user1.addCourse()

let user2 = new User("Thijs Blom", "thijsb@fb.com", "1234")
// user2.addCourse()//access nahin he kuk dosri class me he
user2.logMe()
user1.logMe()

console.log(user1 === user2);//false kuk alg classes hen
console.log(user1 === Teacher);//kuk wo exactly same nhain he aur ye us ki ek instance he isliye same nahi he
console.log(user1 instanceof Teacher);//true kuk ye apko confirm kark bata ta he agr ap ko check karna he to
console.log(user1 instanceof User);//true kuk instance ka instance he yahan isliye true he aur user ek parent he is liyae use derive hua he ye instance

/**
 new Teacher("Henrie", "henrie@fb.com", "123")
 │
 ▼
 Teacher constructor(userNameFromForm, email, password)
 │
 ├─ super(userNameFromForm) ──► calls User constructor
 │                                 │
 │                                 ▼
 │                         User constructor(username)
 │                                 │
 │                                 └─ this.username = username
 │
 ├─ this.email = email
 └─ this.password = password

 */