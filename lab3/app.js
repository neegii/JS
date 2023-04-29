//if statement // 
//switch(huvisagch){
    //case 1:
        //code
        //break;
    //case 3:
        //code
        //break;
    //default:
        //code
        //break;
//}

//var day="Monday";
//switch(day){
    //case "monday":
        //console.log(1 + "monday")
//}
var a, b, operator;
a= +prompt("Ta too oruulna uu")
operator = prompt("Ta +,-,*,/ temdegtuudees songono uu");
b= +prompt("Ta too oruulna uu")
switch(operator){
    case "+":
        alert(a + "+" + b + "=" + (a+b));
        break;
    case "-":
        alert(a + "-" + b + "=" +(a-b));
        break;
    case "*":
        alert(a + "*" + b + "=" + (a*b));
        break;
    case "/":
        alert(a + "/" + b + "=" + (a/b));
        break;   
}
