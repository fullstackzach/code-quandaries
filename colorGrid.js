function mostCommonAdjacent(matrix) {
	let maxCount = 0
	let maxColor
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix.length; col++) {
			let count = countAdjacent(row, col, matrix)
			if (count > maxCount) {
				maxCount = count
				maxColor = matrix[row][col]
			}
        }
	}
	return [maxColor, maxCount]
}

function countAdjacent(row, col, matrix, visited = new Set(), currentColor = matrix[row][col]) {
	if (row > matrix.length - 1 || col > matrix[row].length - 1 || visited.has(`${row}${col}`)) return 0
	if (currentColor === matrix[row][col]) {
		visited.add(`${row}${col}`)
		return countAdjacent(row + 1, col, matrix, visited, currentColor) +
               countAdjacent(row, col + 1, matrix, visited, currentColor) + 1
	} else {
		return 0;
	}
}

// purple
let matrix = [
	['red', 'red', 'red', 'purp', 'purp'],
	['red', 'green', 'red', 'purp', 'purp'],
	['purp', 'blue', 'yellow', 'purp', 'purp'],
	['blue', 'blue', 'blue', 'blue', 'brown']
]

// red
let matrix2 = [
	['red', 'red', 'red', 'purp', 'purp'],
	['red', 'green', 'red', 'purp', 'purp'],
	['purp', 'blue', 'red', 'purp', 'purp'],
	['blue', 'blue', 'blue', 'blue', 'brown']
]

// blue
let matrix3 = [
    ['red', 'red', 'red', 'purp', 'purp'],
	['red', 'red', 'red', 'purp', 'purp'],
	['red', 'green', 'red', 'purp', 'purp'],
	['purp', 'blue', 'red', 'purp', 'purp'],
	['blue', 'blue', 'blue', 'blue', 'brown'],
    ['blue', 'blue', 'blue', 'blue', 'brown'],
    ['blue', 'blue', 'blue', 'blue', 'brown']
]

//
let matrix4 = [ [ 1, 4, 4, 4, 4, 3, 3, 1 ],
  [ 2, 1, 1, 4, 3, 3, 1, 1 ],
[ 3, 2, 1, 1, 2, 3, 2, 1 ],
[ 3, 3, 2, 1, 2, 2, 2, 2 ],
[ 3, 1, 3, 1, 1, 4, 4, 4 ],
[ 1, 1, 3, 1, 1, 4, 4, 4 ] ]

console.log(mostCommonAdjacent(matrix))
console.log(mostCommonAdjacent(matrix2))
console.log(mostCommonAdjacent(matrix3))
console.log(mostCommonAdjacent(matrix4))
