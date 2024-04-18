const idOne = document.getElementById('one')

idOne.textContent ='Brenda'

document.getElementById('lone').textContent ='George'

const title = document.querySelector('h1')

title.textContent = 'Dom Manipulations'

const lists = document.querySelectorAll('ul li')

lists[1].textContent = 'John'
lists[2].textContent = 'Peter'
lists[3].textContent = 'George'

const twos = document.querySelectorAll('.two')

twos[0].innerHTML = 'Mikko gadgets'
// inner html allows you to make use of html elements

const deux = document.getElementsByClassName('two')

deux[1].innerText = 'Joshua ia always \n coming to class'
deux[3].innerText = 'Abdulkareem'


lists[3].style.color = 'Blue'
lists[3].style.backgroundColor = 'green'
lists[3].style.paddingBlock = '10px'




