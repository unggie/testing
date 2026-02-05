function minMax(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 0; i <= array.length - 1; i++) {
        min = (min <= array[i]) ? min: array[i];
        max = (max >= array[i]) ? max: array[i];
    }

    return {min, max}
}
function averageValue(array) {
    const sum = array.reduce((total, num) => {
        return total + num;
    }, 0);
    return (sum / array.length);
}

function arrayLength(array) {
    return array.length;
}


export function analyzeArray(array) {
    const average = averageValue(array);
    const {min, max} = minMax(array);
    const length = arrayLength(array); 
    return {average, min, max, length}
}
const object = analyzeArray([1, 8,3,4,2,6]);

console.log(object);

