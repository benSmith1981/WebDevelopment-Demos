document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: 'Item 1', description: 'Description of Item 1' },
        { name: 'Item 2', description: 'Description of Item 2' },
        { name: 'Item 3', description: 'Description of Item 3' },
        { name: 'Item 4', description: 'Description of Item 4' },

        // Add more items as needed
    ];
    // Select the div where items will be displayed
    const itemList = document.getElementById('itemList');
    // Loop through each item and append it to the div
    items.forEach(function(item){
        // Create a new div for this item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item'; // Optionally, add a class for styling
        // Create a paragraph for the name
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${item.name}`;
        itemDiv.appendChild(nameParagraph);

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${item.description}`;
        itemDiv.appendChild(descriptionParagraph);
        // Append the item div to the itemList div
        itemList.appendChild(itemDiv);

    });

});