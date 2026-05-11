let p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("p1 executed")
        // resolve()
    },10000)
}
)
p1.then(function(){
    console.log("p1 resolve executed");
    
})