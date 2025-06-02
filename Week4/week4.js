// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = "The text has been changed successfully!";
        changeableText.style.color = "blue";
    });
    
    // 2. Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleBox = document.getElementById('style-box');
    
    changeStyleBtn.addEventListener('click', function() {
        // Toggle the 'highlight' class
        styleBox.classList.toggle('highlight');
        
        // Additional inline style changes
        if (styleBox.classList.contains('highlight')) {
            changeStyleBtn.textContent = "Remove Highlight";
        } else {
            changeStyleBtn.textContent = "Change Style";
        }
    });
    
    // 3. Add or remove elements dynamically
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementContainer = document.getElementById('element-container');
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = "Newly added paragraph element.";
        newElement.classList.add('new-element');
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const elements = elementContainer.querySelectorAll('p');
        if (elements.length > 1) { // Keep at least one element
            elementContainer.removeChild(elements[elements.length - 1]);
        } else {
            alert("Can't remove the last element!");
        }
    });
});