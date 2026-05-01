let namee=document.getElementById("name").value
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
let cnfpass=document.getElementById("cnfpass").value
console.log(namee)
let sumt=document.getElementById("sumt").addEventListener("click",()=>{
if(namee==''|| email==''|| pass==''|| cnfpass==''){
    alert("enter all the detail")
    console.log(namee)
}
else{
    if(pass!=cnfpass){
        alert("pass not verified")
    }
    else{
        alert("registered")
    }
}
})
