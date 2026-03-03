//learning DOM
/*

*/
// let hero=document.getElementById("alpha");
// let a=hero.innerText;
// hero.innerHTML="h"
// hero.style.color='green'
// let list=document.querySelector('li')
// list.style.color="red"
// hero.style.color='green'


// hero.
// Select an element with id "demo" and add a border to it using JavaScript.
// Select an input field with id "username" and print its value in the console.
// Select a button with id "btn" and disable it.
// let demo=document.getElementById('demo')
// let i=document.getElementById('alpha')
// let j=document.querySelectorAll('li')
// j[0].style.color='red';
// i.innerHTML='nope'
// demo.style.border='2px,solid,black'
// demo.style.padding='2px'
// demo.innerText='hom';
// demo.style.color='blue';
// demo.style.backgroundColor='yellow'
// i.style.color='red'
// j[0].style.backgroundColor='yellow';
// let c=document.getElementById('name')
// let char="om kumar"
// if(char=="om kumar"){
//     demo.style.color='red'
// }
let demo=document.querySelector('#demo')
demo.style.color='red';
let cou=document.querySelector('#cout')
let name=document.querySelector('#name')
document.querySelector('#on').addEventListener("click",()=>{
    let count=0;
    for(i in name.value){
        count++
    }
    console.log(count);
    cou.innerHTML=`hello ${name.value}`;
    if(name.value=="om kumar"){
        demo.style.color='blue';
    }
    else{
        demo.style.color='red';  
    }
})
document.querySelector('#submit').addEventListener("click",()=>{
    let count=0;
    for(i in name.value){
        count++
    }
    console.log(count);
    cou.innerHTML=`hello ${name.value}`;
    if(name.value=="om kumar"){
        demo.style.color='blue';
    }
    else{
        demo.style.color='red';  
    }
})
