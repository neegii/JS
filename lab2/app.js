//1. ugugdsun toonii suuliin tsifer-iig hewleh
// prompt(); --> garaas utga avdag function
//var too = +prompt("Ta too oruulna uu");
// suuliin tsifer n 4 uuniig hevleh estoi
//var lastNumber;
//lastNumber = 304 % 10;
//console.log(too + "-nii suuliin tsifer: " + lastNumber);

//2. ugugdsun 2 orontoi toonii tsifruudiin niilberiig olj hewle
// 56 --> 5+6 = 11
//var too = +prompt("ta too oruulna uu");
//var firstNumber, lastNumber;
//lastNumber = too % 10; 
// lastNumberiig olohdoo toogoo 10t huvilaad gargana
// firstnumberiig olohdoo toogoo 10t huvaana
//firstNumber = Math.floor(too / 10);
//console.log(firstNumber + lastNumber);

//console.log(Math.floor(4,156));
//3. garaas sec --> 3 min 20 sec
//var too = +prompt("sec oruulna uu");
//var min, sec;
//min = Math.floor(too / 60);
//sec = too % 60;
//console.log(min, "min" + sec + "sec");



// If statement if --> hervee gsn nuhtsul shalgadag
// if, else
// if, else if
// && and ->2uulaa zaaval ajillah estoi , || or ->blhr ali neg n ajillah estoi
var age = 20;
// == ->tentsuu, >, <, >=, <=, !=-> tentsuu bish
if( age <=18 && age >0 ){
    console.log("ta nasand hureegui bn");
}else if(age < 0 || age == 0){
    console.log("ta nasaa buruu oruulsan bn");
}
else{
    console.log("ta nasand hursen bn");
}

var too = 5;
if(too < 0){
    console.log(too + "bol surug too bna");
}else{
    console.log(too + "bol eyreg too baina");
}

// tegsh uu sondgoiyu gedgiig oldog

if(too%2 == 0){
    console.log(too + "tegsh too");
}else{
    console.log(too + " bol sondgoi too");
}

// 100-aas ih baival 5-d urjuuley, 100-aas baga bval 5-d huvaah programm bich

var too = 200
if(too < 100){
    console.log(too /5);
}else{
    console.log(too *5);
}
// toog 5 bolon 7-d zereg huvaagdah uguig shalga
// 35
var to = 35
if(to % 5 == 0 && to % 7 == 0){
    console.log("huvaagdana");
}else{
    console.log("huvaagdahgui")
}

// 2 toonii ih bagiig olno uu?
// 25 89

var ih =25; baga=89;
if(ih<baga){
    console.log(baga + "too ih");
}else if(ih==baga){
    console.log("2")
}
else{
    console.log(ih + "too ih");
}

//garaas 0-100 dun oruulahad A,B,C,D,F
// 90 --> Ta 90 onootoi A unelgeetei

var unelgee = +prompt("ta unelgee oruulna uu");
if(unelgee >= 90){
    console.log(" ta A bna");
}else if(unelgee >= 80 && unelgee <90){
    console.log("ta B bna");
}else if(unelgee >= 70 && unelgee <80){
    console.log(" ta C bna")
}else if(unelgee >=60 && unelgee <70){
    console.log(" ta D bna")
}else if(unelgee <=50 && unelgee <60){
    console.log(" ta F bna")
}

//30 5 60
// Zuvhun eyreg toonuudiig hoorond n nemne uu
// 30+60=90
var too1 = 30, too2 =2, too3=60;
if(too1<0){
    too1=0
}if(too2<0){
    too2=0
}if(too2<0){
    too=0
}
console.log(too1+too2+too3); 

//-30 -5 -60
var t1 =-30, t2 =-5, t3= -60
if(t1<0){
    t1=t1*-1
}if(t2<0){
    t2=t2*1
}if(t3<0){
    t3=t3*1
}
console.log(t1+t2+t3);
