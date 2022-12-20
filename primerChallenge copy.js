
function encriptar(s){

  var decrypt = s.match(/[aeiou]/gi);

  var encrypt = ["enter","imes","ai","ober","ufat"];

  for (let i = 0; i < s.length; i++) {

    s = s.replace(decrypt[i],encrypt[i])

    
  }

  return s 

}
   
  console.log(encriptar("hola como estas"));
 // baiimesnvenidobers estufatdienterntes