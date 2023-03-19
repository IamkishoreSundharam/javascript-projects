const reviews=[
    {
        name:"Sara Jones",
        job:"UX Designer",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet fugiat quos rem repellat minima voluptate, praesentium, dignissimos voluptatum fuga magni animi hic? Consequatur nostrum rerum saepe eos, officiis nam iste.",
        img:"../image/icon women.png"
    },
    {
        name:"Alex",
        job:"web developer",
        info:"great work pal, continue doing the project hope to see u soon as a developer",
        img:"../image/icon male.webp"
    },
     {
        name:"Sofie",
        job:"backend developer",
        info:"Seen ur projects,looks interesting do conitnue what you are doing and great things will happen for sure, all the best.",
        img:"../image/icon women.png"
     },
     {
        name:"Max",
        job:"web developer",
        info:"hey bud, hope u are doing well, your projects are great and i am also going to try it for myself,keep in touch...cheers",
        img:"../image/icon male.webp"
     }
]
const image=document.getElementById("image")
const names=document.getElementById("name")
const jobs=document.getElementById("post")
const info=document.getElementById("reviews")
const prevbtn=document.getElementById("prev")
const nextbtn=document.getElementById("next")
const surprisebtn=document.getElementById("surprise-btn")

let currentitem=0;
// window.addEventListener("DOMContentLoaded",function(){
//     itemshifter(currentitem);
// })

function itemshifter(){
    const item=reviews[currentitem];
    image.src=item.img
    names.textContent=item.name
    jobs.textContent=item.job
    info.textContent=item.info
}

prevbtn.addEventListener("click",function(){
    currentitem--;
        if(currentitem<0){
            currentitem=reviews.length-1
        }
     itemshifter();
})

nextbtn.addEventListener("click",function(){
    currentitem++;
     if(currentitem>reviews.length-1){
        currentitem=0;
     }
    itemshifter();
})

surprisebtn.addEventListener("click",function(){
    currentitem=Math.floor(Math.random()*reviews.length)

    itemshifter();
})