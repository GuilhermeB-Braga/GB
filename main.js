let number = document.getElementById(`number`)
let baseTo = document.getElementById(`base`)
let button = document.getElementById(`btn`)
let output = document.getElementById(`result`)
let outputArea = document.getElementById(`result-area`)
let userResult =""

function convert(){
    let base = baseTo.value
    let value = number.value
    let result = []

    while(value / base != 0){
        let rest = value % base
        value = parseInt(value / base)
        result.push(rest)
    }

    if(base == "16"){
        hexadecimal(result)
    }

    result.reverse()

    userResult = result.join(``)
    output.innerHTML = `<h3>${userResult}`
    
    outputArea.classList.toggle(`hidden`)
    outputArea.style.display = `block`

}

function hexadecimal(result){
 for(let i = 0; i < result.length; i++){
    switch(result[i]){
        case 10:
            result[i]= "A"
            break

        case 11:
            result[i]= "B"
            break

        case 12:
            result[i]= "C"
            break

        case 13:
            result[i]= "D"
            break

        case 14:
            result[i]= "E"
            break

        case 15:
            result[i]= "F"
            break

        case 16:
            result[i]= 10
            break
        }
    }
 }
 
function copyToClipboard(){
    navigator.clipboard.writeText(userResult).then(()=>{
        alert(`Copiado com sucesso!`)
    })
}


function menuOpen(){
    let menuBar = document.getElementById(`menu-bar`)
    let overlay = document.getElementById(`overlay`)
    overlay.classList.toggle(`show`)
    menuBar.classList.toggle(`open`)
}