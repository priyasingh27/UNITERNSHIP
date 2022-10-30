const va = document.getElementById("va");
let showval = ""
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((x)=> {
    x.addEventListener("click",(e)=>{
        let text  = e.target.innerText;
        console.log(text);
        if(text=="X"){
            text = "*";
            showval += text;
            va.value = showval;
            

        }
        else if(text=="c"){
            showval="";
            va.value=showval;
    }
    else if(text=="="){
        showval= va.value;
            va.value = eval(showval);
            console.log(showval);
            
        }else{
            va.value +=text;
            showval=va.value;
            
        }
        
    })
    // document.getElementById("va").innerHTML=showval;
})


