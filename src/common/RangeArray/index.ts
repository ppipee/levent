const RangeArray = (start: number, end: number) =>
	Array(end - start)
		.fill(0)
		.map((val, index) => index + start)

export default RangeArray
