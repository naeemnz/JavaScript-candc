const coding = ["js", "ruby", "java", "python", "cpp"]

//  humne ise for each loop ko ek varibale men store karne ki koshish ki he jo k end men kuch bhi return nahin karta 
//  const values = coding.forEach( (item) => {
    // console.log(item); agr hum ise comment karden to bhi undefined ayega lekin array elements print nahin honge
    // yahan items print hojainge 
    // return item;
    //  })
    //  console.log(values);//iski jagah humen undefined milega ending men items ki list k jo k ek array elements ki list he, yahan return apko undefined mila he
    //isliye apko yahan manually return karna hoga matlb console.log(item); k bad apko likhna hoga return item mtlb items return karo isk bawajod isse koi farq nahin parega faida nahin he is bhi kuch karne ka
    //For each loop kabhi bhi koi value return nahin karta 
    
    //filter  bhi apne ander call back leta he
    //  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //  const newNums = myNums.filter( (singleValue)=> singleValue > 5);// ye yhana values wapas karraha he lekin humne kuch bola nahin isliye humen yahan kuch dikh nahi raha he, ye operation for each men bhi hota he lekin wo apko values return ya wapas nahin karta he 
    //  console.log(newNums);
    
    //agr ap isko istarah likhen to return keyword zaror likhen kuk apne scope start kis he aur wo ek return keyword lazmi mangta he, warna array empty print hoga
    //agr ak scope open karte hen to return keyword use karna hoga aur agr return istemal nahin karna he direct num likhdena bagahair {} scopes k brackets k
    //  const newNums = myNums.filter( (singleValue)=> { 
        // return singleValue > 5 })
        // console.log(newNums);
        
        //Agr humen same kaam karna he lekin humen filter use nahin karna he is ki jagah humen for each use karna he isi kam ko karne k liye to hum kese karenge ise is ka tariqa he niche
        //sab se pehle ek newNums ka array bana na tha
        // const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // const newNums = []
        // myNums.forEach( (num) => {
        //     if (num > 4) {
        //         newNums.push(num)
        //     }
        // });
        // console.log(newNums);
        
        //exercise he filter ko practise karne k liye
        const books = [
            {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004}, 
            {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008}, 
            {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007}, 
            {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010}, 
            {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014}, 
            {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010}, 
            {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
            {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016}, 
            {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}, 
            {title: 'Book Ten', genre: 'Fiction', publish: 1981, edition: 2004}            
        ]//ap chahe to ek line men likhsakte hen aur chahen to return keyword use karsakte hen jese apki marzi
        // const userBooks = books.filter( (bk) => bk.genre === 'History')//isme tmhen sirf wohi objects dikhenge jis men genre history he
        //ek aur filter  laga k dejhenge kisi number par is object k 
        let userBooks = books.filter( (bk)=> {
        //    return bk.publish >= 2000
           return bk.publish >= 1995 && bk.genre === "History"
           //humen agr do conditions check karni he to hum uper wala method karenge
            
        })
        console.log(userBooks);