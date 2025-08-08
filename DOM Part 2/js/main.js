

const langUl = document.getElementById('langUL');
console.log(langUl);

const li = document.createElement('li');

li.innerText = "React";

langUl.appendChild(li);


const mainContainer = document.getElementById('main-container');

const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = "My Section";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = "list1"
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = "list2"
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = "list3"
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.innerText = "list4"
ul.appendChild(li4)

section.appendChild(ul)
mainContainer.appendChild(section);


const gadgetSection = document.createElement('section')

gadgetSection.innerHTML = `

<h1> My Gadget List </h1>

<ul> 
    <li> Light </li>
    <li> Clock </li>
    <li> Mini Fan </li>
</ul>

`

mainContainer.appendChild(gadgetSection)