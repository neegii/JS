//Functioniig  block code
// {} ugalzan haalt ashiglaj bval ene n block code gene
// function->functionii ner(){ene hesegt ajillah code bna}
//Function 2 turultei bna 1.statment 2.Expression 3.arrow buyu shugman 
// 1.statment ni 2 turul bna -> 1.void func 2.return func
// function argument /parameter uuniig () buyu buurunhii haaltan dotor bichne/
function mendleh(name, age, year){
    console.log("sain baina uu" + name);
    console.log("bi " + age + " nastai");
    if(18<age){
        console.log("ta nasand hursen");
    }else{
        console.log("ta nasand hreegui bna")
    }
    console.log((year - age) + " tanii tursun on ");
}
//function bichsen bol duudaj ajiluulah estoi ajiluulahiin tuld nereer ni duudna
mendleh(" suvd");
mendleh(" erdene ");
mendleh(" bat", 30);
// 2 toonii niilber oloh functio bichne uu.
function niilber(a, b){
    console.log(a+b);
}
niilber(10,5);
//Bodlogo: Ugugdsun gurvaljinii primeter ol
//3 4 5 -->12
//tomyo n: a+b+c
function gurvaljin(a,b,c){
    console.log(a+b+c);
}
gurvaljin(3,4,5);

//return Function ene n utgiig n butsaadag uuniig hiihdee huvsagch zarlaad uuniigee butsaadag

//bodlogo: gurvaljingiin primeteriig olood 5d urjuul
function gurvalj(d,e,f){
    var p = d+e+f;
    return p;
}
var z = gurvalj(5,6,7);
console.log( z * 5);
//console.log(gurvalj(5,6,7));

//backtick ni blhr console deer + temdeg avahguigeer hunguvchluud (${z} ene bol p-g ${z} return hiisen utga); geh metchilen hylbarshuuldag
// bichver n `${z}´ gej yvna

// bodlogo; 2 too ugugdsun bol tedgeeriin urjver 100s ih baival urjveriig butsaaj, 100s baga bval niilberiig butsaadag funktsiig bichne uu
function niilb(ih, baga){
    var c=ih*baga;
if(c>100){
        return c;
    }else{
       return ih+baga
    }
}
console.log(niilb(20,6));

//b: garaas too uguhud ter too hurtelh toonuudiin niilberiig oloh funktsiig bichne uu
function sum(n){
    var niil = 0;
    for(var i=1;i<=n; i++){
        niil=niil+i;
    }
    console.log(niil);
    return niil;
}
sum(5);

//DOM buyu document gdg zuil bdag ene n HTML deerh taguudiig duudahad ashigladag. uuniig app.js deer duudahdaa var buyu huvisagchaar duuddag jishee n: var ageInput = document.querySelector(".inputAge");
//

//console.log(document);

var ageInput = document.querySelector(".inputAge") //value bichej toog ageInput deer hadgaldag
var result = document.querySelector(".result");
var nowYear = 2023;
var birthYear;
function findYear(){
    birthYear = nowYear - ageInput.value;
    if(ageInput.value==0){
        result.innerText = "ta buruu utga oruulsan bn";
    }else if(ageInput.value>=120){
        result.innerText= "buruu"
    }else{
        result.style.color = "green";
        result.innerText = ` Ta ${birthYear} ond tursun `;
    }
    

}
//console.log(ageInput);
//console.log(result);

///result.innerText = "ene bol result"; // <--ingej java deer textiig uurchilj boldog html-ruu orohguigeer
///result.style.color = "red";
///ageInput.value = "text" // value hiij bno ene n mun text too bj bno.

