const btnAlert = document.querySelector(".alert-btn")
const alertDialog = document.querySelector(".show-dialog-alert")
const mainAlert = document.querySelector(".main-div-alert")

const btnSimple = document.querySelector(".simple-btn")
const simpleDialog = document.querySelector(".show-dialog-simple")
const mainSimple = document.querySelector(".main-div-simple")

const btnConfirmation = document.querySelector(".confirmation-btn")
const confirmationDialog = document.querySelector(".show-dialog-confirmation")
const mainConfirmation = document.querySelector(".main-div-confirmation")

btnAlert.addEventListener("click",showalertDialog);
btnSimple.addEventListener("click",showsimpleDialog);
btnConfirmation.addEventListener("click",showconfirmationDialog);

function showalertDialog(){
    console.log("Hi")
    alertDialog.style.visibility="visible"
    mainAlert.style.display="block"
}

function showsimpleDialog(){
    console.log("Hi")
    simpleDialog.style.visibility="visible"
    mainSimple.style.display="block"
}

function showconfirmationDialog(){
    console.log("Hi")
    confirmationDialog.style.visibility="visible"
    mainConfirmation.style.display="block"
}

window.onclick = function(event) {
    if (event.target == mainAlert) {
        mainAlert.style.display = "none";
    }
    if (event.target == mainSimple) {
        mainSimple.style.display = "none";
    }
    if (event.target == mainConfirmation) {
        mainConfirmation.style.display = "none";
    }
  }