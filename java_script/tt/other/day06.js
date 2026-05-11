let alpha=document.getElementById("alpha")
alpha.style.backgroundColor="red"
alpha.children[0].style.backgroundColor="green"
let p1=document.getElementById("alpha")
p1.style.backgroundColor="pink"
p1.addEventListener ("click",function(e){
    let ap=e.target;
    console.log(ap);
    ap.remove()
})
let l=document.getElementById("link")
l.addEventListener("click",function(e){
    alert("hiii")
    e.preventDefault();
},true)
/*add evnt listioner there are two modes in event listioner bubling up and captioring mode
and to stop prppagation use key word stop propagation
use prevent default to change its defaoult setung */

