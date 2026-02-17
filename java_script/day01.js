// // //learnning js in built function.
// // // unshift()
// // // let arr = [4,5];
// // // arr.unshift(1,2,4);
// // // console.log(arr); // [1,2,3]
// // //map()
// // // let arr = [1,2,3];
// // // let result = arr.map(x => 2 ** x);
// // // console.log(result); 
// // //filter()
// // // let arr = [1,2,3,4];
// // // let result = arr.filter(x => x%2==0);
// // // console.log(result); 
// // //reduce
// // // let arr = [1,2,3];
// // // let sum = arr.reduce((acc,x) => acc + x, 0);
// // // console.log(sum); // 6
// // // let nums = [1, 2, 3, 4, 5, 6];

// // // let sumEven = nums.reduce((acc, curr) => {
// // //     if (curr % 2 === 0) {
// // //         acc += curr;
// // //     } else {
// // //         acc += 0;
// // //     }
// // //     return acc;
// // // }, 0);

// // // console.log(sumEven); // 12
// // //forEach()
// // // let arr = [1,2,3];
// // // let arr2=[];
// // // arr.forEach(x =>arr2.push(x));
// // // console.log(arr2)
// // //find
// // // let arr = [1,2,3];
// // // let result = arr.find(x => x > 1);
// // // console.log(result); // 2
// // // let arr = [1,2,3];
// // // let result = arr.find(x => x > 4);
// // // if(result==undefined){
// // //     console.log('not found')
// // // }
// // // else{
// // //     console.log(result);

// // // }
// // //find index
// // // let arr = [1,2,3];
// // // let index = arr.findIndex(x => x > 4);
// // // console.log(index); // 1
// // //returns -1 if not found
// // //includes()
// // // let arr = [1,2,3];
// // // console.log(arr.includes(2)); // true
// // // sclice
// // // let arr = [0,1,2,3,4];
// // // console.log(arr.slice(1,3)); 
// // //splice()
// // // let arr = [0,1,2,3,4,5,6,7,8];
// // // arr.splice(2,0,9);
// // // console.log(arr); // [1,3]





// // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // //practice
// // function largest_n(arr,n){
// //      let arrr=[];
// //      arrr =arr;
// //      let nn=0
// //      let max=arr[0];
// //      let ii=0;
// //     for(let k=0;k<n;k++){
// //         ii=0;
// //         max=arrr[0];
// //         nn=arr.length;
// //         np=true;
// //         while(np){
// //         }
// //        for(let i=0;i<nn;i++){
// //         if(max<arrr[i]){
// //             max=arrr[i];
// //             ii=i;
           
// //         }
       
       

// //        }
// //         if(k!=n-1){
// //         arrr[ii]=-Infinity;
// //          }
       
// //     }
// //     return arrr[ii]
// // }
// // arrr=[-1,-2,-5,-7,]
// // console.log(largest_n(arrr,2))


// // Q2
// function left_rot(arr,n){
//     let arr2=[];
//     for(i=0;i<arr.length;i++){
//         arr2.push(arr2[i])
//     }
//     for(i=0;i<n;i++){
//         arr.shift();
//         arr[n-1]=arr2[i]
//     }
// }
// a=[1,2,3,4,5]
// left_rot(a,1)
// console.log(a)
// right shift ,left shift by two position





