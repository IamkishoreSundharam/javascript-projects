const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const button=document.getElementById("btn")           
const spantext=document.getElementById("span-text")    

button.addEventListener("click",function(){
    let hexval="#";
    for(let i=0;i<6;i++){
        hexval+=hex[getrandom()]
    }
    spantext.textContent=hexval;
    document.body.style.backgroundColor=hexval;
})
function getrandom(){
    return Math.floor(Math.random()*hex.length);
}