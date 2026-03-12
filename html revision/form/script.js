function togglePassword(){
    let fpass=document.getElementById("set-pass")
    let secpass=document.getElementById("cnfpass")
    let showpass=document.getElementById("show")
    if(fpass.type=="password"){
        fpass.type="text";
        secpass.type="text";
        showpass.innerText="hide pasword"
    }
    else{
        fpass.type="password";
        secpass.type="password";
        showpass.innerText="show pasword"
    }

    


}
function showMessage(){
    let fpass=document.getElementById("set-pass").value;
    let secpass=document.getElementById("cnfpass").value;
    let fname=document.getElementById("first-name").value;
    let lname=document.getElementById("last-name").value;
    let emale=document.getElementById("email").value;
    let adds=document.getElementById("addres").value;
    let greet=document.getElementById("greet");
    if(fpass!=secpass){
        alert("password not matched")
    }
    else{
        if(fpass==""||secpass==""||fname==""||lname==""||emale==""||adds==""){
            alert("fill all data")
        }
        else{
            greet.innerText=`hello ${fname} you are welcome to jH`;
            alert("submited succesfully")

        }
    }
    
}
btn=document.getElementById("btn")
img=document.getElementById("img")
let count=0;
function buttn(){
    if(count==0){
        img.src="image copy.png"
        count=1;
    }
    else{
        img.src="image.png"
        count=0;
    }
}