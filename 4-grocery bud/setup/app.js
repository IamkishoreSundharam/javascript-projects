// ****** SELECT ITEMS **********
const form=document.querySelector(".grocery-form")
const alert=document.querySelector(".alert")
const grocery=document.querySelector("#grocery")
const submitbtn=document.querySelector(".submit-btn")
const container=document.querySelector(".grocery-container")
const list=document.querySelector(".grocery-list")
const clearbtn=document.querySelector(".clear-btn")
// edit option
let editId="";
let editElement;
let editFlag=false;
// ****** EVENT LISTENERS **********
form.addEventListener("submit",additem)
// submit form 
function additem(e){
    e.preventDefault();

    const value=grocery.value;
    const id=new Date().getTime().toString();

    if(value && !editFlag){
        const element=document.createElement("article");
        element.classList.add("grocery-item")
        const atribute=document.createAttribute("data-id")
        atribute.value=id;
        element.setAttributeNode(atribute);
        element.innerHTML=`<p class="title">${value}</p>
        <div class="btn-container>
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>`
        //append child
        list.appendChild(element);
        //display alert
        displayalert("Added to list","success")
        //show container
        container.classList.add("show-container")
    }
    else if(value && editFlag){}
    else{
        displayalert("You entered nothing","danger");
    }
}
function displayalert(text, actions){
    alert.textContent=text;
    alert.classList.add(`alert-${actions}`)

    setTimeout(function(){
      alert.textContent="";
      alert.classList.remove(`alert-${actions}`)
    },2000)
}
// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
