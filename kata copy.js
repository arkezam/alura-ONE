
function squareSum(numbers){
    let suma = 0;
    let result = []
    for(let i = 0; i < numbers.length ; i ++){
      result.push(numbers[i]);
      suma = suma+ result[i];
    }
    return suma;
  }
  
  console.log(squareSum([-1]));