
const myArray = [10,50]
const missingValues = []


function findMiss(arr){

const minValue = Math.min(...arr)
const maxValue = Math.max(...arr)

for(let i=minValue; i<maxValue; i++){
    if (arr.indexOf(i)<0){
        missingValues.push(i)
    }
    
}
return (missingValues)
}

findMiss(myArray);
document.write(missingValues)



// make array that contains values on which we have to search for missing values
// make empty where the missing values will go
// make a function that will take array as an argument
// mark the min and max values of array
// set a loop of variable i that will start from min till max
// inside loop, use INDEXOF(i)
// if any value in array matches with 'i' then index will be returned which is greater than 0
// if any value in array DOESNT matches with 'i' then -1 will be returned
// so place a condition, if indexOF<0 then push the 'i' inside the empty array we made