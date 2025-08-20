function SetUsername(username){
    //complex DB calls
    this.username = username    
    // console.log("called!");//ye checking k liye he k ye call to horaha he 
    
    //.call: It calls a function with a specified this context.
    //You can also pass arguments individually (not as an array).
    //functionName.call(thisArg, arg1, arg2, ...);

}

function createUser(username, email, password){
    // this.username = username // humne is kam ko uper wale function ko outsource kardiya he k wo set kare aur hum use yahan sirf call karen, isliye humne ye line use nahi ki he idhar ya yahan par
    //niche wale code se user name nahi ayega, sirf email aur password set hoga
    // SetUsername.call(username) //uper wala method call karo aur us men is function ka username pass kardo, kuk uper wala function humen username set kark dega
    //humen uper wale function ka refrence hold kark rakhna he isliye hum .call use karenge 
    //kuk ek function run ho ke khatam hojata he is liye usk variables bhi chale jate hen agr use further age tak na pohunchaya 
    //call horahae lekin uskander variables run hote he ghaiyab horahahe 
    
    //iper wale function ki return value global context men gayiaur wahan se is naye function men ayi ya call hui is this ki badolat
    SetUsername.call(this, username)//yahan par ye username same uper wale function k variable ya argument se liya gaya he
    this.email = email
    this.password = password
}

const user1 = new createUser("Henrie Hutton", "henriehutton@fb.com", "1234")
console.log(user1);