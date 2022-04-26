console.log("working....")

console.log(2|3);
console.log(2&3);
console.log(2^3);
console.log(2<<3);
console.log(2>>3);



let x = 5;
let y = 6;
x > y ? x ++ :x -- ; 
console.log(x);

// if can be used all alone but else cant be

// let r = 5;
// if(r>6){
// console.log(r);
// }
// else{
//     console.log( ++r);
// }


let r = 5;
if(r>6){
console.log(r);
}
else if (r==5){
    console.log("value of r is 5");
}
else{
console.log("vale of r is not 5");
}

let number = 3;
switch (number){
    case 1:
        console.log("i am one");
        break;
        case 2:
            console.log("i am two");
            break;
             case 3:
            console.log("i am three");
            break;
            case 4:
                console.log("i am four");
                break;
        default:
            console.log("i am default");
            break;

}

