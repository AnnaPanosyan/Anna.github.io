let button = document.querySelector(".button");
let input = document.querySelector(".input");
let newText;
let del;
let addList = document.querySelector(".addList");

button.addEventListener("click", function () {
  let addListItems = document.createElement("div");
  if (input.value) {
    addList.prepend(addListItems);
    addListItems.classList.add("addListItems");
    newText = document.createElement("p");
    addListItems.prepend(newText);
    newText.classList.add("newList");
    newText.innerText = input.value;
    del = document.createElement("button");
    addListItems.append(del);
    del.classList.add("del");
    del.innerText = "X";
    input.value = "";
  }

  let deletes = document.querySelectorAll(".del");
  for (let i = 0; i < deletes.length; i++) {
    deletes[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
});

input.addEventListener('keyup', function(e){
  if(e.keyCode ===13){
    e.preventDefault()
    button.click()
  }
})