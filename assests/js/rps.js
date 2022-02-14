const body = document.querySelector("body")
const choices_container = document.querySelector("div.choices")
const rock = document.querySelector("img#rock")
const paper = document.querySelector("img#paper")
const scissor = document.querySelector("img#scissor")

const random = () =>{
    const val = Math.floor(Math.random().toFixed(1) * 3)
    switch (val){
        case 0:
            return "rock"
        
        case 1:
            return "paper"

        case 2:
            return "scissor"
        
        case 3:
            
    }
}

https://meet.google.com/gzm-qxfy-dcj