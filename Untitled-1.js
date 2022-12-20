function encriptar(s){

  var decrypt = ["e","i","o","u","a"]
  var encrypt = ["enter","imes","ober","ufat","ai"]

  for (let i = 0; i < s.length; i++) {
    s = s.replaceAll(decrypt[i],encrypt[i])
  }
  return s
}

function desencriptar(s){

    var decrypt = ["a","e","i","o","u"]
  
    var encrypt = ["ai","enter","imes","ober","ufat"]
  
    for (let i = 0; i < s.length; i++) {
  
      s = s.replaceAll(encrypt[i],decrypt[i])
      
    }
  
    return s
  
  }
  console.log(encriptar("hola como estan"));
  console.log(desencriptar(encriptar("hola como estan")));
 // baiimesnvenidobers estufatdienterntes
 
//bimesienterenventerenimesidoberos enterestufatudimesiaiantenteres

//bimecadenaienterenventerenimecadenaidoberos enterestufatudimecadenaiaiantenteres