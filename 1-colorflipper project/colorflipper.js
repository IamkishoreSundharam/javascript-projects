const colors=["green","red","rgba(133,122,200)","#f15025","aqua","purple","gold"] ;
const button=document.getElementById("btn")
console.log(button)
const spantext=document.getElementById("span-text")

button.addEventListener("click",function(){
     let random=Math.floor(Math.random()*colors.length);
     spantext.textContent = colors[random];
     document.body.style.backgroundColor=colors[random];
})