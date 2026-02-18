//string
// let n="ihdbci";
// let n2=`nuxi`
// let n3="123"
// let n4=123;
// // console.log(typeof(n))
// n[0]=4;
// console.log(n)
// // console.log(n3+n4)
// n.replace("i","p")
// console.log(n.replace("o","p"))
// consolReape.log(n.toUpperCase())
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
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
                        console.log(s2)
                    }
                    s2="";
                }
            }
            s1="";
        }
    }
}
let s1="hh uj iolp iioopp oo pp";
let s2="hh uhdbu iolp jhddh hbxw oo pp";
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
let s23="rtrtee rteee treeeee";
// rtn_wrd_max_vovl(s23)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Count Occurrence of Each Word


