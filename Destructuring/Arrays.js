
let introduction=['Hello','I','am','Sudhansu'];
// let greeting =introduction[0];
// let pronoun=introduction[1];
// let variable=introduction[2];
// console.log(greeting+" "+pronoun+" "+variable);
// greeting='Hola';
// console.log(introduction);

//destructuring
 
// let [greeting,pronoun,variable,name]=introduction;
// console.log(greeting+" "+pronoun+" "+variable+" "+name);

//skipping value
let [greeting,pronoun,,name]=introduction;
console.log(greeting+" "+pronoun+" "+name);


//Default values
let arr=['Howdy'];
let [ab,cd,ef]=arr;
console.log(ab+" "+cd+" "+ef);
///////////////////////
let arr1=['Howdy'];
let [abc='hello',cde='bye',efg='say']=arr1;
console.log(abc+" "+cde+" "+efg);

//swapping value
let a=3;
let b=6;
[a,b]=[b,a];
console.log(a);
console.log(b);

