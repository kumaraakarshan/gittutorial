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

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight ='bold';
li[2].style.backgroundColor ='green';
for(var i=0;i<li.length;i++)
{
    //li[i].style.backgroundColor = '#f4f4f4';
    li[i].style.fontWeight ='bold';
}



