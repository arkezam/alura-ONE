//queda
function encriptar(cadena) {
  var decrypt = ["a", "e", "i", "o", "u"];
  var encrypt = ["ai", "enter", "imes", "ober", "ufat"];
  var res = "";
  var a = "";
  var bandera = false
  for (let i = 0; i < cadena.length; i++) {
    for (let j = 0; j < decrypt.length; j++) {
      if (cadena[i] == decrypt[j]) {  //h=a, h=e.. n==u
        res = res + encrypt[j];       //
        bandera = true
      }

    }
      res = res + a
  }

  return res;
}
//queda
function desencript(cadena) {
  var decrypt = ["a", "e", "i", "o", "u"];

  var encrypt = ["ai", "enter", "imes", "ober", "ufat"];

  var res = "";
  for (let i = 0; i < cadena.length; i++) {
    for (let j = 0; j < encrypt.length; j++) {
      if (cadena[i] == encrypt[j]) {
        
        res = res + decrypt[j];

      }
    }
    res = res + cadena[i];
  }

  return res;
}
//console.log(encriptar("bienvenidos estudiantes"));

console.log(encriptar("hola como estan"));
// baiimesnvenidobers estufatdienterntes
