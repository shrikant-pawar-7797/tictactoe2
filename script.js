let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{ 
        if(turnO){
            box.innerText="O";
            box.classList.add("green-color");
            turnO=false;
        }
        else{
            box.innerText="X";
            box.classList.add("red-color");
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
msg.innerText = (`Congratulations, winner is ${winner}`);
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkWinner=() =>{

    for(let pattern of winPatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
        
         let pos1value = boxes[pattern[0]].innerText;
         let pos2value = boxes[pattern[1]].innerText;
         let pos3value = boxes[pattern[2]].innerText;

         if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value){
                showWinner(pos1value);
            }
         }
    }

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);