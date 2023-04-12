const buttons=document.querySelectorAll(".tab-btn")
const about=document.querySelector(".about")
const articles=document.querySelectorAll(".content")

about.addEventListener("click",function(e){
   const id=e.target.dataset.id;
   
   if(id){
     buttons.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active")
     })
const element=document.getElementById(id)
     articles.forEach(function(art){
        art.classList.remove("active")
        element.classList.add("active")
     })
   }
})