const btnHide = document.querySelector("#btn-hide")
const badgeText = document.querySelector("#badge-text")

btnHide.addEventListener("click",hideBadgeText);

function hideBadgeText(){
    if(badgeText.style.display=="none"){
        badgeText.style.display = "block";
    } else {
        badgeText.style.display = "none";
    }
    
}