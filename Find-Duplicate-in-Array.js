const array = [0,12,24,36,50,50,50,1,1,1]

const duplicate = array.filter((currentElement,CurrentIndex, givenArray)=>givenArray.indexOf(currentElement)!==CurrentIndex)
document.write(duplicate)
