
function squareSum(s){

  var  a=[s];
  var decrypt = ["a","e","i","o","u"]

  var encrypt = ["enter","imes","ai","ober","ufat"]

 
  for (let i = 0; i < a.length; i++) {
      
   a[i] = s.replaceAll(decrypt[i],encrypt[i])

   
  }
  return a.join();

  }
  
  console.log(squareSum("Helao World!!!!"));