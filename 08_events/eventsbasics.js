// document.getElementById('boot').onclick = function(){ alert('boot clicked')}// ye tariqa bhi kam karta hen lekin ye bhi utna aicha nahin he kuk is men humen features kam milte hen
//aur sathe men propagation ki functionality bhi nahin milti he 

// document.getElementById('boot').addEventListener('click', function(e){ alert('boot clicked again!')}, false)
// document.getElementById('boot').addEventListener('click', function(){ alert('boot clicked again!'), false})//ye sahi he, false default behaviour he isliye hum ise nahin likhte hen

//attachEvent() //ye pehle hota tha explorer k zamane men apps ko explorer pe chalane k waqt pe use karte the
//jQuery - on //te jese ajkal React hoti he wese hi pehle jQuery (framework) hoti thi

/*
('click', function(e){})e yahan ek event object he kisi bhi function men. Ye multiple tarah ka jota he
Mostly browser or environment k events milte hen. View, height or width, position, etc
1. types: kyboard or mouse, 2. timestamp, 3.preventDefault: ex form submission rokna, ya anchor tag ki navigation rokna kisi bhi tag ka default behaviour rokne k liye, 
4. target: ,  5. toElement, 6. srcElement, 7. currentTarget
8. clientX, 9. clientY, 10. screenX, 11. screenY, 
12.altKey, 13. ctrlKey, 14.shiftKey, 15. keyCode  keyboard ki keys ko direct janne k liye k wo click hui he ya nahin ko check karne k liye
*/

//Event propagation: a)Event Bubbling (false / default case he ya aur ziada use hota he) b)Event Capturing (true hota he ye)

//Dono code same ye lekin
// let outside = document.getElementById('trees').addEventListener('click', function(e){
//     // console.log(e)
//     console.log("Clicked inside the ul elements");
// }, false) //third parameter false he yahan pe

// let inside = document.getElementById('trees').addEventListener('click', function(e){
//     console.log("Trees are clicked only!");
// }, false)//***inside to outside*** yani yahan bubbling hogi uper ki taraf jayega, is hum propagation bolenge 
//Result event: first Trees are clicked only! us k bad Clicked inside the ul elements 
/**
 
//Capturing mode
let outside = document.getElementById('trees').addEventListener('click', function(e){
    // console.log(e)
    console.log("Clicked inside the ul elements");
}, true) 

let inside = document.getElementById('trees').addEventListener('click', function(e){
    console.log("Trees are clicked only!");
}, true)//***outside to inside*** yahan capturing horahi he agr isp click karo to pehle outside ya main elemnt click hoga isk bad ye wala run hoga
document.getElementById('trees').addEventListener('click', function(e){
    // console.log(e)
    console.log("Clicked inside the ul elements");
}, false) 
document.getElementById('trees').addEventListener('click', function(e){
    console.log("Trees are clicked only!");
    e.stopPropagation() //isse apka element bubble hoke uper wale element pe nahi jayega sirf ek elemnt rahega, mtlb single event hoga agr is pe click karenge to
    
}, false)//

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked!");
}, false)
*/
//small example project
document.querySelector('#Images').addEventListener(
    'click', function(e){
    // console.log(e);//click { target: img#capital, buttons: 0, clientX: 168, clientY: 732, layerX: 168, layerY: 1171 },  //yahan target batata he k kis li element pe click kiya he user ne kisi ul k elements men se, 
    // console.log(e.target);//<img id="horse" width="200px" height="250px" src="images\\pexels-gasparzaldo-32822357.jpg" alt="horse"> //mtlb direct li elemnt as target milenge, direct elements milenge
    // console.log(e.target.parentNode);//<li> isse na sirf imag select hogi bulk pora li elemnt select hoga aur agr hum remove karenge to phir image k sath bullet point bhi hatega 
             
    //event spill over
         console.log(e.target.tagName);//tagNme: bhi ek value hoti he example, A, IMG etc.
        if(e.target.tagName === 'IMG' )
        {
            console.log(e.target.id);
         let liAndImg = e.target.parentNode;//parentNode: li he
        //Problem: agr ghalti se bhi li k kisi link pe click kiya to pori ul urh ya remove hojayegi, kuk is ka parent ul he isliye delete hojati he, is liye is problem ko solve karne k liye dosra tarika refer karo
        liAndImg.remove() //ChildNode.remove(): void, yahan hum ne imag k sath li bhi liya he, ye ek tariqa he remove karne ka
        //is problem ko solve karne liye hum strict checks laga sakte hen
        //agr li k kareb click karoge to sirf LI print hoga aur agr goole pe jaoge to redirect yani remove hoga
        //istarah uper wali problem solve hogayi yahan 
        }

        //liAndImage.parentNode: ul>, child li>, aur wo child jo remove child k function k ander he yani liAndImg 
        // liAndImg.parentNode.removeChild(liAndImg)

    }
    ,false
)
    