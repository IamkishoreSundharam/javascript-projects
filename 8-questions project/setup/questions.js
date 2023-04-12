//using selectors inside the element
// traversing the dom

const btns=document.querySelectorAll(".question-btn")
// const question=document.querySelectorAll(".question")

btns.forEach(function(btn){
    btn.addEventListener("click",function(crnt){
         const questions=crnt.currentTarget.parentElement.parentElement;

        //  question.forEach(function(item){
        //     if(item!==questions){
        //         item.classList.remove("show-text")
        //     }
        //  })
        btns.forEach(function(butons){
            const question=butons.parentElement.parentElement;
            if(question!==questions){
                question.classList.remove("show-text")
            }
        })
         questions.classList.toggle("show-text")
    })
})

// const questions=document.querySelectorAll(".question")

// questions.forEach(function(qstn){
//     const btn=qstn.querySelector(".question-btn")
//     btn.addEventListener("click",function(){
//         questions.forEach(function(item){
//             if(item!==qstn){
//                 item.classList.remove("show-text")
//             }
//         })
//         qstn.classList.toggle("show-text")
//     })
// })