let count=0;

let spantext=document.getElementById("count")
let decreasebtn=document.querySelector("#decrement")
let resetbtn=document.querySelector("#reset")
let incrementbtn=document.querySelector("#increment")


decreasebtn.addEventListener("click",function(){
    count--;
    if(count<0){
        spantext.style.color="red";
    }else if(count==0){
        spantext.style.color="white"
    }
    spantext.textContent=count;
})

resetbtn.addEventListener("click",function(){
    spantext.textContent=0;
    count=0;
    spantext.style.color="white";
})

incrementbtn.addEventListener("click",function(){
    count++;
    if(count>0){
        spantext.style.color="green";
    }else if(count==0){
        spantext.style.color="white"
    }
    spantext.textContent=count;
})