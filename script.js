let progress1 = document.getElementById("progress1")
let progress2 = document.getElementById("progress2") 
let add1 = document.querySelector("#plus1")
let subtract1 = document.querySelector("#minus1")

let add2 = document.querySelector("#plus2")
let subtract2 = document.querySelector("#minus2")

add1.addEventListener('click',()=>{
    let currentWidth =parseFloat(progress1.style.width);
   let plus = currentWidth + 5;
    progress1.style.width = plus +'%';

}
)
subtract1.addEventListener('click',()=>{
    let currentWidth =parseFloat(progress1.style.width);
   let minus = currentWidth - 5;
    progress1.style.width = minus +'%';

}
)
add2.addEventListener('click',()=>{
    let currentWidth =parseFloat(progress2.style.width);
   let plus = currentWidth + 5;
    progress2.style.width = plus +'%';

}
)
subtract2.addEventListener('click',()=>{
    let currentWidth =parseFloat(progress2.style.width);
   let minus = currentWidth - 5;
    progress2.style.width = minus +'%';

}
)