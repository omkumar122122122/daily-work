// let e_name="mr x";
// const e_id=4255;
// let department="it";
// console.log(`employee ${e_name} works in ${department} department`);
// let s_mail="     student@ckuv445   "
// console.log(s_mail.trim());

// let p_name="gaming laptop";
// console.log(p_name.includes("laptop"));

// let cpn="save20";
// console.log(cpn.toUpperCase());

// let names="aman priya anjali";
// let arr = names.split(" ")
// console.log(arr)
// let link="https\\qwhbduoQ;"
// let new_link="https\\qwhbd77777;"
// link=new_link;
// console.log(link)


async function getPosts() {



const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

const data=await response.json();

console.log(data);
}
getPosts();