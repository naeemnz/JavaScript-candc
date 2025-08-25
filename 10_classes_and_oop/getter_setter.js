class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get password(){ // class k abhar se koi value lena chah rahe ho to isliye getter hota he
        // return this._password.toUpperCase()
        return `${this._password}Temmink`// get karte waqt koi bhi changes karsakte ho jese hum ne yahan string ko add kardiya return password karte waqt
        
    }
    set password(value){//agr class k ander set karni he to isliye setter hota he
        this._password = value//value as it is db men save hogi
        //_password: private or internal property, don't touch it directly outside the class

    }
    //jo property he usi k naam ka getter aur setter hoga, naam jo property he usi ka get/set hona chahiye mtlb same ho
    get email(){
        return this._email.toUpperCase()//_email private property ban gayi he
    }
    set email(value){
        this._email = value
        
    }
}
//uper wala tariqa naya he aur isk muqable men isi code ko purane tareqe ya method se likha jaye to kese likhenge wo properties_get_set men milega, same work but in old way or purane tareqa same kam ko karne ka
let user1 = new User("henrie@fb.com", "123abc")
console.log(user1.password);
console.log(user1.email);

//hamare getter aur setter kai tarah k scenarios k liye ate hen, jese agr koi password poche to nahin batanhe, ye encrypt karna he phir dena he, ya kuch properties ka access rokna he ya, ya kisi ko password ka access dena hi nahi chahta 
//getters aur setter by default har class men hote hen aur in properties ya variables k naam se automatically functions bunte hen 
// kisi bhi variable ya properties par ap getter aur setter laga sakte ho
//agar ek hoga to dosra bhi lazmi hoga  isliye get aur set dono chahiye hote hen

/**
 * class User {
    #email;//private variable
    #passwordHash;

    constructor(email, password) {
        this.#email = email;           // ✅ allowed
        this.setPassword(password);    // ✅ calls internal method
        }
        //setPassword(password){if...}
        //constructor men function call karo > aur construct ka password > send to function as argument  
}

 */
