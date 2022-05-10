const colors = [
    'red' , 'green' , 'blue' , 'black' , 'purple', 'white' , 'chocolate', 'crimson', 'IndianRed', 'FireBrick','DeepPink','OrangeRed','Tomato','	Gold', 'Yellow','Fuchsia', 'Magenta','DarkViolet'
]

const btn = document.querySelector('.btn-hero')
const color = document.querySelector('.color')


btn.addEventListener('click' , function(){
var randomNumber =  getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
color.style.color = colors[randomNumber]
})
function getRandomNumber(){
return Math.floor(Math.random() * colors.length);
}