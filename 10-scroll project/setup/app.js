// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date=document.getElementById("date")
console.log(date)
date.innerHTML= new Date().getFullYear()
// ********** close links ************
const togglebtn=document.querySelector(".nav-toggle")
const divcontainer=document.querySelector(".links-container")
const linkcontainer=document.querySelector(".links")

togglebtn.addEventListener("click",function(){
    // divcontainer.classList.toggle("show-links")
    const divcontainerheight=divcontainer.getBoundingClientRect().height
    const linkcontainerheight=linkcontainer.getBoundingClientRect().height

    if(divcontainerheight==0){
        divcontainer.style.height=`${linkcontainerheight}px`
    }
    else{
        divcontainer.style.height=0;
    }
})
// ********** fixed navbar ************
const navbar=document.getElementById("nav")
const toplink=document.querySelector(".top-link")

window.addEventListener("scroll",function(){
    const scrollheight=window.pageYOffset;
    const navheight=navbar.getBoundingClientRect().height;
    if(scrollheight>navheight){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }

    if(scrollheight>500){
        toplink.classList.add("show-link")
    }
    else{
        toplink.classList.remove("show-link")
    }
})

// ********** smooth scroll ************
// select links
const scrolllinks=document.querySelectorAll(".scroll-link")

scrolllinks.forEach(function(link){
    
    link.addEventListener("click",function(e){
        e.preventDefault();
        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id)
        const navheight=navbar.getBoundingClientRect().height;
        let position=element.offsetTop-navheight;

        window.scrollTo({
            left:0,
            top:position
        })
        
        linkcontainer.style.height=0;
       
    })

})
