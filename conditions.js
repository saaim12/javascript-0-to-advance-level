var temp=10;
// if (temp<20){
//     console.log("It is cold");
// }else if(temp<30){
//     console.log("It is cool");
// }else{
//     console.log("It is hot");
// }
if (temp=="10"){
    console.log("It is cold");

}
else{
    console.log("It is not cold");
}
//these are ternary operators
var temp=10;
temp>20?console.log("It is hot"):console.log("It is not hot");
//these are logical operators
var temp=10;
temp>20 && temp<30?console.log("It is hot"):console.log("It is not hot");
temp>20 || temp<30?console.log("It is hot"):console.log("It is not hot");
temp>20 || temp<30 && temp>40?console.log("It is hot"):console.log("It is not hot");

console.log("\n\n");


switch(temp){
    case 10:
        console.log("It is cold");
        break;
    case 20:
        console.log("It is cool");
        break;
    default:
        console.log("It is hot");
        break;
}