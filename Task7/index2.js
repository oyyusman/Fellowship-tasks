var biblography='My name is Muhammad Usman. I am student of Computer Science';
console.log(biblography);
var About={
    name:'usman',
    age:'20',
    subject:'cs',
    university:'comsats'

}
console.log('My name is',About.name ,'My age is:' ,About.age , 'My major is' ,About.subject , 'I studied in' , About.university);
var oj=JSON.stringify(About);
console.log(oj);
console.log('The size of object:' + Object.keys(About).length);
if(About.age>20){
    console.log('He is Teenager');
    
}
else{
    console.log('He is Mature')
    
}

// part 7
var student=[{
    name:'usman',
    age:'20',
    subject:'cs',
    university:'comsats'

},
{
    name:'Muneeb',
    age:'20',
    subject:'SE',
    university:'NUML'
},
{
    name:'Naeem',
    age:'25',
    subject:'Bioinformatics',
    university:'Pieas'
}]
var myJson=JSON.stringify(student);
for(let i=0;i<student.length;i++){
    console.log(student[i]);
}
