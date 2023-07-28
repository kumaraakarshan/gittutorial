// console.dir(document);


// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header =document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent='Hello';
// // headerTitle.innerText='good bye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000'


///get element by class name//
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight ='bold';
// items[1].style.backgroundColor ='yellow';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//get elements by tag name

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight ='bold';
// li[2].style.backgroundColor ='green';
// for(var i=0;i<li.length;i++)
// {
//     //li[i].style.backgroundColor = '#f4f4f4';
//     li[i].style.fontWeight ='bold';
// }


//query selector//

// var header = document.querySelector('#main-header');
// header.computedStyleMap.borderBottom ='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";
// var item = document.querySelector('.list-group-item');
// item.style.color='red';
// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';
// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.visibility="hidden";



//query selector all

// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent="Hello";
// var seconditem=document.querySelector('li:nth-child(2)');
// seconditem.style.color='green';
// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');


// for(var i=0;i<odd.length;i++)
// {
// odd[i].style.backgroundColor='green';
// even[i].style.backgroundColor='grey';
// }

//traversing the dom

var itemlist= document.querySelector('#items'); 
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'grey';
// console.log(itemlist.parentNode.parentNode.parentNode);


console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = 'grey';
console.log(itemlist.parentElement.parentElement.parentElement);

//child nodes//
//console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1].style.backgroundColor ='yellow');

// //firstChild
// console.log(itemlist.firstChild);

// //first element child
// console.log(itemlist.firstElementChild);

// itemlist.firstElementChild.textContent = 'Hello';


// //last child
// console.log(itemlist.lastChild);

//last element child
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Hello last';


//next element siblings
console.log(itemlist.nextSibling);

//next element sibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);

//previousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color ='green';

//create a div
var newDiv = document.createElement('div');

//add class name
newDiv.className= 'hello';
//add id
newDiv.id='hello id';

//set attribute
newDiv.setAttribute('title','hello div');

//create text node
var newDivText = document.createTextNode('Hello Word');



//add text to div
newDiv.appendChild(newDivText);


var container=document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize ='30px';
container.insertBefore(newDiv, h1);



var newDiv2 = document.createElement('div');
newDiv2.className= 'hello2';
newDiv2.setAttribute('title','hello div2');

//adding helloword before item 1
var newDivText2 = document.createTextNode('Hello Word');

newDiv2.appendChild(newDivText2);

itemlist.parentNode.insertBefore(newDiv2,itemlist)

