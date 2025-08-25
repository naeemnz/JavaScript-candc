//properties k through kese getter aur setter define hote the pehle, old way
function User(email, password){
    this._email = email,
    this._password = password,
    //function 2 tarah se behave karta he wo function bhi he aur wo ek object bhi he 
    // isliye ap ek object ki properties ko call karsakte ho aur define karsakte ho khud se
    
    //define property getter aur setter ki property he asal men
    Object.defineProperty(this, 'email', { //apko pehle khud context dena parta he yani this batana parta he, kuk iska khud ka this nahi hota apko bhejna parta he isk sath, ap ka this to khali he ya phir wo global object ko refe r karrah he, men apko this deta hun ye ap sath men rakho
        //syntax: context, 'property' underscore email likhne ki zarorat nahin he, third parameter object he jismen ap value define karsakte ho property ki
        
        get: function(){
            return this._email.toUpperCase()
        } ,
        set: function(value){
                this._email = value}
                
            })
            
    Object.defineProperty(this, 'password', {
        get:function(){
            return this._password.toUpperCase()
            },
        set: function(value){
                this._password = value
             }
            })
            
        }

        let userOne = new User("henrie@fb.com", "123abc" )
        console.log(userOne.email);
        console.log(userOne.password);//meri obs _password se sirf set ki value ya beghair cap k print hoga: 
        // HENRIE@FB.COM 123abc for   console.log(userOne.email); console.log(userOne.password)
        
        /*
        uper wale code men humne function based syntax kiya , aur wo use modern sytax bol raha he kuk is men hum define
        property use karrahe he hum sam kam ko object base bhi karsakte hen - is file men he: object_get_set.js*/