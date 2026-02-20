//practice string


//return non reperting charecter
function rtn_non_rpt(str){
    let isNotRepeating;
    for(i=0;i<str.length;i++){
        isNotRepeating =true;
        for(k=0;k<str.length;k++){
            if(k==i){
                continue;
            }
            else if(str[i]==str[k]){
                isNotRepeating=false;
            }
        }
        if(isNotRepeating){
            console.log(str[i])
        }
    }
}
let s="gghtyyyujiioppplkkkjhho";
// rtn_non_rpt(s)
// let str="mmmm";
// str=str+"a";
// console.log(str)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Check if Two Sentences Have Same Words (Ignore Order)

function rtn_sm_word(str1,str2){
    let s1="",s2="";
    str1+=" ";
    str2+=" ";
    for(i=0;i<str1.length;i++){
        if(str1[i]!=" "){
            s1+=str1[i]
        }
        else{
            for(k=0;k<str2.length;k++){
                if(str2[k]!=" "){
                    s2+=str2[k]
                }
                else{
                    if(s1==s2){
                        // console.log(s2)
                        console.log("true")
                        return ;
                    }
                    s2="";
                }
            }
            s1="";
        }
    }
    console.log("false")
}
let s1="hh uj iolp iioopp oo pp";
let s2="kk";
// rtn_sm_word(s1,s2)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Find Word With Maximum Vowels

function rtn_wrd_max_vovl(str){
    let s="",ms="",mv=0,v=0;
    str+=" "
    for(i=0;i<str.length;i++){
        if(str[i]!=" "){
            s+=str[i];
            if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
                v++;
            }
        }
        else{
            if(mv<v){
                mv=v;
                ms=s
            }
            v=0;
            s="";
        }
    }
    console.log(ms);
}
let s23="rtrtee rteee treeeee iiiiiiooooopl";
// rtn_wrd_max_vovl(s23);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Count Occurrence of Each Word


function rtn_rep_word(str1){
    let s="",ar=[],ar2=[],isnotprint=true,count;
    str1+=" ";
    for(i=0;i<str1.length;i++){
        
        if(str1[i]!=" "){
            s+=str1[i]
        }
        else{
            ar[ar.length]=s;
            s="";
        }
    }
    for(i=0;i<ar.length;i++){
        count=0;
        isnotprint=true;
        for(k=0;k<ar2.length;k++){
            if(ar[i]==ar2[k])
                isnotprint=false;
        }
        if(isnotprint){
            ar2[ar2.length]=ar[i];
            for(j=0;j<ar.length;j++){
                if(ar[i]==ar[j]){
                    count++;
                }

            }
            console.log(ar[i],count)
        }
    }
    
}
s12="aaa jjj jjj jjj aaa aaa jjj jjj apple rohit";
// rtn_rep_word(s12)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Return Second Longest Word

function rtn_2nd_largest(str){
    let s="",ar=[],a,larg=-Infinity,sndlarge=-Infinity,s2="";
    str+=" ";
    for(i=0;i<str.length;i++){
        
        if(str[i]!=" "){
            s+=str[i]
        }
        else{
            ar[ar.length]=s;
            s="";
        }
    }
    // console.log(ar)
    for(i=0;i<ar.length;i++){
        if(ar[i].length>larg){
            larg=ar[i].length;
        }
    }
    // console.log(larg)
    for(i=0;i<ar.length;i++){
        if(ar[i].length<larg && ar[i].length>sndlarge){
            sndlarge=ar[i].length;
            s2=ar[i];
        }
    }

    console.log(s2)
}
let sip="hi hiii hiiii hiiiii hiiiiii hi hi hi omomomomomomom";
// rtn_2nd_largest(sip);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //return nth largest word from array

 function rtn_nth_largest(str,n){
    let s="",ar=[],a,larg=-Infinity,sndlarge=-Infinity,s1="",s2="";
    str+=" ";
    for(i=0;i<str.length;i++){
        
        if(str[i]!=" "){
            s+=str[i]
        }
        else{
            ar[ar.length]=s;
            s="";
        }
    }
    for(i=0;i<ar.length;i++){
        if(ar[i].length>larg){
            larg=ar[i].length;
            s1=ar[i];
        }
    }
    if(n==1){
        console.log(s1,larg)
        return;
    }
    for(k=1;k<n;k++){
        for(i=0;i<ar.length;i++){
        if(ar[i].length<larg && ar[i].length>sndlarge){
            sndlarge=ar[i].length;
            s2=ar[i];
        }
    }
    if(k!=n-1){
        larg=sndlarge;
    sndlarge=-Infinity;
    }
    }
    console.log(s2,sndlarge);
    
 }
 sip="hi hiii hiiii hiiiii hiiiiii hi hi hi omomomomomomom";
 rtn_nth_largest(sip,1)
