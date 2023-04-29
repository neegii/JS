 // ugugduliin ner var tgd massive ner bna = ["text", 100, true, 150, "text "]; geh metchilen bn
var massiveNer = ["text", 100, true, 150, "text2"];
var food = ["buuz", "huushuur", "tsuivan"];
var too = [50, 506, 554, 10, 30, ];
// durvuljin haaltand bichij bga zuilsiig elment gedeg
// ["element", "element", "element"]
console.log(food);
console.log(too);
// elementiin bairshiliig index gedeg index n 0-s eheldeg
console.log(food[0]);
console.log(food[2]);
food[3]="burger"; //[haaltan dotor daraagiin indexiig bichij bno]
food[0]="shul";
console.log(food[3]);
console.log(food);
console.log("food gesen massiv-d" +  food.lenght  + "element bna");
//console.log("element too:" + too.lenght);
//for(var i=0; i<=too.lenght-1; i++){
    //console.log(too[i]);
//}
// i=0 baival 0<=5 -> too[0]-50 gsn too
// i=1 -> 0<=5 -> too[1]->506
// i=6 -> 6<=5 -> false -> programm duusna

//B: Neg massive uusgeed teren dotroo toonuud hadgalaad niilberiig ol for ashiglana 
var too1 = [10,20,30,40];
var niilber = 0;
for(var i=0; i<=too1.length-1; i++){
    niilber = niilber + too1 [i];
    console.log(too1.indexOf(too1[i]) + ":" + too1[i]);
}
console.log("niilber:" + niilber);

//ES6 nemeltuud garsan uunii neg n indexOf bga. ene n olon zuiliin ali neg zuiliig yg heddeh index deer bgaag harj bno
console.log(too1.indexOf(30)); //too1 deerh 30gsn too 2 dahi index geed gargaj irj bn.
console.log(food.indexOf("tsuivan"));

//ES6 nemeltuudiin neg n  typeof em´ne n ymar ugugduliin turulteig shalgana
console.log(typeof(food));

//garaas utga avahad massive bgaa esehiig shalga
// out -->garaas 10 gej bichehed --> 0 : 10 baina
//var test = [10, 5, 52, 10];
//var n = +prompt("ta too iruulna u");
//for(var i=0; i<=test.length-1; i++){
    //if(n==test[i]){
        //console.log(test.indexOf(testr)(i) + ":" + test [i]);
    //}else{
        //console.log("tanii oruulsan too bhgui bn");
    //}
//}

//pop(), push(), shift(), unshift() gsn funktsuud bdag
///var text1 = ["text2", "text3", "text4"];
//7console.log(text1);
///text1.pop();         //ene n massiveiin suuliin utgiig ustgadag
///text1.push("text4"); // massive-n hamgiin suuld element nemdeg
///text1.shift();       // ene n hamgiin ehnii elmentiig ustgadag
//7text1.unshift("text0"); //ene n hamgiin ehnii elment nemdeg
//7console.log(text1);
var body = document.getElementsByTagName("body",)[0];
var button = document.getElementsByTagName("button",)[0];
var button = document.getElementsByTagName("button",)[0];
 var colors = ["yellow", "green", "blue","orange", "red"];
console.log(body);
var index=0;
var index2=0;
var index3=0;
 function changeColor(){
    button.text=colors[index3++]
    button.innerText=colors[index2++];
    body.style.background=colors[index++];
    if(index > colors.length-1 && index2 > colors.length-1){
        index = 0;
        index2 =0;
        index3=0;
    }
}

