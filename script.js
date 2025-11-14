// Global variable
let isAnimating = false;

// Function with parameters and return value
function toggleBoxAnimation(selector, state) {
  const element = document.querySelector(selector);

  if (state === "start") {
    element.classList.add("animate");
    isAnimating = true;
    return "Animation started!";
  } else {
    element.classList.remove("animate");
    isAnimating = false;
    return "Animation stopped!";
  }
}

// Event listener with scope demonstration
document.getElementById("animateBtn").addEventListener("click", () => {
  // Local scope variable
  let message;

  if (!isAnimating) {
    message = toggleBoxAnimation(".box", "start");
  } else {
    message = toggleBoxAnimation(".box", "stop");
  }

  console.log(message); // Output result
});
