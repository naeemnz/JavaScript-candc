//classes aur funtion k abd ab same kam object se kese karenge 
let User = {
    _email: 'henrie@fb.com',//ye private property he aur ye access horahi he console.log(user1.email); se
    // email: 'henrie@fb.com',//error de raha he, pata nahin ku
    _password: '123abc', //ya "123abc"
    //mene ek object naya aur us me hardcoded values di hen aur men nahi chahta k koi bhi in values ko access kare isliye men getter aur setter define karrha hun 
    
    get email(){
        //this.email inside the getter or setter for email, you're actually calling the getter or setter itself, which leads to infinite recursion.
        return this._email.toUpperCase()
        // return this._email.toUpperCase()//_email hi likhna warna ye apne apko hi call karega agr ye this.email.toUpperCas likha to
    },
    set email(value){
        this._email = value
    }
}

//hum yahan factory functions use karsakte hen jese ham harbar constructor functions new  use kar te thhe wese hi hamare pas factory func hote hen aur hum yahan use use karenge
//Object.create: matlb kisk ya kis object k basis pe men ek naya function create kark dun

//by default ye null hota he, men yahan kehraha hun k ap user k basis pe ek naya object create karo aur usko user1 k ander refer kardo
// Create a new object 'user1' that inherits from 'User'
let user1 = Object.create(User)
console.log(user1.email);
// console.log(user1.password);khud karna bad men

//ye object istarah ka bhut reare he ye ap ko dkehne ko zida tar nahin milega

//node .\10_classes_and_oop\object_get_set.js