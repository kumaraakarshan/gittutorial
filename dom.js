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

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent="Hello";
var seconditem=document.querySelector('li:nth-child(2)');
seconditem.style.color='green';
var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');


for(var i=0;i<odd.length;i++)
{
odd[i].style.backgroundColor='green';
even[i].style.backgroundColor='grey';
}

