//Сүүлийн цифр 476
var number = 476;
var lastNumber;
lastNumber = 476 % 10;
console.log( number + " suuliin tsifer " + lastNumber);
//Аравтын орны цифр.
var too = 423
console.log()
//Нэгж ба аравтын орны цифрүүдийн үржвэр.
var a = 2;
var n = 7;
console.log("urjver ni: " + a*n);
//Цифрүүдийн нийлбэр
var ts1 = 1;
var ts2 = 2;
var ts3 = 3;
console.log("niilber ni:" + (ts1+ts2+ts3));
//Минут секундыг зайгаар тусгаарлан хэвлэ.
var min, sec;
min = Math.floor(200 / 60);
sec = 200 % 60; 
console.log(min, "min " + sec + " sec");
//Цаг, минут, секундууд хоорондоо 1 зайгаар тусгаарлагдан хэвлэгдэнэ. Цаг минут руу шилжихгүй бол 0 хэвлэнэ.
var tsag, minut,secund;
tsag = Math.floor(3612 / 60 / 60);
minut = Math.floor(3612 / 60 % 60);
secund = 3612 % 60;
console.log(tsag, " tsag " +  minut + " minut " + secund + " secund ");

//Цаг, минут, секунд зайгаар тусгаарлагдан нэг мөрөнд Int төрлөөр өгөгдөнө.
var m, s;
m = 3*60;
s = 4;
console.log("secundruu " +  (m+s));

//Цаг, минут, секунд зайгаар тусгаарлагдан нэг мөрөнд Int төрлөөр өгөгдөнө.
var h, mi, se;
h = 60;
mi = 60;
se = 3;
console.log("sekund n:" + ((h*h)+mi+mi+se));

//Цаг Int төрлөөр өгөгдөнө.
var t;
t = 44;
console.log("honog n: " + Math.floor(t / 24)  + " tsag n: " + ((t - 24))); 

//Хоног, цаг Int төрлөөр нэг зайгаар тусгаарлагдан өгөгдөнө.
var day, tsaag;
day = 2
tsaag = 5
console.log("tsag n: " +  (day*24+tsaag));

//Сар Int төрлөөр өгөгдөнө.
var sar;
sar = 27;
console.log("jil n: " + Math.floor(sar / 12) + " sar n: " + (30-sar))

//Жил, сар нэг мөрөнд зайгаар тусгаарлагдан Int төрлөөр өгөгдөнө.
var j, s;
j = 2*12;
s = 7;
console.log("sar n: " + (j+s));

//2 бүхэл тоо нэг мөрөнд зайгаар тусгаарлагдан өгөгдөнө. төрөл
var ih =16; baga =14;
if(ih>baga){
    console.log(ih);
}else{
    console.log(baga)
}

//Нэг мөрөнд Int төрлийн 2 тоо зайгаар тусгаарлагдан өгөгдөнө.
var ih1 =9, baga1 =6;
if(baga1<ih1){
    console.log(baga1)
}

//Нэг мөрөнд Int төрлийн 3 тоо зайгаар тусгаарлагдан өгөгдөнө.
var h1, h2, h3;
h1 =3; h2 =1, h3 =2;
if(h1>h2 && h1>h3){
    console.log(h1 + "too ih bn");
}else if(h2>h1 && h2>h3){
    console.log(h2 + "too ih bn");
}else if(h3>h1 && h3>h2){
    console.log(h3 + "too ih bn");
}
var too

var niilber

//Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.
var u1, u2, u3, u4;
u1 = 3;
u2 = 6;
u3 = 2;
u4 = 4;
console.log("urjver n: " + (u1*u2+u3+u4));

//Нэг мөрөнд Int төрлийн 3 тоо зайгаар тусгаарлагдан өгөгдөнө.
var n1, n2, n3;
n1 = 10;
n2 = 3;
n3 = 5;
console.log("tegsh niilber " + (n1%n1+(n2*n2)+(n3/n3)))

//3-д хуваагддаг тоонуудын тоо.
var huv1, huv2, huv3, huv4;
huv1 = 3 /3;
huv2 = 12 /3;
huv3 = Math.floor (8 /3);
huv4 = 9 /3;
console.log("3 huv too n: " + (huv4*huv3-huv2+huv1));

//Int төрлийн 1 тоо өгөгдөнө.
var iih=11;
if(iih>10){
    console.log("yes");
}
else{
    console.log("no");
}

//Int төрлийн нэг тоо өгөгдөнө.
var baaga=4;
if(baaga<5){
    console.log("yes");
}else{
    console.log("no");
}

//Int төрлийн 3 тоо нэг нэг мөрөнд өгөгдөнө.
var b=3, b1=4, b2=5;
if(b%2==1){
    console.log("no");
}else{
    console.log("yes");
}if(b1%2==1){
    console.log("no");
}else{
    console.log("yes");
}if(b2%2==1){
    console.log("no");
}else{
    console.log("yes")
}
//IOI
for(var i=1; i<=1; i++){
    console.log("IOI");
}

//IOI үгийг төр тус бүрт 1,1-ээр хэвлэ.
for(var b=1; b<=3; b++){
    console.log(b + ".IOI")
}
//1-ээс n тооны нийлбэр.
var n1=5;
var niilber = 0;
for(var c=1; c<=n1; c++){
    niilber = niilber + c;
}
console.log(niilber);

