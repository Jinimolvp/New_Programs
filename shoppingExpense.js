 let shoppingExpense = (details) => {
	let total = 0;
	details.map((value,id) => {
		/* To calculate total amount*/
		 total += parseInt(value.qty) * parseInt(value.price);
	});
	console.log("Total Expense is ",total)
	
};

let details = [
				{'name' : 'egg','qty':2,'price' :10},
				{'name' : 'Chocolates','qty':10,'price' :60},
				{'name' : 'pen','qty':1,'price' :10},
				{'name' : 'bread','qty':1,'price' :30},
				{'name' : 'jam','qty':1,'price' :25},
			];
let extDetails = [
	{'name' : 'milk','qty':1,'price' :25},
	{'name' : 'pencil','qty':2,'price' :5},
	{'name' : 'biscuit','qty':1,'price' :20},
	{'name' : 'toothpaste','qty':1,'price' :30},
	{'name' : 'icecream','qty':10,'price' :15},
];
shoppingExpense(details);
/* To check with different data*/
//shoppingExpense(extDetails);