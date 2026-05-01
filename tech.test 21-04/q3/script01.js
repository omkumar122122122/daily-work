

let ul=document.getElementById("task")
let add_t=document.getElementById("addt")
let tsk=document.getElementById("addtx")

// let del=document.getElementsByClassName("del")
let li=document.getElementsByClassName("habit_list")
// function addtask(){
    // if(tsk==""){
    //     alert("enter task")
    // }
    // else{
    //     li=createElement("li");
    //     li.className="habit_list"
    //     li.innerHTML=`<div class="habits">
    //     <h4>${tsk}</h4>
    //     <h4>completed</h4>
    //     <button class="del" type="button">del</button>
    // </div>`
    // let del=document.getElementsByClassName("del").addEventListener("click",(e)=>{
    //     prnt=e.target.parentElement.parentElement
    //     prnt.remove()
    // })
    // ul.appendChild(li)

    // }

// }
i=0;
add_t.addEventListener("click",()=>{
    
    if(tsk.value==""){
        alert("enter task")
    }
    else{
        console.log(tsk.value)
        const li = document.createElement("li");
        li.className="habit_list"
        li.innerHTML=`<div class="habits">
        <h4>${tsk.value}</h4>
        <h4>completed</h4>
        <button class="del" type="button">del</button>
    </div>`
    ul.appendChild(li)
    console.log(li)
    let del=document.getElementsByClassName("del")[i]
    del.addEventListener("click",(e)=>{
       let prnt=e.target.parentElement.parentElement
        console.log(prnt)
        prnt.remove()
    })
    i++;

    } 
})
let del=document.getElementsByClassName("del")
del.addEventListener("click",(e)=>{
   let prnt=e.target.parentElement.parentElement
    console.log(prnt)
    prnt.remove()
})

