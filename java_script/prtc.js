let a=[1,5,8,9,65,78,4,8,45,6];
// a.forEach((n,i)=>{
//     console.log(n);
// })

// let b=a.map((n,i)=>{
//     return n-i;
// })
// console.log(b)

// let c=a.filter((ele,i)=>{
//     if(ele%2==0){
//         return ele;
//     }
// })
// console.log(c)
let t=a.reduce((acc,i)=>{
    return acc+i;
})
console.log(t)
