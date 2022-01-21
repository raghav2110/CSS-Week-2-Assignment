const baselineBtn = document.querySelector(".baseline-btn");
const baselineToast = document.querySelector(".show-snackbar-baseline");
const toastBtn = document.querySelector("#close-baseline");

const leadingBtn = document.querySelector(".leading-btn");
const leadingToast = document.querySelector(".show-snackbar-leading");
const toastLeading = document.querySelector("#close-leading");

const stackedBtn = document.querySelector(".stacked-btn");
const stackedToast = document.querySelector(".show-snackbar-stacked");
const toaststacked = document.querySelector("#close-stacked");

const hideToastBaseline = () => (baselineToast.style.visibility = "hidden");
const showToastBaseline = () => {
  baselineToast.style.visibility = "visible";
  setTimeout(hideToastBaseline, 5000);
};

baselineBtn.addEventListener("click", showToastBaseline);

toastBtn.addEventListener("click", hideToastBaseline);


const hideToastLeading = () => (leadingToast.style.visibility = "hidden");
const showToastLeading = () => {
    leadingToast.style.visibility = "visible";
    setTimeout(hideToastLeading, 5000);
};

leadingBtn.addEventListener("click", showToastLeading);

toastLeading.addEventListener("click", hideToastLeading);


const hideToastStacked = () => (stackedToast.style.visibility = "hidden");
const showToastStacked = () => {
    stackedToast.style.visibility = "visible";
    setTimeout(hideToastStacked, 5000);
};

stackedBtn.addEventListener("click", showToastStacked);

toaststacked.addEventListener("click", hideToastStacked);