var number = [1,21,26,3]; // ug huvisagchiig .map-r uurchilnu
//var number2 = number.map(x => x*2);
///mun nuhtsul shalgaj bno{ if(x>2){x*2;}}

console.log(number);
//2.console.log(number.filter(x => x<21)); filtr gargana
//3.console.log(number.fill(0,1,3)); // ehlel ni orood tugsgul ni orohgui
//4.console.log(number.find(x => x<21)); // bugdiig bish hamgiin ehniihiig haij gargaj irne
//5.console.log(number.some(x => x<0)); //some n neg huvisagch onoogood tendeesee haidag 21-s baga too bval true bhgui bol false gej gargaj irne
//6.console.log(number.every(x => x<0)); //bugd 0-s ihuu gdgiig shalgaj bn. 0-s ih bol true garna

// => uuniig shugman funkts gene mun arrow function
var result = document.querySelector(".result");
var countPlayer = document.getElementById("countPlayer")
var countComputer = document.getElementById("countComputer")
var countP=0;
var countC=0;
function play(playerChoice){
    if(playerChoice=="rock"){
       // alert("you select rock");
    }
    //computer randomoor 1,2,3
    //1-> rock, 2-<paper, 3-->sciccors
    //var computer = ["roch", "peper" "scissor"]
    //Math.random() --> 0-s 1-iin hoorond butarhai random too gargana
    var computerChoice = Math.floor(Math.random()*3)+1;
    if(computerChoice==1){
        computerChoice = "rock";
    }else if(computerChoice==2){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors"
    }
    //alert(computerChoice);
    if(playerChoice==computerChoice){
        result.innerText = "Result : Tie/Tentslee";
    }else if((playerChoice=="rock" && computerChoice=="scissors") ||
            (playerChoice=="paper" && computerChoice=="rock") ||
            (playerChoice=="scissors" && computerChoice=="paper")
            ){
                result.innerText = "Result : You win/Ta hojloo" + "You choose " + playerChoice + ", computer choose " + computerChoice;
            }else{
                result.innerText = "Result : Computer win/ Computer hojloo" + "you choose " + playerChoice + ", computer choose" + computerChoice;
            }
            countPlayer.innerText = "cout your win : " + countP;
    //alert(Math.floor(Marh.random()*3)+1); //0-s 3iin hoorondoh toog gargay gevel urjuulne 
}