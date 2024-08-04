// write code to print the name of the user in the data
const users=[
    {
        id:1,
        name:"Ajay",
        isActive: true,
        age:20
    },
    {
        id:2,
        name:"Vijay",
        isActive: false,
        age:30
    },
    {
        id:3,
        name:"Sanjay",
        isActive: true,
        age:40
    },
    {
        id:4,
        name:"Raj",
        isActive: false,
        age:50
    },
];
method 1
for(let i=0;i<users.length;i++){
console.log(users[i].name);
}
method 2
users.forEach((user)=>{
    console.log(user.name);
    
});

