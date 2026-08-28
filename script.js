let root = document.querySelector("html")
let modeBtn = document.querySelector(".mode")
let modeImg = document.querySelector(".mode > img")

modeBtn.addEventListener("click", (event) =>{
    let newMode = (root.className == "dark")? "light" : "dark"
    root.className = newMode
    let newImg = (modeImg.getAttribute("src") == "./imgs/dark-mode.svg")? "./imgs/light-mode.svg" : "./imgs/dark-mode.svg"
    modeImg.setAttribute("src" , newImg)
    
    
})