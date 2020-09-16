const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    // 몇 진수로 바꿀 건지도 인자로 넣어줘야 함
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
};

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
  };