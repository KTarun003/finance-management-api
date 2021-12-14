module.exports = {
	dashboard : async () => {
		return {
			totalLoans: 30,
			totalPrinciple: 50000,
			totalInterest: 5000,
			previousLoans: 10,
			previousPrinciple: 25000,
			previousInterest: 2500,
			currentLoans: 20,
			currentPrinciple: 25000,
			currentInterest: 2500,
			todayLoans: [
				{
					id: "100",
					name: "Sandra",
					asset: "Phone",
					idate: new Date(2021, 8, 30).toString(),
					rdate: new Date(2021, 9, 31).toString(),
					principle: 10000.00,
					interest: 1000.00,
					rate: 10,
					amount: 11000.00,
					status: "Not Paid",
					period: 30
				}
			],
			tomorrowLoans: [
				{
					id: "200",
					name: "Sandra",
					asset: "Phone",
					idate: new Date(2021, 8, 30).toString(),
					rdate: new Date(2021, 9, 31).toString(),
					principle: 20000.00,
					interest: 2000.00,
					rate: 10,
					amount: 22000.00,
					status: "Not Paid",
					period: 30
				}
			]
		}
	}
}