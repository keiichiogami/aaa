const test = document.getElementById("count");
const testdes = () => {
  let a = parseInt(test.textContent, 10);
  test.textContent = a + 1;
};

test.addEventListener("click", testdes);
