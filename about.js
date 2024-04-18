const idIntro = document.getElementById('intro')

idIntro.textContent = 'I am George, 24 years of age.'

const clsBody = document.getElementsByClassName('body')

clsBody[0].textContent = ' I am dark skin in complexion and stand at 6 foot 3 inches'
clsBody[1].textContent = "I am a student of Univelcity."
clsBody[2].innerHTML = 'The various stacks that I am currently learning are <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Styling Sheet">CSS</abbr>, <abbr title="JavaScript">js</abbr>, python and Django.'

const para = document.getElementsByTagName('p')

para[5].innerText = "My hobbies are; \n 1) Basketball \n 2) Gym \n 3) Coding"
para[6].textContent = "I reside in Surulere."
para[6].textContent = "This is all you need to know about me"

const title = document.querySelector('h1')

title.style.borderBottom = '5px solid'
title.style.textAlign = 'center'
title.style.color = 'blue'
