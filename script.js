let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let btnColor = ["one","two","three","four","five","six"];
let body = document.querySelector("body");
document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
    }
    body.style.backgroundColor = "#1A1A1A"
    levelUp();
})
let h3 = document.querySelector("h3")
// let btn = document.querySelectorAll("button");
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
    
    
    

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
    

}
function levelUp(){
    userSeq = [];
    level++
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*6);
    let randColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)
    gameFlash(randBtn);
    gameSeq.push(randColor);
    
}

let allBtn = document.querySelectorAll(".btn");
function btnPress(){
    let userbtn = this.getAttribute("id");
    userSeq.push(userbtn);
    userFlash(this);
    checkSeq(userSeq.length-1)
    console.log("user",userSeq) 
    
}
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
    
}
function checkSeq(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
        
    }else{
        h3.innerText = `Game over! Press any key to start`;
        let h4 = document.createElement("h4");
        h4.innerText = `Your score is ${level-1}`;
        h3.append(h4);
        body.style.background = "red";
        start = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
        
    }
}

