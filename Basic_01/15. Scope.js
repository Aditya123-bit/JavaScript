var x = 20
let a = 3000
const b = 200
if(true){
    let a = 20
    const b = 30 
    console.log("Inner loop:",a,b);
    
}

console.log(a);
console.log(b);
// console.log(c);


function one() {
    const username = "adi"


    function two(){
        const website = "youtube"
        console.log(username);   
    }
    // console.log(website);

    // two()
    
}

one()

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);
