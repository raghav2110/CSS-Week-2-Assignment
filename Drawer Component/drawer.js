const menuItems = document.querySelectorAll(".menu-items");
const navItems = document.querySelector(".nav-items");

navItems.addEventListener("click", (e) => {
    console.log(e)
  menuItems.forEach((navItem) => {
      console.log(navItems.classList)
    if (navItem.classList.contains("active")) {
      navItem.classList.remove("active");
    }
  });

  if (e.target.tagName == "I") {
    let liElem = e.target.parentElement;

    console.log(liElem)

    console.log(liElem.classList)
    liElem.classList.add("active");
  }
});