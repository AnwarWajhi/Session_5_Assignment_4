var employees = [employee1, employee2, employee3, employee4, employee5];

var employee1 = { 
	name: "Adam", 
	age: 21,
	salary: 8000, 
	address: { 
		city: "Los Angeles", 
		state: "California", 
		pin: 201001 },
	};
var employee2 = { 
	name: "Bob", 
	age: 25,
	salary: 9000, 
	address: { 
		city: "Chicago", 
		state: "Illinois", 
		pin: 201005 },
	};
var employee3 = { 
	name: "Christy", 
	age: 22,
	salary: 8000, 
	address: { 
		city: "Houstan", 
		state: "Texas", 
		pin: 201003 },
	};
var employee4 = { 
	name: "David", 
	age: 30,
	salary: 10000, 
	address: { 
		city: "Colombus", 
		state: "Ohio", 
		pin: 201010 },
	};

var employee5 = { 
	name: "Fred", 
	age: 24,
	salary: 8200, 
	address: { 
		city: "Vegas", 
		state: "Nevada", 
		pin: 201007 },
	};


console.log("Name :" + employees[2].name);
console.log("Age :"+ employees[2].age);
console.log("Salary :"+ employees[2].salary);
console.log("Address :"+ employees[2].address.city + ", " + employees[2].address.state + " - " + employees[2].address.pin);