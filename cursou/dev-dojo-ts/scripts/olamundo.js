/*Created by artstar10 on 12/02/2022*/
var p = document.createElement('p');
var ola = "Tipo de Valor - string";
p.textContent = ola;
document.body.appendChild(p);
var num = 10;
var bool = true;
var str = "artstar10";
var str2 = "uma  mensagem";
var str3 = "".concat(str2, " to artstar10");
console.log(str3);
function func() { }
if (bool !== null) { }
if (bool !== undefined) { }
if (bool) {
    var i = void 0;
    for (i = 0; i < 3; i++) {
        // console.log(i);
    }
}
// console.log("value of " +i);
var lista = [1, 2, 3,];
var list2 = [1, 2, 3];
var tuple;
// tuple = [22, 'arthur']; aqui dá erro pois os valores foram setados invertidos
tuple = ['arthur', 22];
console.log(tuple[0].toLocaleLowerCase());
// console.log(tuple[1]);
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
})(Day || (Day = {})); // Enumerações serve para trabalhar com valores/posicoes utilizando numeros
var day = Day.MONDAY;
// console.log(`day: ${day} ${Day.TUESDAY} ${Day.WEDNESDAY}` ); // SAÍDA: ENUM
// console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]}` );
// console.log(true === 1);
// function add(v1:number,v2:number,v3?:number): number{//não é obrigatório passar v3? no parâmetro pois ele é opcional
//     if(v3 !== undefined)
//     return v1+v2+v3;
//     return v1+v2;
// }
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log("add ".concat(add(1, 2)));
console.log("add ".concat(add('1', 2)));
