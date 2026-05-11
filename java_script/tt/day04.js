// console.log("start")
// console.log("loading...")
// console.log("end")




// console.log("start");
// setTimeout(()=>{
//     console.log("hello")
// },3500)
// console.log("end")


// setTimeout(()=>{
//     console.log("1second")
// },1000)

// setTimeout(()=>{
//     console.log("2second")
// },2000)

// setTimeout(()=>{
//     console.log("3second")
// },3000)



// console.log("Before");
// setTimeout(()=>{

// },3000)
// console.log("After");


function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
greet("chandan", sayBye);



