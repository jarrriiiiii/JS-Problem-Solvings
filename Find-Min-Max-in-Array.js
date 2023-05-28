const myArray = [8500,12000,190000,55000,355000,1285250]

function max (givenArray){

    return givenArray.reduce(function(previousValue, CurrentValue){
        return previousValue>CurrentValue?previousValue:CurrentValue //condition ? valueIfTrue : valueIfFalse;
    })
}

function min (givenArray){

    return givenArray.reduce(function(previousValue, CurrentValue){
        return previousValue<CurrentValue?previousValue:CurrentValue //condition ? valueIfTrue : valueIfFalse;
    })
}

document.write(max(myArray))

//Another MATH method

const max = (givenArray)=>{
    bigValue = Math.max(...givenArray)
    return bigValue
}