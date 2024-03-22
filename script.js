let button=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer= document.querySelector(".msg-container");
let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() =>{
    turn0=true;
    enableBox();
    msgcontainer.classList.add("hide");
        
}

const disableBox=() =>{
        for(let box of button){
            box.disabled=true;
        }
}

const enableBox=() =>{
    for(let box of button){
        box.disabled=false;
        box.innerText="";
    }
}
let count=0;
button.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        
        if (turn0){
            box.innerHTML="0";
            turn0= false;
        }
        else{
            box.innerHTML="X";
            turn0= true;
        }
        box.disabled= true;

        checkWinner();
        });
    
    });
    const showWinner=(winner) =>{
        msg.innerText = `Congratulations , Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBox();

    };

    const checkWinner=() =>{
        for(let pattern of winPatterns){
            let pos1Val =  button[pattern[0]].innerText;
            let pos2Val =  button[pattern[1]].innerText;
            let pos3Val =  button[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
                if(pos1Val===pos2Val && pos2Val === pos3Val){
                    
                    showWinner(pos1Val);
                }
                
                
            }
            if(count>=9){
                msg.innerText = `It is a draw`;
                msgcontainer.classList.remove("hide");
                count= 0;
                

            }
            
        }

    };
    newGamebtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);
    