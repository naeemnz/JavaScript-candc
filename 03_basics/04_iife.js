// Immediately Invoked Function Expressions (IIFE)
//ise use karni ki wajah ye he jese k kaibar hum ek file banate hen jismen db connection he aur humen sab se pehle use chalana he ya run karna he, jese hi humari application start ho usk ander db ka connection start hojaye
// to  isliye aur dosri wajah ye he k kai bar hum nahi chahte k global scope k variable hamre function ander  k varibles ko pollute ya problem karen 

(function shai() { // ye ek named iife he
    console.log(`DB Connected`);
} )(); //ye iife function he ()()
// shai()// ye normal he

//yahan pe function invoke to hogaya he lekin use pata nahi k context rokna kahan he/ end kahan karna he isk liye hum jan poch k ; lagate hen pehle function k akhir men
//isliye error humara code k liye nahin arahahe sirf is ; k liye araha he
( (name) => { // ye ek unnamed iife he / arrow function he
    console.log(`DB Connected with.... ${name}`);
} )('Maria')
//uper same he agr kuch dena he is benaam function ko to shai('Maria') = ('Maria'), parameter pass karne k liye
