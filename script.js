// ----------------------------
// Box Active or Deactive
// -----------------------------

let boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
  box.addEventListener('click', function () {
    deactive();
    box.classList.add("active")
  })
});

function deactive() {
  boxs.forEach((box) => {
    box.classList.remove("active");
  })
};

// ----------------------------------------------
// form submitions using the email js code
// ----------------------------------------------

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('service_7af8hpf', 'template_se6ztle', this)
      .then(function () {
        alert("Message send successfully");
        document.getElementById('contact-form').reset();
      });
  });
});

// ------------------------------------------------
// social media icons active and disactive code
// -------------------------------------------------

const elem = document.querySelectorAll('.elem');

elem.forEach(function (item) {

  item.addEventListener('mouseenter', function () {
    item.childNodes[3].style.opacity = '1';

  });

  item.addEventListener('mouseleave', function () {
    item.childNodes[3].style.opacity = '0';
  });

  item.addEventListener('mousemove', function (e) {
    item.childNodes[3].style.left = e.x + 'px';
  });

});