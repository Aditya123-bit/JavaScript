const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    age: 18,
    location: "Bhopal",
    email: "adityakumaryadav@gmail.com",
    isloggedIn: false,
    [mySym]: "mykey1"
}

console.log(JsUser.email)

console.log(JsUser["email"])

console.log(JsUser[mySym])

JsUser.email = "adi@gmail.com"

Object.freeze(JsUser)
JsUser.email = "adityakumar@gmail.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(Js)