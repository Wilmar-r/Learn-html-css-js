const display = document.querySelector("#display");
console.log(`display: ${display.id}`)
const buttons = document.querySelectorAll("button");
console.log(`el tamaño de array de buttons es: ${buttons.length}`)
buttons.forEach(item => console.log(`item id: ${item.id}`))


buttons.forEach((item)=>{

    item.onclick=()=>{
        
        if(item.id === "clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1)
        }else if(display.innerText !=""&& item.id=="btn-equal"){
            display.innerText = eval(display.innerText)
        }
        else if(display.innerText=="" && item.id=="btn-equal"){
            display.innerText = 'null';
            setTimeout(()=>(display.innerText=""), 1000)
        }else{
            display.innerText+= item.id;
        }
    }
})