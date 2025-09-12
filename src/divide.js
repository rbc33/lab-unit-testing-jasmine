function divide(num1, num2) {
	if (!num1 || !num2) return undefined
	let res = 0
	typeof num1 === 'number' && typeof num2 === 'number'
		? (res = num1 / num2)
		: (res = undefined)
	return res
}
