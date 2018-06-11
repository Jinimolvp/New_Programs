let monthlySavings = () => {
	const rent = 6000;
	const tea = 18;
	const Num_Working_Days = 21;
	const salary = 25000;
	const otherExp = 1000;
	let totalExpense;
	let totalSavings;
	/* Total expense in a month */
    totalExpense = (18*22)+6000+1000;
    /* Total savings of a month */
    totalSavings = salary - totalExpense;
    console.log("Total expense in a month "+totalExpense);
    console.log("Total savings in a month "+totalSavings);

}
monthlySavings();
