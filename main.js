var form =document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);
//add item
function addItem(e)
{
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li =document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text node with input value

    li.appendChild(document.createTextNode(newItem));

    //add delete button
    var deleteBtn = document.createElement('button');
    //add edit button 

    var editBtn = document.createElement('button');

    //add classes to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));

    //add classes to delete button
editBtn.className='btn btn-warning btn-sm float-right edit';
editBtn.appendChild(document.createTextNode('edit'));

    //append button to li
    li.appendChild(deleteBtn);
//append button to li
li.appendChild(editBtn);


    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        console.log(1);
        if(confirm('are you sure'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}





