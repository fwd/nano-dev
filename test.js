;(async () => {

	const nano = require('./latest')

	nano.create({ 
	    filename: 'wallet.export', 
	    password: 'password'
	})

	console.log( await nano.receive() )

	console.log( await nano.balance() )

	// setTimeout(() => {
		
	// 	await nano.send({ 
	// 	    to: [ 'nano_1faucet7b6xjyha7m13objpn5ubkquzd6ska8kwopzf1ecbfmn35d1zey3ys' ], 
	// 	    amount: 'all'
	// 	})

	// }, 60000)


})()