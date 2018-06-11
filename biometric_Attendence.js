let attendence = (employee) => {
	let expectedName = 'Jini';
	let checkNum = 'PD26';
	employee.map((value,idx) => {
       if(value.empName === expectedName && value.ID === checkNum) { 
       	console.log(value.empName ,"Is present");
       } else {
       	console.log("No one exist with this ID");
       }

	});
}
let empDetails = [
				 {'empName': 'Jini', 'ID' :'PD26'}, 
				 {'empName': 'Arya', 'ID' :'PD30'},
				 {'empName': 'Anu', 'ID' :'PD34'},
				 {'empName': 'Nidheesh', 'ID' :'PD19'},
				 {'empName': 'Tarun', 'ID' :'PD09'}
				 ];
attendence(empDetails);