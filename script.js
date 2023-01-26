const display = document.querySelector(".display");
const btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;

      case "C":
        display.innerText = display.innerText.slice(0, -1);
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }

        break;

      case "0":
        if (display.innerText === "") {
          return;
        } else {
          display.innerText += e.target.innerText;
        }

        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  )
    clickNumElm(e.key);
});

const clickNumElm = (key) => {
  btns.forEach((btn) => {
    if (btn.innerText === key) {
      btn.click();
    }
  });
};
