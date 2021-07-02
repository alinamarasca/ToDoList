import { resetButtonHandler } from "../handlers/resetButtonHandler.js";

const makeResetButton = (classEl) => {
  const resetButton = document.createElement("button");
  resetButton.value = "reset";
  resetButton.innerHTML = "Reset";
  resetButton.className = "reset-btn";
  resetButton.classList.add(classEl);
  resetButton.addEventListener("click", resetButtonHandler);
  return resetButton;
};

export { makeResetButton };
