//const students = [
        //{name: "John", age: 20, downloads: 5},
        //{name: "Jane", age: 22, downloads: 3},
        //{name: "Mike", age: 21, downloads: 7}];
        //const topStudentsAge = students.filter(s => s.age > 20).map(s => s.name).join(", ");
        //console.log(topStudentsAge);
        
//const student = {
   // name: "Aisha",
    //dept: "cse",
    //marks: 92,
    //greet() {
    //    return "Hi I'm " + this.name + " and I am from the department of" + this.dept + " I'm Scored" +this.marks; 
       
//}
//};


//console.log(student.greet()); 

// 1. const prices = [120,60,899];
//console.log(prices.reduce((a,b) => a + b, 0));

//2. const students=[
     //   {name : "swathi", marks:90},
       // {name : "divya", marks:94},
       // {name : "swetha", marks:80},
//];
//console.log(students.find((s)=>s.name =="swathi"));

//function createGreeter(name) {
   // const greeting = "hello"; 
   // return function() {
        //console.log(`${greeting} ${name}`);
   // };
//}

//const sayHelloAsha = createGreeter("asha");

//sayHelloAsha(); 

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();