// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 2', () => {
	describe('Function - divide', () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it('should be defined', () => {
			expect(divide).toBeDefined()
		})
		it('should take two arguments', () => {
			expect(divide.length).toBe(2)
		})
		it('should return the division of the two numbers', () => {
			expect(divide(1, 2)).toEqual(0.5)
			expect(divide(4, 2)).toEqual(2)
			expect(divide(99, 3)).toEqual(33)
		})
		it('should return undefined if any of the arguments is not provided', () => {
			expect(divide(1)).toEqual(undefined)
			expect(divide()).toEqual(undefined)
			expect(divide(undefined, 1)).toEqual(undefined)
		})
	})
})

// describe('Iteration 1 | Getting Started', () => {
// 	describe('Function add', () => {
// 		it('should be defined', () => {
// 			expect(divide).toBeDefined()
// 		})

// 		it('should take two arguments', () => {
// 			expect(divide.length).toBe(2)
// 		})

// 		it('should return the sum of the two numbers', () => {
// 			expect(divide(1, 2)).toEqual(3)
// 			expect(divide(3, 4)).toEqual(7)
// 			expect(divide(100, 47)).toEqual(147)
// 		})

// 		it('should return undefined if any of the arguments is not provided', () => {
// 			expect(divide(1)).toEqual(undefined)
// 			expect(divide()).toEqual(undefined)
// 			expect(divide(undefined, 1)).toEqual(undefined)
// 		})
// 		it('should return undefined if any of the two arguments is not a number', () => {
// 			expect(divide('1', 2)).toEqual(undefined)
// 			expect(divide(1, '2')).toEqual(undefined)
// 			expect(divide('hello', 'world')).toEqual(undefined)
// 			expect(divide(true, 5)).toEqual(undefined)
// 			expect(divide(null, 3)).toEqual(undefined)
// 		})
// 	})
// })
