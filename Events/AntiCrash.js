process.on("unhandledRejection", (reason, p) => {

	console.log("[ Anti-crash ] Unhadled Rejection/Catch")
	console.log(reason, p)

})

process.on("uncaughtException", (err, origin) => {

	console.log("[ Anti-crash ] Unhadled Rejection/Catch")
	console.log(err, origin)

})

process.on("uncaughtExceptionMonitor", (err, origin) => {

	console.log("[ Anti-crash ] Uncaught Exception/Catch (MONITOR)")
	console.log(err, origin)

})

process.on("multipleResolves", (type, promise, reason) => {

	console.log("[ Anti-crash ] Unhadled Rejection/Catch")
	console.log(type, promise, reason)

}) 