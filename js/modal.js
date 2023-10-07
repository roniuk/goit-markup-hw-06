(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();






// document.getElementById("modal-btn").addEventListener("click", function () {
// 	document.getElementById("modal-order").classList.add("is-open")
// })

// document.getElementById("modal-close").addEventListener("click", function () {
// 	document.getElementById("modal-order").classList.remove("is-open")
// })