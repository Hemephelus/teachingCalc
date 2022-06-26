// When we click the number button
// Get the number from the button tag
// and dispay in the input tag


const numberBtn = document.querySelectorAll('[number-button]')
const functionBtn = document.querySelectorAll('[functionBtn]')
const bottomDisplay = document.querySelector('[bottomDisplay]')
const topDisplay = document.querySelector('[topDisplay]')
const clearBtn = document.querySelector('[clearBtn]')
const backspaceBtn = document.querySelector('[backspaceBtn]')

numberBtn.forEach(button =>{
   
    button.addEventListener('click',() =>{
       
            updateBottomDisplay(button.innerText)
    })
})


function updateBottomDisplay(number){
    if(bottomDisplay.value.includes('.') && number == '.')return
    bottomDisplay.value  =  bottomDisplay.value.toString() + number.toString()
}

clearBtn.onclick = clearAll
backspaceBtn.onclick = backspace

function backspace(){
    if(bottomDisplay.value == '')return
    bottomDisplay.value = bottomDisplay.value.slice(0, -1)

}


function clearAll(){
    bottomDisplay.value = ''
    topDisplay.value = ''
}

console.log(bottomDisplay.value, functionBtn)