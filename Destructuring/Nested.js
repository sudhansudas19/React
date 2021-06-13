const user={
    id:229,
    name:'Sudhansu',
    age:21,
    education:{
        degree:'Masters',
        school:{
            name:"Durga",
            location:'Pitampura'
        }
    }
}

// const{name}=user;
// console.log(name);


const{education:{school:{location}}}=user;
console.log(location);