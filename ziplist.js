let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];

function zipList(array1, array2){
  let returnArray = [];
  let arrayValTrack = 0;
  for(let i = 0; i < array1.length; i++){
    returnArray[arrayValTrack] = array1[i];
    arrayValTrack++;
    returnArray[arrayValTrack] = array2[i];
    arrayValTrack++;
  }
  return returnArray;
}

console.log(zipList(array1, array2));

function zipListTheSimpleWay(array1, array2){
  let combinedArray = _.flatten(_.zip(array1, array2));
  return combinedArray;
}

console.log(zipListTheSimpleWay(array1, array2))