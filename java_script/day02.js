//solving arr problems
//left shift n element
function left_shift(arr,n){
    let a;
    for(nn=0;nn<n;nn++){
    a=arr[0];
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=a;
}
}
let app=[-1,-2,-3,-4,-5,-6,-7,-8,-9,-4,-5,-8,-2,-1,-3,-1,7,8];
// left_shift(app,3);
// console.log(app);
// right shift
function right_shift(arr,n){
    let a;arr[arr.length-1]
    for(nn=0;nn<n;nn++){
        a=arr[arr.length-1]
    for(i=arr.length-1;i>=0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=a;
}
}
// right_shift(app,2);
// console.log(app);

//finding nth greatest no.
function nth_largest(arr,n){
    let largen=-Infinity;
    let outlarge=-Infinity;
    for(k=0;k<n;k++){
        if(k==0){
            for(i=0;i<arr.length;i++){
                if(arr[i]>largen){
                    largen=arr[i];
                }
            }
            if(n==1){
                return largen;
            }
        }
        else{
            for(i=0;i<arr.length;i++){
                if(arr[i]>outlarge&&arr[i]<largen){
                    outlarge=arr[i];
                }
            }
            if(k!=n-1){
                largen=outlarge;
                outlarge=-Infinity;
            }
            else{
                return outlarge;
            }
        }
    }
}
// console.log(nth_largest(app,5))
