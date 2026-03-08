var canvas = document.querySelector("canvas");

var context = canvas.getContext("2d");
var colorInput = document.getElementById("input");
var clickBtn = document.getElementById("button");
context.strokeStyle = colorInput.value;
var tempColor = colorInput.value;
var circleNumber = 5;
clickBtn.addEventListener("click", function () {
  if (colorInput.value === tempColor) {
    for (var i = 0; i < circleNumber; i++) {
      context.beginPath();
      context.arc(
        Math.random() * canvas.width - 30,
        Math.random() * canvas.height - 30,
        30,
        0,
        2 * Math.PI
      );
      context.stroke();
    }
  } else {
    tempColor = colorInput.value;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = colorInput.value;
    for (var i = 0; i < circleNumber; i++) {
      context.beginPath();
      context.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        30,
        0,
        2 * Math.PI
      );
      context.stroke();
    }
  }
});
