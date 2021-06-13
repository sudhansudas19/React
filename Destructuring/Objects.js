let person={
    name:'Steve',
    country:'Los Angeles',
    job:'Avenger'
}

// let name=person.name;
// let country=person['country'];
// let job=country.job;

// console.log(name);
// console.log(country);
// console.log(job);

// //Destructuring
// let {name,country,job}=person;
// console.log(name);
// console.log(country);
// console.log(job);

///undefined && default values

// let{name,country,job='jobs',anything='default value'}=person;
// console.log(name);
// console.log(country);
// console.log(job);
// console.log(anything);


//Alias---create own name
let{name:a,country:b,job:c}=person;
console.log(a);
console.log(b);
console.log(c);

