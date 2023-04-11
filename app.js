let but1 = document.getElementById("button1")
let but2 = document.getElementById("button2")
let h = document.getElementById("h1")
let a = 0;
function tes1(){
    a++

    h.textContent = a
    h.style.color = "green"
    if(h.textContent>9){
    h.style.color = "blue"
    }
}

function tes2(){
    a--
    h.style.color = "green"
    h.textContent = a
    if(h.textContent<0){
        h.style.color = "red"
    }
}

