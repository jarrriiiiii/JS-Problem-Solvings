const myarray = [2,8,91,700]


const largestValue = (givenArray)=>{
    bigValue = Math.max(...givenArray)
    bigValueIndex = givenArray.indexOf(bigValue)
    givenArray.splice(bigValueIndex,1)
    SecondBigValue = Math.max(...givenArray)
    return SecondBigValue
}


document.write(largestValue(myarray))




// Find the largest elements from the Array
// then find its index
// then splice or delete the index of the LARGEST Number
// then again find the largest elements
// in this way, we can find the second highest