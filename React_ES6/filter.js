//map-> when we have to add some manipulation on top of element
//filter-> when we have to satisfy some conditon on top of element then we go for filter function
let words=['spray','limit','elite','politeness','destruction'];

// let nwords=[];
// for(let i=0;i<words.length;i++){
//     if(words[i].length>6){
//         nwords.push(words[i]);
//     }
// }
// console.log(nwords);

let nwords=words.filter(function(el){
    return el.length>6;
})
console.log(nwords);
