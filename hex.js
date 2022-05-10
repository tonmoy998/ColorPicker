const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexbtn =  document.querySelector(".btn-hero");
const hexcolor = document.querySelector(".color");

hexbtn.addEventListener('click' , function(){
  let hexColor =  "#"
  for (let i = 0; i < 6 ; i++) {
    hexColor += hex[getRandomNum()]
    document.body.style.backgroundColor = hexColor
    hexcolor.textContent = hexColor
  }
})
function getRandomNum(){
  return Math.floor(Math.random() * hex.length)
}