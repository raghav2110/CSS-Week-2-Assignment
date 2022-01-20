const fruitSelect = document.querySelector("#fruit-select");
const containerDiv = document.querySelector(".container");
const wrapperDiv = document.querySelectorAll(".div-wrapper");

fruitSelect.addEventListener("change", addChip);

wrapperDiv.forEach((chipWrapper) => {
  chipWrapper.addEventListener("click", removeChip);
});

function addChip(e) {
  const value = e.target.value;

  const chip = makeChip(value);

  containerDiv.insertBefore(
    chip,
    containerDiv.children[containerDiv.children.length - 1]
  );

  fruitSelect.value = "";
}

function makeChip(value) {
  const chipWrapper = document.createElement("div");

  chipWrapper.className = "div-wrapper";

  chipWrapper.innerHTML = `
        <div class="chip">${value}</div>
        <span class="close">
            <i class="fa fa-times"></i>
        </span>
    `;

  chipWrapper.addEventListener("click", removeChip);

  return chipWrapper;
}

function removeChip(e) {
  let tagName = e.target.tagName;

  if (tagName == "I" || tagName == "SPAN") {
    e.currentTarget.remove();
  }
}