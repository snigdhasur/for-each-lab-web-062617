function iterativeLog(arr) {
 arr.forEach((element, index, array)=> 
 	{console.log(`${index}: ${element}`)} )
}

function iterate(callback){
	let array = [1,2,3,4,5,6]
	array.forEach(callback)
	return array 
}

function doToArray(array, callback) {
	array.forEach(callback)
}