//document.body.style.backgroundColor="red";
let button01=document.getElementById("button01");
let box=document.getElementsByClassName("cbox")
let greet=document.getElementById("greet")
let welcome=document.getElementById("welcom")
let namee=document.getElementById("name")
let que=0;



button01.addEventListener("click",function(){
if(que==0){
    for(i=0;i<4;i++){
        box[i].style.height="100px"
        box[i].style.width="100px"
        
    }
    greet.innerText=`hello ${namee.value} `
    setTimeout(function(){
        welcome.innerText="welcome to our game";
    
    },1000)
    setTimeout(function(){
        box[0].style.backgroundColor="red";
        box[1].style.backgroundColor="blue";
        box[2].style.backgroundColor="green";
        box[3].style.backgroundColor="orange";
        let but=document.createElement("button")
        but.type="button"
        but.id="butt"
        but.innerText="reset"
        but.style.backgroundColor="#f8078b"
        but.style.color="#f7f4f6"
        document.body.appendChild(but)
        but.addEventListener("click", function(e){
            document.body.style.backgroundColor="#f9f4f4";
        })
    },2500)
    
    que++;
   

}})

box[0].addEventListener("click", function(e){
    document.body.style.backgroundColor="red";
})
box[1].addEventListener("click", function(){
    document.body.style.backgroundColor="blue";
})
box[2].addEventListener("click", function(){
    document.body.style.backgroundColor="green";
})
box[3].addEventListener("click", function(){
    document.body.style.backgroundColor="orange";
})

