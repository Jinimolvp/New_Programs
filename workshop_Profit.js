 let getTotalProfit = (details) => {
	let totalExpense = 0;
	let totalCollectedAmt = 0;
	let totalProfit = 0;
	let totalExtras = 0;
	details.map((value,id) => {
		/* To calculate total amount*/
		 totalExtras += (value.serviceCharge - value.actualCost) * value.numberOfVehicles;
		 totalCollectedAmt += value.serviceCharge * value.numberOfVehicles;
	});
	const total = totalCollectedAmt - totalExtras;
	console.log("Total Collected Amount is", totalCollectedAmt);
	console.log("Total Expense is", total);
	console.log("Total Profit  is ",totalExtras);
	
};

let vehicleDetails = [
				{'name' : 'Creta','serviceCharge':500,'actualCost' : 350,'numberOfVehicles' : 3},
				{'name' : 'Duster','serviceCharge':600,'actualCost' : 400,'numberOfVehicles' : 1},
				{'name' : 'Pulsor','serviceCharge':100,'actualCost' : 50,'numberOfVehicles' : 5},
				{'name' : 'Honda-Active','serviceCharge':100,'actualCost' : 50,'numberOfVehicles' : 1},
				{'name' : 'i20','serviceCharge':500,'actualCost' : 250,'numberOfVehicles' : 4},
				{'name' : 'Lory','serviceCharge':1000,'actualCost' : 700,'numberOfVehicles' : 5},
				{'name' : 'Auto','serviceCharge':300,'actualCost' : 100,'numberOfVehicles' : 2},
			];

getTotalProfit(vehicleDetails);
