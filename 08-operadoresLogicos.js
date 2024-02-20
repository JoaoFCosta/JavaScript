var manha = true;
var sono = true;

console.log("-------------------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

sono = false
console.log("-------------------------------------");
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

manha = false
console.log("-------------------------------------");
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);