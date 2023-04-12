const buttons=document.querySelectorAll(".btn")
console.log(buttons)
let spanText=document.querySelector("#count")
// console.log(spanText)
let count=0;

buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const dataid=e.currentTarget.dataid;
        console.log(dataid)
          if(dataid==="decrement"){
            decrement()
          }
          else if(dataid==="increment"){
            increment()
          }
          else{
            reset()
          }
    })
})

function decrement(){
    count--;
    if(count<0){
        spanText.style.color="red";
    }else if(count==0){
        spanText.style.color="white"
    }
    spanText.textContent=count;
}

function reset(){
    spanText.textContent=0;
    count=0;
    spanText.style.color="white";
}

function increment(){
    count++;
    if(count>0){
        spanText.style.color="green";
    }else if(count==0){
        spanText.style.color="white"
    }
    spanText.textContent=count;
}