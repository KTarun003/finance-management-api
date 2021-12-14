module.exports = {
	loans: async () => {
		return [
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
			},
			{
				id: "200",
				name: "Sandra",
				asset: "Phone",
				idate: new Date(2021, 9, 30).toString(),
				rdate: new Date(2021, 10, 31).toString(),
				principle: 15000.00,
				interest: 1500.00,
				rate: 10,
				amount: 16500.00,
				status: "Interest Paid",
				period: 30
			},
			{
				id: "300",
				name: "Sandra",
				asset: "Phone",
				idate: new Date(2021, 10, 30).toString(),
				rdate: new Date(2021, 11, 31).toString(),
				principle: 20000.00,
				interest: 2000.00,
				rate: 10,
				amount: 22000.00,
				status: "Paid",
				period: 30
			}
		];
	}
}