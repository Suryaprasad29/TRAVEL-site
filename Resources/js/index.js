const itemsController = new ItemsController(0);
const newItemForm = document.querySelector('#newItemForm');
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const createdAt = new Date();

    // Add the task to the task manager
    itemsController.addItem(name, description, createdAt);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
});
function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItemCard({'name':'mangroo',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'the place were all trees grow in the water and land'
});
