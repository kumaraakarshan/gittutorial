var form =document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup', filterItems);
//add item
function addItem(e)
{
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('description').value;

    //create new li element
    var li =document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text node with input value
    var combinedText = newItem + ' ' + newItem2;
    li.appendChild(document.createTextNode(combinedText));
    

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
// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
  
    // Convert to an array
    Array.from(items).forEach(function (item) {
      var itemName = item.firstChild.textContent;
      var itemDescElement = item.querySelector('.description');

      //checking if description is empty
      var itemDesc = itemDescElement ? itemDescElement.textContent : "";
      if (itemName.toLowerCase().indexOf(text) !== -1 || itemDesc.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  
  
  
  
  
  
  
  
  





