let userScore=0
let compScore=0
const choices = document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log("button was clicked")
        // console.log(choice.id)
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
        
    })
})
const comp=()=>{
    const options=["Rock","Paper","Scissor"]
    const x=Math.random()*3
    const y=Math.floor(x)
    return options[y]
}

const drawgame=()=>{
    console.log("game was draw")
    
}
const playerwon=()=>{
    console.log("playerwon")

}
const compwon=()=>{
    console.log("computerwon")
}


const playgame = (userchoice)=>{
    
    console.log("userchoice = ",userchoice)
    const compp = comp()
    console.log("computerchoice = ",compp)
    if(userchoice===compp){
        drawgame()
        document.getElementById("choosen").innerText= `game was draw,  Computer has chosen ${compp} and you have choosen ${userchoice}`
        document.getElementById("hey").innerText=`please try again`
        
    }else if(userchoice=="Rock" && compp=="Paper"){

        compwon()
        compScore=compScore+1
        document.getElementById("choosen").innerText= `you lost Computer has chosen ${compp}`
        document.getElementById("hey").innerText=`please try again`

    }else if(userchoice=="Paper" && compp=="Rock"){
        playerwon()
        userScore=userScore+1
        document.getElementById("choosen").innerText= `you won Computer has chosen ${compp}`
        document.getElementById("hey").innerText=" "
        
    }else if(userchoice=="Scissor" && compp=="Rock"){
        compwon()
        compScore=compScore+1
        document.getElementById("choosen").innerText= `you lost Computer has chosen ${compp}`
        document.getElementById("hey").innerText=`please try again`
    }else if(userchoice=="Rock" && compp=="Scissor"){
        playerwon()
        userScore=userScore+1
        document.getElementById("choosen").innerText= `you won Computer has chosen ${compp}`
        document.getElementById("hey").innerText=" "
        
    }else if(userchoice=="Scissor" && compp=="Paper"){
        playerwon()
        userScore=userScore+1
        document.getElementById("choosen").innerText= `you won Computer has chosen ${compp}`
        document.getElementById("hey").innerText=" "
        
    }else if(userchoice=="Paper" && compp=="Scissor"){
        compwon()
        compScore=compScore+1
        document.getElementById("choosen").innerText= `you lost Computer has chosen ${compp}`
        document.getElementById("hey").innerText=`please try again`
    }
        document.getElementById("comp-score").innerText=(compScore)
        document.getElementById("user-score").innerText=(userScore)

}


