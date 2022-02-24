let input = document.getElementById("inputText");
let luckyNumber = 10;
let tryCount = 0;
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    validateInputNumber();
  }
});

function validateInputNumber() {
  var inputNumer = document.getElementById("inputText").value;
  console.log("inputNumber: " + inputNumer);
  if (inputNumer < 1 || inputNumer > 15) {
    alert("Bạn vừa nhập sai");
  } else {
    tryCount++;
    if (tryCount > 3) {
      alert("Bạn đã thử quá số lượt cho phép là 3 lần");
    } else {
      if (inputNumer == luckyNumber) {
        alert("Chúc mừng bạn đã trúng 1 tỷ VNĐ");
      } else if (inputNumer != luckyNumber && tryCount == 3) {
        alert("Chúc bạn may mắn lần sau, Lucky number là: " + luckyNumber);
      }
    }
  }
}

document.getElementById("myBtn").onclick = function () {
  validateInputNumber();
};
