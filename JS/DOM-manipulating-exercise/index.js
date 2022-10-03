const container = document.querySelector('#container')
const content = document.createElement('div')
const par = document.createElement('p')
const subTitle = document.createElement('h3')
const container2 = document.createElement('div')
const subTitle2 = document.createElement('h1')
const par2 = document.createElement('p')

content.classList.add('content')
content.textContent = 'Text Added with JS DOM manipulating'

par.classList.add('p')
par.textContent = 'Hey I\'m Red'
par.setAttribute('style', 'color: red')

subTitle.classList.add('h3')
subTitle.textContent = 'I\'m a blue h3'
subTitle.setAttribute('Style', 'color: blue')

container2.classList.add('content2')
container2.setAttribute('Style', 'border-color: black; background-color: pink')

subTitle2.classList.add('subTitle2')
subTitle2.textContent = 'I\'m in a div'

par2.classList.add('par2')
par2.textContent = 'ME TOO!'

container.appendChild(content, par)
container.appendChild(par)
container.appendChild(subTitle)
container.appendChild(container2)
container2.appendChild(subTitle2)
container2.appendChild(par2)

//events
const btn =  document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const buttons = document.querySelectorAll('button')

btn.onclick= () => alert("Hello World!")
btn2.addEventListener('click', () => {
  alert('Hello World!')
})

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id)
  } )
})
