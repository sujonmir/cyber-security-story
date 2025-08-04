window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("typing_effect");
  if (!container) return;

  const elements = Array.from(container.children);
  const originalTexts = elements.map((el) => el.innerHTML);
  elements.forEach((el) => (el.innerHTML = ""));

  let current = 0;

  function typeElement(el, text, speed = 1, done) {
    let i = 0;
    el.classList.add("typing-cursor");

    function type() {
      el.innerHTML = text.substring(0, i + 1);
      i++;
      if (i < text.length) {
        setTimeout(type, speed);
      } else {
        el.classList.remove("typing-cursor");
        done();
      }
    }

    type();
  }

  function typeNext() {
    if (current < elements.length) {
      typeElement(elements[current], originalTexts[current], 30, () => {
        current++;
        typeNext();
      });
    }
  }

  typeNext();
});
