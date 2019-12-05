/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

**  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

**  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

**  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

**  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

**  Step 5: return the menu component.

**  Step 6: add the menu component to the DOM.
  
*/

// Create function that creates a menu component
function createMenu (items) {
  // Create elements for html
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  // const listItem = document.createElement('li');

  // Add classes to elements
  menu.classList.add('menu');

  // Loop through the data that will be passed into the function to create the list items
  items.forEach((item, i) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);

    listItem.addEventListener('mouseenter', () => {
      listItem.style.backgroundColor = '#388E3C';
      listItem.style.borderRadius = '25px 0 0 25px';
    })

    listItem.addEventListener('mouseleave', () => {
      listItem.style.backgroundColor = '#81C784';
    })
  })

  // add the list of menu items to the menu div
  menu.appendChild(list);

  // set the menu button
  const menuButton = document.querySelector('.menu-button');

  // create the open/close functionality of the menu
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })

  // listItem.addEventListener('mouseenter', () => {
  //   listItem.style.backgroundColor = '#388E3C';
  // })

  // listItem.addEventListener('mouseleave', () => {
  //   listItem.style.backgroundColor = '#81C784';
  // })

  return menu;
}

// set the parent for the menu and connect it
const header = document.querySelector('.header');

header.appendChild(createMenu(menuItems));
