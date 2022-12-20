const rps = (p1, p2) => {
  
  let item = ["scissors" , "paper" , "rock"];
 let resultado = p1==p2 ? "draw":
  (p1==item[0] && p2==item[1])?1:
  (p1==item[0] && p2==item[2])?2:
  (p1==item[1] && p2==item[0])?2:
  (p1==item[1] && p2==item[2])?1:
  (p1==item[2] && p2==item[0])?1:
  (p1==item[2] && p2==item[0])?1:2;
  
  return resultado;
};

console.log(rps("paper","scissors"));