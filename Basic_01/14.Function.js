function Hellofxn(){
    console.log("Hello Function")
}

Hellofxn()

function addTwoNumber(num1, num2){
    return num1 + num2
}

const result = addTwoNumber(2, 3)
console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Adi"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 1000, 2000))

const user = {
    username: "Aditya",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 300
})

let myArray = [200, 400, 600, 800]

function returnArrayValue(getArray){
    return getArray[2]
}

// console.log(returnArrayValue(myArray));
console.log(returnArrayValue([200, 400, 600, 800]));

