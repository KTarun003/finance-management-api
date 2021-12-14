module.exports = {
	recoveries: async () => {
		return [
			{
				id: "200",
				name: "Sandra",
				date: new Date(2021, 10, 31).toString(),
				recoveryType: "Interest",
				amount: "1500",
			},
			{
				id: "300",
				name: "Sandra",
				date: new Date(2021, 11, 31).toString(),
				recoveryType: "Complete",
				amount: "22000",
			}
		]
	}
}