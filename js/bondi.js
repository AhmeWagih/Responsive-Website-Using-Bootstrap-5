const allA = document.querySelectorAll(".collapse a");
allA.forEach((a) => {
  a.addEventListener("click", function () {
    // Remove 'active' class from all li elements
    allA.forEach((a) => {
      a.classList.remove("active");
    });
    // Add 'active' class to the clicked li element
    this.classList.add("active");
  });
});
const liElements = document.querySelectorAll(".services li");
liElements.forEach((li) => {
  li.addEventListener("click", function () {
    // Remove 'active' class from all li elements
    liElements.forEach((li) => {
      li.classList.remove("active");
    });
    // Add 'active' class to the clicked li element
    this.classList.add("active");
  });
});
