/*Created by artstar10 on 12/02/2022*/
let p = document.createElement('p');
let ola:string= "Tipo de Valor - string";
p.textContent = ola;
document.body.appendChild(p);

let num : number = 10;
let bool: boolean = true;
let str: string= "artstar10";
let str2: string= "uma  mensagem";
let str3: string= `${str2} to artstar10`;
console.log(str3);
function func():void{}
if(bool !== null){}
if(bool !== undefined){}

if(bool){
    let i:number;
    for(i = 0; i < 3; i++){
        // console.log(i);
    }
}
// console.log("value of " +i);
let lista: number[] = [1,2,3,];
let list2: Array<number> = [1,2,3];

let tuple:[string,number]; 
// tuple = [22, 'arthur']; aqui dá erro pois os valores foram setados invertidos
tuple = ['arthur', 22];
console.log(tuple[0].toLocaleLowerCase());
// console.log(tuple[1]);
enum Day{MONDAY, TUESDAY, WEDNESDAY} // Enumerações serve para trabalhar com valores/posicoes utilizando numeros
let day: Day = Day.MONDAY;
// console.log(`day: ${day} ${Day.TUESDAY} ${Day.WEDNESDAY}` ); // SAÍDA: ENUM
// console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]}` );

// console.log(true === 1);

// function add(v1:number,v2:number,v3?:number): number{//não é obrigatório passar v3? no parâmetro pois ele é opcional
//     if(v3 !== undefined)
//     return v1+v2+v3;
//     return v1+v2;
// }

function add(v1:any,v2:any,v3?:any): any{//não é obrigatório passar v3? no parâmetro pois ele é opcional
    if(v3 !== undefined)
    return v1+v2+v3;
    return v1+v2;
}

console.log(`add ${add(1,2)}`);
console.log(`add ${add('1',2)}`);

let var1: any = 'valor desconhecido a ser enviado pelo usuário';

// let example: number = undefined;
