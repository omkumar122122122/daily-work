//solving arr problems
//left shift n element
function left_shift(arr,n){
    let a;
    n=n%arr.length
    for(nn=0;nn<n;nn++){
    a=arr[0];
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=a;
}
}
let app=[-1,4,8,5,7,5,9,6,5,6,7,4,0,0,0,2,5,5,5,8,4,8,9,2,4,5,5,2,4,14,8,-2,-3,-4,-5,-6,-7,-8,-9,-4,-5,-8,-2,-1,-3,-1,7,4,-1,-28];
// left_shift(app,3);
// console.log(app);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// right shift
function right_shift(arr,n){
    n=n%arr.length
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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
                if(outlarge==-Infinity){
                    return`there is no ${n}th smallest nn.`;
                }
                else{
                return outlarge;
                }
            }
        }
    }
}
// console.log(nth_largest(app,15))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function nth_smallest(arr,n){
    let largen=Infinity;
    let outlarge=Infinity;
    for(k=0;k<n;k++){
        if(k==0){
            for(i=0;i<arr.length;i++){
                if(arr[i]<largen){
                    largen=arr[i];
                }
            }
            if(n==1){
                return largen;
            }
        }
        else{
            for(i=0;i<arr.length;i++){
                if(arr[i]<outlarge&&arr[i]>largen){
                    outlarge=arr[i];
                }
            }
            if(k!=n-1){
                largen=outlarge;
                outlarge=Infinity;
            }
            else{
                if(outlarge==Infinity){
                    return`there is no ${n}th smallest nn.`;
                }
                else{
                return outlarge;}
            }
        }
    }
}
// console.log(nth_smallest(app,12))
// let app=[-1,-2,-3,-4,-5,-6,-7,-8,-9,-4,-5,-8,-2,-1,-3,-1,7,8];

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// left shift by push and shift
function l_shift(arr,n){
    n%=arr.length;
    let a;
    for(i=0;i<n;i++){
        a=arr.shift();
        arr.push(a);
    }
}
// l_shift(app,4)
// console.log(app)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//remove duplicate ement  manualy
function rmv_dupli(arr){
    let a=[];
    let ia=1
    a[0]=arr[0];
    let b=true;
    for(k=0;k<arr.length;k++){
        b=true;
        for(i=0;i<a.length;i++){
            if(arr[k]==a[i]){
                b=false;  
            }

        }
        if(b==true){
            a[ia]=(arr[k])
            ia++;
        }
    }
    return a;
}
// rmv_dupli(app)
// console.log(rmv_dupli(app))

// let app=[-1,4,8,5,7,5,9,6,5,6,7,4,0,0,0,2,5,5,5,8,,8,9,2,4,5,5,2,14,8,-2,-3,-4,-5,-6,-7,-8,-9,-4,-5,-8,-2,-1,-3,-1,7,,-1,-28];


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//longest consecutive sequence in an array.

function return_longest_cons(arr){
    let l=0,ml=0,mi=0,ci=0;
    for(i=0;i<arr.length;i++){
        if((arr[i]+1)==arr[i+1]){
            l++;
        }
        else{
            if(ml<l){
                ml=l+1;
                mi=ci;
            }
            l=0;
            ci=i+1;
            // console.log(ml,ci)
        }
    }
    for(i=mi;i<mi+ml;i++){
        console.log(arr[i]);
    }
}
arp=[1,2,35,8,9,10,11,12,5,8,6,7,8,9,10,11,12,13]
return_longest_cons(arp);