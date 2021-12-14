const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	createUser: async args => {
		try {
			const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

			const user = {
				email: args.userInput.email,
				password: hashedPassword
			};

			return { ...user, password: hashedPassword, _id: 100 };
		} catch (err) {
			throw err;
		}
	},
	login: async ({ email, password }) => {
		const user = {
			id:100,
			email: email,
			password: password
		};
		const token = jwt.sign(
			{ userId: user.id, email: user.email },
			'somesupersecretkey',
			{
				expiresIn: '1h'
			}
		);
		return { userId: user.id, token: token, tokenExpiration: 1 };
	}
};
