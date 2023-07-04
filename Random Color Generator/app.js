const hexCode = document.getElementById("color-code");
const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  hexCode.innerText = randomCode;
  //   console.log(randomCode)
};

document.getElementById("btn").addEventListener("click", getColor);

getColor();
