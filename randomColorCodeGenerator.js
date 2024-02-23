 function generateRandomHexCode() {
  let hexCode = "#";

  for (let i = 0; i < 3; i++) {
    const component = Math.floor(Math.random() * 256).toString(16);
    hexCode += component.padStart(2, "0");
  }

  return hexCode;
}


for (let i = 0; i < 5; i++) {
  console.log(generateRandomHexCode());
}