//Өгөгдсөн тооны факториал.  int-5 out-120
// sum = 0 urjver bol = 1
var n0 = 5;
var fac = 1;
for(var f=1; f<=n; f++){
    console.log
    fac = fac * 1
}
console.log(n0 + "toonii factrol " + fac);

//Нэг мөрөнд Int төрлийн 2 тоо зайгаар тусгаарлагдан өгөгдөнө. Эхний тоо нь a тоо буюу тойрог тутамд нэмэгдэх тоо. 2 дахь тоо нь тойргийн тоо.
var n=5; n2=60
var niilber5 = 0;
for(var j=60; j<=60; j++){
    niilber5=(niilber5+5)*n2;
}
console.log(niilber5);

// 2. a toonii n zereg

//Int төрлийн эерэг тоо өгөгдөнө.
var n2=6;
var niilber1 = 0;
for(var d=100; d<=100; d++){
    niilber1=(niilber1+d)*n2;
}
console.log(niilber1);

//Тэнцсэн тохиолдолд "Tentssen", эсрэг тохиолдолд "Unasan" гэж хэвлэ.
var f=4;
switch(f){
    case 2:
        console.log("unasan");
        break;
    case 3:
        console.log("Unasan");
        break;
    case 4:
        console.log("Tentssen");
        break;
    case 5:
        console.log("Tentssen");
        break;    
    default:
        console.log("buruu baina");
        break;
}

//Тоон үнэлгээ 89-өөс их бол А, 79-өөс их В, 69-өөс их бол С, 59-өөс их бол D бусад тохиолдолд F үсгэн дүнг хэвлэ.
var too=84;
if(too >=90){
    console.log("A")
}
else if(too>=80){
    console.log("B")
}
else if(too>=70){
    console.log("C")
}
else if(too>=60){
    console.log("D")
}
else if(too>=50){
    console.log("F")
}

//Натурал тоо. 1<=n<=7. 
var garig=5;
switch(garig){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thuesday");
        break;
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break; 
    case 4:
        console.log("Sunday");
        break;  
    default:
        console.log("buruu udur bna");
        break;
}
//Натурал тоо. 1<=n<=12. uliraliin ner angiliar
var uliral=3;
if(uliral==1){
    console.log("winter");
}
if(uliral==2){
    console.log("Spring");
}
if(uliral==3){
    console.log("Spring");
}
if(uliral==4){
    console.log("Spring");
}
if(uliral==5){
    console.log("Summer");
}
if(uliral==6){
    console.log("Summer");
}
if(uliral==7){
    console.log("Summer");
}
if(uliral==8){
    console.log("autumn");
}
if(uliral==9){
    console.log("autumn");
}
if(uliral==10){
    console.log("autumn");
}
if(uliral==11){
    console.log("winter");
}
if(uliral==12){
    console.log("winter");
}

function urjver(a,b,c,d){
    console.log(a*d+c*b);
}
urjver(3,6,2,4);

function ihToo(i,b){
    if(i>b){
        return i;
    }else{
        return b;
    }
}
console.log(ihToo(16,14))
function nilber(a1, b1, c1){
    if(a1%2==0){
        a1=a1;
    }else{
        a1=0;
    }
    if(b1%2==0){
        b1=b1;
    }else{
        b1=0;
    }
    if(c1%2==0){
        c1=c1;
    }
    console.log(a1+b1+c1);
}
nilber(10,3,5);
function dun(too){
    if(too>=3){
        return "tentssen"
    }else{
        return "unasan"
    }
}
console.log(dun(3));
urjver1=1;
function factrol(n){
    for(i=1; i<=n; i++)
    urjver1=urjver1*i;
    console.log(urjver1);
}
factrol(5);
function min(sec){
    var a1,b1;
    a1=Math.floor(sec/60);
    b1=sec%60;
    console.log(`${a1} min ${b1} sec`)
}
//Ugugdsun massive-n ehnii bolon suuliin element tentsuu bol true, ugui bol false butsaa.
var too = [1,5,65,80,1];
if(too[0] == too[too.length-1]){
    console.log(true);
}else{
    console.log(false);
}

// garaas string ugugdsun boltegsh index dehitemdegtuudiig hevleh funkts bich
var string = ["text0", "text1", "text2", "text3", "text4" ];
for(var i=0; i<=string.length-1; i++){
    if(string.indexOf(string[i])%2==0){
    console.log(string[i]);
    }
}

//ugugdsun massive dotor sondgoi elment bolgon sondgoi index

var ontsgoi = [2,5,8,7,4];
            // 0,1,2,3,4
for(var i=0; i<=ontsgoi.length-1; i++){
    if(ontsgoi[i]%2==0 && ontsgoi.indexOf(ontsgoi[i])%2==0){
        console.log(true);
    }else{
        console.log(false);
    }
}

//Massive ugugdsun bol element tus buriig hargalzah indexeer urjuul hevle
var number = [1,2,3,4];
            //0,1,2,3 (1*0)*(2*1)*(3*2)*(4*3)
for(var i=0; i<=number.length-1; i++){
    console.log(number[i]*number.indexOf(number[i]));
}

// Dan boolean utga ugugdsun bol massive dotor ni heden shirheg true utga bgaag ol
var boolen = [true,false,true,false,false];
var count=0;
for(var i=0; i<=Boolean.length-1; i++){
    if(boolen[i]== true){
        count++
    }
}
console.log("true utga " + count + " shirheg bna");