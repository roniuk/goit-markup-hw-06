(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-modal-open]"),
    closeMenuBtn: document.querySelector("[data-modal-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
  refs.menu.classList.toggle("is-open");
  }
})();





//  document.getElementById("modal-btn").addEventListener("click", function () {
// 	document.getElementById("modal-order").classList.add("is-open")
// })

//  document.getElementById("modal-close").addEventListener("click", function () {
// 	document.getElementById("modal-order").classList.remove("is-open")
//  })