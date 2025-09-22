	// Move all zeroes to the end of an array 
	
	let arr=[0,0,0,0,1,2,3,3,404,0,2]
	
	
	let moveAllZero=(arr)=>{
	    let length1=arr.length-1
	    for(let element of arr){
	        if(element===0){
	            [arr[element],arr[length1]]=[arr[length1-1],arr[element]]
	        }
	    }
	    return arr
	}
	console.log(moveAllZero(arr))